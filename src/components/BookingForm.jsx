import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CustomBreadcrumb from "./Breadcrumb";

const { TextArea } = Input;

const BookingForm = () => {
  const { state } = useLocation();
  const { doctorId } = useParams();
  const { doctor, timeSlot, selectedDate } = state;

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
    {
      title: "Doctors",
      path: `/users/booking/doctors`,
    },
    {
      title: "Booking Form",
      path: `/users/booking/doctors/${doctorId}/form`,
    },
  ];

  const [note, setNote] = useState("");
  const [files, setFiles] = useState([]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleFileChange = ({ fileList }) => {
    setFiles(fileList);
  };

  const handleConfirmBooking = () => {
    // Logic xử lý khi người dùng nhấn "Confirm Booking"
    console.log("Booking Confirmed");
    console.log("Note: ", note);
    console.log("Files: ", files);
  };

  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>

      {/* Booking Confirmation */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-semibold mb-4">Confirm Your Booking</h2>
        <p>
          <strong>Doctor: </strong> {doctor.name}
        </p>
        <p>
          <strong>Date: </strong> {selectedDate.toLocaleDateString()}
        </p>
        <p>
          <strong>Time Slot: </strong> {timeSlot}
        </p>
      </div>

      {/* Patient Information Form */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Patient Information</h3>

        {/* Patient Profile */}
        <div className="border rounded-lg p-4 mb-4">
          <div className="flex items-center mb-2">
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex justify-center items-center">
              HI
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium">Phùng Đức Hiếu</h4>
              <p className="text-sm text-gray-600">04/01/2004</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <TextArea
          placeholder="Triệu chứng, thuốc đang dùng, tiền sử,..."
          rows={4}
          value={note}
          onChange={handleNoteChange}
          className="mb-4"
        />

        {/* File Upload */}
        <Upload
          fileList={files}
          onChange={handleFileChange}
          beforeUpload={() => false}
          maxCount={5}
          listType="text"
        >
          <Button icon={<UploadOutlined />}>
            Chọn tập tin hoặc kéo thả (0/5)
          </Button>
        </Upload>
      </div>

      {/* Confirm Button */}
      <div className="bg-white p-4 mt-4 rounded shadow">
        <Button
          type="primary"
          className="w-full"
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingForm;
