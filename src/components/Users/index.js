
import { useState, useMemo, useEffect } from "react";
import TableUser from "./TableUser";
import { ButtonCreate, SearchContainer } from "./styled"
import axios from "axios";
import { Modal } from "antd";
// import ButtonImport from "./ButtonImport";
// import SearchBox from "./SearchBox";
import ModalFormUser from "./ModalFormUser";
const DEFAULT_USERS = { name: "", avatar: "", email: "", phone: "", status: "" }

const Users = () => {

    const [formData, setFormData] = useState(DEFAULT_USERS)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)
    const [keyword, setKeyWord] = useState('')
    const [tableloading, setTableLoading] = useState(false)
    const [submitloading, setSubmitLoading] = useState(false)
    const [itemloading, setItemLoading] = useState(false)


    useEffect(() => {
        axios.get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/User').then((res) => {
            setDataSource(res.data)
        })
    }, []);

    const fetchData = () => {
        setTableLoading(true)

        axios
            .get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/User')
            .then((res) => {
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
    }
    // const onSearch = (e) => {
    //     setKeyWord(e.target.value)
    // }
    const searchDataSource = useMemo(() => {
        if (keyword) {

            return dataSource.filter((item) => {
                return item.name.includes(keyword) || item.country.includes(keyword)
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
                {/* <SearchBox onChange={onSearch} /> */}
                <div>

                    <ButtonCreate onClick={onCreate}>New Users</ButtonCreate>
                </div>

            </SearchContainer>


            <TableUser
                loading={tableloading}
                itemloading={itemloading}
                dataSource={searchDataSource} onEdit={onEdit} onDelete={onDelete} />


        </div>
    );
};

export default Users;


