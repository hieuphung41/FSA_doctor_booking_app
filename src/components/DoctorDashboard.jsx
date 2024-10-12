import React, { useState, useEffect, useMemo } from "react";
import assets from "../assets/assets_admin/assets.js";
import doctorsData from "../seeds/doctorsData.js";
import patientsData from "../seeds/patientsData.js";
import scheduleData from "../seeds/scheduleData.js";
import { useNavigate } from "react-router-dom";
import CustomBreadcrumb from "./Breadcrumb.jsx";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const breadcrumb = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Doctors",
    path: "/doctors",
  },
];

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const doctorId = 1;
  const itemsPerPage = 5;
  const today = new Date();
  const formattedToday = formatDate(today);

  const filterAndSortScheduleData = useMemo(() => {
    return scheduleData
      .filter((x) => {
        const scheduleDate = new Date(x.date);
        return x.date < formattedToday && Number(x.doctorId) === doctorId;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [formattedToday, doctorId]);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(filterAndSortScheduleData.slice(startIndex, endIndex));
  }, [currentPage, filterAndSortScheduleData]);

  const totalPages = Math.ceil(filterAndSortScheduleData.length / itemsPerPage);

  function getPatientsPerDoctor(scheduleData) {
    const patientsPerDoctor = [];
    for (let i = 0; i < scheduleData.length; i++) {
      if (Number(scheduleData[i].doctorId) === doctorId) {
        if (!patientsPerDoctor.includes(scheduleData[i].patientId)) {
          patientsPerDoctor.push(scheduleData[i].patientId);
        }
      }
    }
    return patientsPerDoctor.length;
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="m-5">
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <div className="flex flex-wrap gap-4">
        <div
          onClick={() => navigate("/doctors/profile")}
          className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-grgay-100 cursor-pointer hover:scale-105 transition-all"
        >
          <img className="w-14" src={assets.doctor_icon} alt="" />
          <div className="">
            <p className="text-xl font-semibold text-gray-600">View profile</p>
          </div>
        </div>

        <div
          onClick={() => navigate("/doctors/appointments")}
          className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-grgay-100 cursor-pointer hover:scale-105 transition-all"
        >
          <img className="w-14" src={assets.appointments_icon} alt="" />
          <div className="">
            <p className="text-xl font-semibold text-gray-600">
              {
                scheduleData.filter((x) => Number(x.doctorId) === doctorId)
                  .length
              }
            </p>
            <p className="text-gray-400">Appointments</p>
          </div>
        </div>

        <div
          onClick={() => navigate("/doctors/view-patients")}
          className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-grgay-100 cursor-pointer hover:scale-105 transition-all"
        >
          <img className="w-14" src={assets.patients_icon} alt="" />
          <div className="">
            <p className="text-xl font-semibold text-gray-600">
              {getPatientsPerDoctor(scheduleData)}
            </p>
            <p className="text-gray-400">Patients</p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
          <img src={assets.list_icon} alt="" />
          <p className="font-semibold">Latest booking</p>
        </div>

        <div className="pt-4 border border-t-0">
          {currentData.length > 0 ? (
            currentData.map((schedule, index) => (
              <div
                className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100"
                key={index}
                onClick={() => navigate(`/doctors/appointments/${schedule.id}`)}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="patient"
                  className="rounded-full w-10"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800">{schedule.content}</p>
                  <p className="text-gray-600">
                    Time: {schedule.time}. Date: {schedule.date}
                  </p>
                </div>
                {schedule.status === "done" && (
                  <p className=" text-blue-400 text-xs font-medium">Done</p>
                )}
                {schedule.status === "pending" && (
                  <p className=" text-yellow-400 text-xs font-medium">
                    Pending
                  </p>
                )}
                {schedule.status === "cancel" && (
                  <p className=" text-red-400 text-xs font-medium">Cancel</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center py-4">No appointments found.</p>
          )}
        </div>

        <div className="flex justify-center items-center py-4">
          <button
            className="px-4 py-2 mx-2 bg-gray-300 rounded"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            className="px-4 py-2 mx-2 bg-gray-300 rounded"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
