import { Table } from "antd";
import { Actions, ButtonActions, Country, Image } from "./styled"

const TableUser = (props) => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: "20%"
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            width: "30%",
            render: (_, item) => {
                return (
                    <Country>
                        <Image src={item.avatar} />
                        <div>
                            <h6>{item.avatar}</h6>

                        </div>
                    </Country>
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
            width: "15%"
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: "15%"
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



