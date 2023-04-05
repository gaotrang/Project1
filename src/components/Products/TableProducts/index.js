import { Table, Button } from "antd";
import { Actions, ButtonActions, Products, Image, Price } from "./styled"
import { UserOutlined } from '@ant-design/icons'
//INPUT: dataSource, onEdit, onDelete

const getColor = (price) => {
    if (price < 5) {
        return "darkgreen";
    }
    if (price < 10) {
        return "darkorange";
    }
    return "darkred"
};

const TableProducts = (props) => {

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'name',
            key: 'name',
            width: "20%"
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'thumnbnail',
            key: 'thumnbnail',
            width: "15%",
            render: (_, item) => {
                return (
                    <Products>
                        <Image src={item.thumbnail} />
                        <div>
                            <h6>{item.code}</h6>
                            <div>{item.code}</div>
                        </div>
                    </Products>
                )
            }
        },
        {
            title: 'Gía sản phẩm ',
            dataIndex: 'price',
            key: 'price',
            width: "20%",
            render: (_, item) => {
                const color = getColor(item.price)
                return (
                    <Price color={color}>
                        {item.price} < UserOutlined />
                    </Price>
                )
            }
        },
        {
            title: 'Mô tả ',
            dataIndex: 'description',
            key: 'description',
            width: "20%",
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

export default TableProducts;



