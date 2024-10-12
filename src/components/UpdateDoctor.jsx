import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateDoctor = ({ doctors, updateDoctor }) => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  // Lấy thông tin bác sĩ theo ID
  useEffect(() => {
    const doctor = doctors.find((item) => item.key === id);
    if (doctor) {
      form.setFieldsValue(doctor);
    }
  }, [id, form, doctors]);

  const onFinish = (values) => {
    updateDoctor(id, values);
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
        Update Doctor
      </Button>
    </Form>
  );
};

export default UpdateDoctor;
