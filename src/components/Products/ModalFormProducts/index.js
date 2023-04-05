import { useEffect } from "react";
import { Form, Input, InputNumber, Modal } from "antd";

const ModalFormProducts = (props) => {
    const [form] = Form.useForm()

    useEffect(() => {
        if (!props.open) {
            form.resetFields()
        }
    }, [props.open])

    useEffect(() => {
        if (props.open && props.formData.id) {
            form.setFieldsValue(props.formData)
        }
    }, [props.open, props.formData])

    const onSubmit = async () => {
        const values = await form.validateFields()
        props.onSubmit(props.formData.id, values)

    };
    const onCancel = () => {
        if (!props.loading) {
            props.setOpen(false)
        }
    };

    return (
        <Modal open={props.open || props.loading} confirmLoading={props.loading} onOk={onSubmit} onCancel={onCancel}>
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'bắt buộc' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="thumbnail" label="Picture" rules={[{ required: true, message: 'bắt buộc' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="code"
                    label="Code"
                    rules={[
                        { required: true, message: 'bắt buộc' },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name='price' label='Price' >
                    <InputNumber />
                </Form.Item>

                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Bắt buộc' }]}>
                    <Input.TextArea />
                </Form.Item>

            </Form>
        </Modal>
    )
};
export default ModalFormProducts;


