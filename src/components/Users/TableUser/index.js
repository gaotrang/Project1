import { Table } from "antd";
import { Actions, ButtonActions, User, Image } from "./styled"

const TableUser = (props) => {

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
                        <ButtonActions
                            disabled={props.itemloading}
                            onClick={() => {
                                props.onEdit(item.id);
                            }}
                        >Edit
                        </ButtonActions>

                        <ButtonActions
                            disabled={props.itemloading}
                            onClick={() => {
                                props.onDelete(item.id);
                            }}
                        >Delete
                        </ButtonActions>
                    </Actions>
                );
            },
        },
    ];
    return (
        <Table
            loading={props.loading}
            dataSource={props.dataSource}
            columns={columns} />
    )
};

export default TableUser;



