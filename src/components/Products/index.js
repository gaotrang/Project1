//Book: title, author, descrition, type, so trang
//style-component
//API
import { useState, useMemo, useEffect } from "react";
import TableProducts from "./TableProducts";
import ModalFormProducts from "./ModalFormProducts";
import { ButtonCreate, SearchContainer } from "./styled"
import axios from "axios";
import { Modal } from "antd";
// import ButtonImport from "./ButtonImport";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router-dom"

const DEFAULT_PRODUCTS = { name: "", code: "", price: "", description: "", thumbnail: "" }

const Products = () => {
    // const [modal, contextHolder] = Modal.useModal();
    const location = useLocation();
    const [formData, setFormData] = useState(DEFAULT_PRODUCTS)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)
    const [keyword, setKeyWord] = useState('')
    const [tableloading, setTableLoading] = useState(false)
    const [submitloading, setSubmitLoading] = useState(false)
    const [itemloading, setItemLoading] = useState(false)

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = () => {

        const searchParams = new URLSearchParams(location.search);
        const baseUrl = "https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/products";
        const keyword = searchParams.has("keyword") ? searchParams.get("keyword") : "";
        const page = searchParams.has("page") ? searchParams.get("page") : 1;
        const limit = searchParams.has("limit") ? searchParams.get("limit") : 10;
        setTableLoading(true)
        //muốn xem tổng số trang thì bỏ qua &page=${page}&limit=${limit} dòng bên dưới
        axios.get(`${baseUrl}?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
            setDataSource(res.data)
            setTableLoading(false)
        });
    };

    const onCreate = () => {
        setFormData(DEFAULT_PRODUCTS);
        setOpen(true)
    };
    const onEdit = (id) => {
        setItemLoading(true)
        axios
            .get(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/products/${id}`)
            .then((res) => {
                setItemLoading(false)
                setFormData(res.data);
                setOpen(true);
            })

    };
    const onDelete = (id) => {

        Modal.confirm({
            title: "Xóa dữ liệu này?",
            content: "Dữ liệu sẽ bị xóa vĩnh viễn.",
            onOk() {
                setItemLoading(true)
                axios
                    .delete(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/products/${id}`)
                    .then((res) => {
                        setItemLoading(false)
                        fetchData()
                    })
            }
        });
    }
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const onSubmit = (id, data) => {
        setSubmitLoading(true)
        if (id) {
            axios.put(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/products/${id}`, data).then((res) => {
                setSubmitLoading(false)
                setFormData(DEFAULT_PRODUCTS);
                setOpen(false);
                fetchData()
            })
        }
        else {
            axios.post('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/products', data).then((res) => {
                setSubmitLoading(false)
                setFormData(DEFAULT_PRODUCTS);
                setOpen(false);
                fetchData()
            });

        };
    }
    const onSearch = (e) => {
        setKeyWord(e.target.value)
    };
    const searchDataSource = useMemo(() => {
        if (keyword) {

            return dataSource.filter((item) => {
                return item.name.includes(keyword) || item.code.includes(keyword)
            })
        }
        return dataSource
    }, [keyword, dataSource]);


    const onImport = async (items) => {
        setTableLoading(true)
        for (let i = 0; i < items.length; i++) {
            await axios.post("https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/products/", items[i])
        }
        fetchData();
    }

    return (
        <div>
            <ModalFormProducts
                loading={submitloading}
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                formData={formData}
                onChange={onChange} />

            <SearchContainer>
                <SearchBox onChange={onSearch} />
                <div>
                    <ButtonCreate onClick={onCreate}>New Products</ButtonCreate>
                </div>

            </SearchContainer>


            <TableProducts
                loading={tableloading}
                itemloading={itemloading}
                dataSource={searchDataSource} onEdit={onEdit} onDelete={onDelete} />


        </div>
    );
};

export default Products;


