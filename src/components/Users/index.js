
import { useState, useMemo, useEffect } from "react";
import TableUser from "./TableUser";
import ModalFormUser from "./ModalFormUser";
import { ButtonCreate, SearchContainer } from "./styled";
import axios from "axios";
import { Modal } from "antd";
// import ButtonImport from "./ButtonImport";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router-dom"
const DEFAULT_USERS = { name: "", avatar: "", email: "", phone: "", status: "" };

const Users = () => {

    const location = useLocation();
    const [formData, setFormData] = useState(DEFAULT_USERS)
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
        const baseUrl = "https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/User";
        const keyword = searchParams.has("keyword") ? searchParams.get("keyword") : "";
        const page = searchParams.has("page") ? searchParams.get("page") : 1;
        const limit = searchParams.has("limit") ? searchParams.get("limit") : 10;

        setTableLoading(true);
        //muốn xem tổng số trang thì bỏ qua &page=${page}&limit=${limit} dòng bên dưới
        axios.get(`${baseUrl}?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
            setDataSource(res.data)
            setTableLoading(false)
        });
    };

    const onCreate = () => {
        setFormData(DEFAULT_USERS);
        setOpen(true)
    };
    const onEdit = (id) => {
        setItemLoading(true)
        axios
            .get(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/User/${id}`)
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
                    .delete(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/User/${id}`)
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
            axios.put(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/User/${id}`, data).then((res) => {
                setSubmitLoading(false)
                setFormData(DEFAULT_USERS);
                setOpen(false);
                fetchData()
            })

        }
        else {
            axios.post('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/User', data).then((res) => {
                setSubmitLoading(false)
                setFormData(DEFAULT_USERS);
                setOpen(false);
                fetchData()
            });

        };
    };
    const onSearch = (e) => {
        setKeyWord(e.target.value)
    };
    const searchDataSource = useMemo(() => {
        if (keyword) {

            return dataSource.filter((item) => {
                return item.name.includes(keyword) || item.email.includes(keyword)
            })
        }
        return dataSource
    }, [keyword, dataSource]);

    return (
        <div>
            <ModalFormUser
                loading={submitloading}
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                formData={formData}
                onChange={onChange} />

            <SearchContainer>

                <SearchBox onChange={onSearch} />
                <ButtonCreate onClick={onCreate}>New Users</ButtonCreate>

            </SearchContainer>

            <TableUser
                loading={tableloading}
                itemloading={itemloading}
                dataSource={searchDataSource} onEdit={onEdit} onDelete={onDelete} />


        </div>
    );
};

export default Users;


