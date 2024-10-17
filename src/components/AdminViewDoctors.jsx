import React from "react";
import CustomBreadcrumb from "./Breadcrumb";
import CustomTable from "./CustomTable";
import doctorsData from "../seeds/doctorsData";
import hospitalsData from "../seeds/hospitalsData";
import medicalData from "../seeds/medicalData";

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
    title: "Specialty",
    dataIndex: "specialtyName",
  },
  {
    title: "Hospital",
    dataIndex: "hospitalName",
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "Available",
        value: "Available",
      },
      {
        text: "Unavailable",
        value: "Unavailable",
      },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const breadcrumb = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Admin",
    path: "/admin",
  },
  {
    title: "View Doctors",
    path: "/admin/view-doctors",
  },
];

const data = doctorsData.map((doctor) => ({
  key: doctor.id,
  name: doctor.name,
  age: doctor.age,
  specialtyName:
    medicalData.find(
      (specialty) => Number(specialty.id) === Number(doctor.specialtyId)
    ).name || "Unknown",
  hospitalName:
    hospitalsData.find(
      (hospital) => Number(hospital.id) === Number(doctor.hospitalId)
    ).name || "Unknown",
  status: doctor.status,
  address: doctor.address,
}));

const AdminViewDoctors = () => {
  return (
    <div className="m-5">
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default AdminViewDoctors;
