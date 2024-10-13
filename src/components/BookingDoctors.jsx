import React, { useState } from "react";
import medicalData from "../seeds/medicalData";
import doctorsData from "../seeds/doctorsData"; // Điều chỉnh đường dẫn
import hospitalsData from "../seeds/hospitalsData"; // Điều chỉnh đường dẫn
import { useNavigate } from "react-router-dom";

const BookingDoctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState(""); // State cho tìm kiếm chuyên khoa
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 5;
  const navigate = useNavigate();

  // Lấy tên chuyên khoa từ medicalData theo specialtyId
  const getSpecialtyName = (specialtyId) => {
    const specialty = medicalData.find(
      (specialty) => specialty.id === specialtyId
    );
    return specialty ? specialty.name : "Unknown";
  };

  // Lấy tên bệnh viện từ hospitalsData theo hospitalId
  const getHospitalName = (hospitalId) => {
    const hospital = hospitalsData.find(
      (hospital) => hospital.id === hospitalId
    );
    return hospital ? hospital.name : "Unknown Hospital";
  };

  // Lọc bác sĩ theo chuyên khoa
  const filteredDoctors =
    selectedSpecialty === "Tất cả"
      ? doctorsData
      : doctorsData.filter(
          (doctor) => doctor.specialtyId === parseInt(selectedSpecialty)
        );

  // Lọc chuyên khoa theo search term
  const filteredSpecialties = medicalData.filter((specialty) =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Phân trang
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialty(specialty);
    setCurrentPage(1); // Reset về trang đầu tiên khi thay đổi chuyên khoa
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row">
        {/* Bộ lọc chuyên khoa */}
        <div className="w-full md:w-1/4 mb-5 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Chuyên khoa</h3>
          <input
            type="text"
            placeholder="Tìm nhanh chuyên khoa"
            className="border p-2 w-full mb-4"
            value={searchTerm}
            onChange={handleSearchChange} // Cập nhật search term
          />
          <ul className="overflow-y-auto h-64">
            <li>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="specialty"
                  value="Tất cả"
                  checked={selectedSpecialty === "Tất cả"}
                  onChange={() => handleSpecialtyChange("Tất cả")}
                  className="form-radio"
                />
                <span className="ml-2">Tất cả</span>
              </label>
            </li>
            {filteredSpecialties.map((specialty) => (
              <li key={specialty.id}>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="specialty"
                    value={specialty.id}
                    checked={parseInt(selectedSpecialty) === specialty.id}
                    onChange={() => handleSpecialtyChange(specialty.id)}
                    className="form-radio"
                  />
                  <span className="ml-2">{specialty.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Danh sách bác sĩ */}
        <div className="w-full md:w-3/4">
          <h3 className="text-lg font-semibold mb-4">
            Tìm thấy {filteredDoctors.length} kết quả
          </h3>
          <ul className="divide-y divide-gray-300">
            {currentDoctors.map((doctor) => (
              <li key={doctor.id} className="flex items-center py-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg">{doctor.name}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">
                      {getSpecialtyName(doctor.specialtyId)}
                    </span>
                  </div>
                  <p>{getHospitalName(doctor.hospitalId)}</p>
                  <p>{doctor.address}</p>
                </div>
                <button
                  onClick={() => navigate(`/users/booking/doctors/${doctor.id}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Đặt khám
                </button>
              </li>
            ))}
          </ul>

          {/* Phân trang */}
          <div className="flex justify-center mt-6">
            <ul className="inline-flex items-center -space-x-px">
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
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
      </div>
    </div>
  );
};

export default BookingDoctors;
