import React from "react";
import medicalData from "../seeds/medicalData";

const BookingMedicalExamination = () => {
  return (
    <div className="mx-auto p-5">
      <h2 className="text-center text-2xl font-bold mb-6">
        Da dang chuyen khoa kham
      </h2>
      <p className="text-center mb-10">
        Dat kham de dang va tien loi voi day du chuyen khoa
      </p>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-6">
        {medicalData.map((item) => (
          <div
            key={item.id}
            className="hover:cursor-pointer flex flex-col items-center justify-center p-4 bg-white shadow-md hover:shadow-lg border hover:border-blue-600 rounded-lg transition duration-300 ease-in-out"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 mb-4" />
            <p className="text-center text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingMedicalExamination;
