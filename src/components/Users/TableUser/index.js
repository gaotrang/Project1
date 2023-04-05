import { Table } from "antd";
import { Actions, ButtonEdit, ButtonDelete, User, Image } from "./styled"

import { useLocation, useNavigate, } from "react-router-dom";

const TableUser = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: "15%"
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            width: "15%",
            render: (_, item) => {
                return (
                    <User>
                        <Image src={item.avatar} />
                    </User>
                )
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '15%'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: "17%"
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: "17%"
        },
        {
            title: "",
            dataIndex: 'actions',
            render: (text, item) => {
                return (
                    <Actions>
                        <ButtonEdit
                            disabled={props.itemloading}
                            onClick={() => {
                                props.onEdit(item.id);
                            }}
                        >Edit
                        </ButtonEdit>

                        <ButtonDelete
                            disabled={props.itemloading}
                            onClick={() => {
                                props.onDelete(item.id);
                            }}
                        >Delete
                        </ButtonDelete>
                    </Actions>
                );
            },
        },
    ];
    return (
        <Table
            loading={props.loading}
            dataSource={props.dataSource}
            columns={columns}
            onChange={(pagination) => {
                const searchParams = new URLSearchParams(location.search)
                searchParams.set("page", pagination.current);
                searchParams.set("limit", pagination.pageSize);

                navigate(`${location.pathname}?${searchParams.toString()}`);


            }} />
    )
};

export default TableUser;



