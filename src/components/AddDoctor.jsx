import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddDoctor = ({ addDoctor }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Xử lý thêm mới
  const onFinish = (values) => {
    addDoctor(values);
    navigate("/");
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="specialty"
        label="Specialty"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="hospital" label="Hospital" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true }]}>
        <Select placeholder="Select status">
          <Option value="Available">Available</Option>
          <Option value="Unavailable">Unavailable</Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add Doctor
      </Button>
    </Form>
  );
};

export default AddDoctor;
