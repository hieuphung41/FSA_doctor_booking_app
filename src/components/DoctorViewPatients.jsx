import React from "react";
import { Table } from "antd";
import patientsData from "../seeds/patientsData";
import CustomBreadcrumb from "./Breadcrumb";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    filters: [
      {
        text: "Female",
        value: "Female",
      },
      {
        text: "Male",
        value: "Male",
      },
    ],
    onFilter: (value, record) => record.gender === value,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      {
        text: "Female",
        value: "Female",
      },
      {
        text: "Male",
        value: "Male",
      },
    ],
    onFilter: (value, record) => record.gender === value,
  },
  {
    title: "Medical History",
    dataIndex: "medicalHistory",
    sorter: (a, b) => a.medicalHistory.length - b.medicalHistory.length,
  },
];

const breadcrumb = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Doctors",
    path: "/doctors",
  },
  {
    title: "View Patients",
    path: "/doctors/view-patients",
  },
];

const data = patientsData.map((patient) => ({
  key: patient.id,
  name: patient.name,
  age: patient.age,
  gender: patient.gender,
  medicalHistory: patient.medicalHistory,
}));

const DoctorViewPatients = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="m-5">
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default DoctorViewPatients;
