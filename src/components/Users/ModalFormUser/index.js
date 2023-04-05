import { useEffect } from "react";
import { Form, Input, InputNumber, Modal, Select } from "antd";

const ModalFormUser = (props) => {
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
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Bat buoc' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="avatar" label="avatar" rules={[{ required: true, message: 'Bat buoc' }]}>
                    <Input />

                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Bat buoc' }, { type: "email" }
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name='phone' label='Phone' >
                    <InputNumber />
                </Form.Item>

                <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Bắt buộc' }]}>
                    <Select options={[
                        { value: 'ON', label: 'ON' },
                        { value: 'OFF', label: 'OFF' }
                    ]} />

                </Form.Item>

            </Form>
        </Modal>
    )
};
export default ModalFormUser;


