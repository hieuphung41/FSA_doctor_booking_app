import React from "react";
import { Space, Table, Tag } from "antd";
import doctorsData from "../seeds/doctorsData";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Chuyên ngành",
    dataIndex: "specialty",
    key: "specialty",
  },
  {
    title: "Bệnh viện",
    dataIndex: "hospital",
    key: "hospital",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        <Tag color={status === "Available" ? "green" : "volcano"} key={status}>
          {status.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Update</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const DoctorTable = () => (
  <>
    <h1 className="text-center">Doctor table</h1>
    <Table columns={columns} dataSource={doctorsData} />
  </>
);
export default DoctorTable;
