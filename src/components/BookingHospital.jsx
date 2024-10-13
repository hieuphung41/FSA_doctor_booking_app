import React, { useState } from "react";
import hospitalsData from "../seeds/hospitalsData";

const BookingHospital = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const hospitalsPerPage = 5;

  // Logic phân trang
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = hospitalsData.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  // Tính tổng số trang
  const totalPages = Math.ceil(hospitalsData.length / hospitalsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-center text-2xl font-bold mb-6">
        Dat kham truc tuyen voi cac benh vien
      </h2>
      <p className="text-center mb-10">
        Chu dong chon lich hen - khong can phai doi cho
      </p>
      <ul className="divide-y divide-gray-300">
        {currentHospitals.map((hospital) => (
          <li key={hospital.id} className="flex items-center py-4">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-16 h-16 mr-4"
            />
            <div>
              <p className="font-semibold text-lg">{hospital.name}</p>
              <p>{hospital.address}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <ul className="inline-flex items-center -space-x-px">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-3 py-2 leading-tight ${
                  currentPage === index + 1
                    ? "text-white bg-blue-600 border border-blue-600"
                    : "text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingHospital;
