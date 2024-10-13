import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom"; // Thêm Outlet để hiển thị component con
import { IoMedicalOutline } from "react-icons/io5";
import { IoBusinessOutline } from "react-icons/io5";
import { IoMedkitOutline } from "react-icons/io5";
import CustomBreadcrumb from "../components/Breadcrumb";

// Breadcrumb chung cho các loại đặt lịch
const breadcrumb = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Users",
    path: "/users",
  },
  {
    title: "User Booking",
    path: "/users/booking",
  },
];

const UserBookingAppointment = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại để xử lý UI
  const currentPath = location.pathname;

  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>

      {/* Navbar cho các tùy chọn Booking */}
      <div className="w-full h-full bg-white flex items-center justify-center gap-2">
        {/* Booking Doctors */}
        <Link
          to="/users/booking/doctors"
          className={`flex items-center justify-center border-b-4 cursor-pointer p-4 md:w-1/3 w-full text-center ${
            currentPath.includes("doctors")
              ? "text-blue-600 border-blue-600"
              : "hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          <IoMedicalOutline className="mr-2" />
          <p className="hidden md:block">Booking Doctors</p>
          <p className="md:hidden">Doctor</p>
        </Link>

        {/* Booking Hospital */}
        <Link
          to="/users/booking/hospital"
          className={`flex items-center justify-center border-b-4 cursor-pointer p-4 md:w-1/3 w-full text-center ${
            currentPath.includes("hospital")
              ? "text-blue-600 border-blue-600"
              : "hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          <IoBusinessOutline className="mr-2" />
          <p className="hidden md:block">Booking Hospitals</p>
          <p className="md:hidden">Hospital</p>
        </Link>

        {/* Booking Medical Examination */}
        <Link
          to="/users/booking/medical"
          className={`flex items-center justify-center border-b-4 cursor-pointer p-4 md:w-1/3 w-full text-center ${
            currentPath.includes("medical")
              ? "text-blue-600 border-blue-600"
              : "hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          <IoMedkitOutline className="mr-2" />
          <p className="hidden md:block">Booking Medical Examination</p>
          <p className="md:hidden">Medical</p>
        </Link>
      </div>

      {/* Đây là nơi Outlet sẽ hiển thị component con dựa trên Route */}
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default UserBookingAppointment;
