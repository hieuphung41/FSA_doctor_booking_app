import React from "react";
import CustomBreadcrumb from "./Breadcrumb";
import CustomTable from "./CustomTable";
import patientsData from "../seeds/patientsData";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
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
    sorter: (a, b) => a.medicalHistory.localeCompare(b.medicalHistory),
  },
];

const breadcrumb = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Patients",
    path: "/patients",
  },
  {
    title: "View Patients",
    path: "/patients/view-patients",
  },
];

const data = patientsData.map((patient) => ({
  key: patient.id,
  name: patient.name,
  age: patient.age,
  gender: patient.gender,
  medicalHistory: patient.medicalHistory,
}));

const AdminViewPatients = () => {
  return (
    <div className="m-5">
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default AdminViewPatients;
