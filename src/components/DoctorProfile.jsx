import React from "react";
import CustomBreadcrumb from "./Breadcrumb";
import doctorsData from "../seeds/doctorsData";

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
    title: "Doctor's Profile",
    path: "/doctors/profile",
  },
];

const DoctorProfile = () => {
  const doctorId = 1;
  const doctorData = doctorsData.find(
    (doctor) => Number(doctor.id) === doctorId
  );
  return (
    <div className="m-5">
      <div className="my-4 flex flex-col gap-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <div className="my-4 flex flex-col gap-4">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="bg-blue-300 w-full sm:max-w-64 rounded-lg"
          />
        </div>
        <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">
          <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">{doctorData.name}</p>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <p>
              {doctorData.specialty} - {doctorData.hospital}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{doctorData.age}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
