import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import doctorsData from "../seeds/doctorsData";
import scheduleData from "../seeds/scheduleData";
import CustomBreadcrumb from "./Breadcrumb";

const DoctorDetail = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
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
      path: "/users/booking/doctors",
    },
    {
      title: "Doctor Detail",
      path: `/users/booking/doctors/${doctorId}`,
    },
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());

  const doctor = doctorsData.find((doc) => doc.id == doctorId);
  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  const getCorrectedDate = (date) => {
    const correctedDate = new Date(date);
    correctedDate.setDate(correctedDate.getDate() + 1);
    return correctedDate.toISOString().split("T")[0];
  };

  const filteredSchedule = scheduleData.filter(
    (schedule) =>
      schedule.doctorId === doctorId &&
      schedule.date === getCorrectedDate(selectedDate)
  );

  const isTimeSlotBusy = (timeSlot, appointments) => {
    const [slotStartHour, slotStartMinute] = timeSlot
      .split(" - ")[0]
      .split(":")
      .map(Number);
    const [slotEndHour, slotEndMinute] = timeSlot
      .split(" - ")[1]
      .split(":")
      .map(Number);

    return appointments.some((appointment) => {
      const [appStartHour, appStartMinute] = appointment.time
        .split(" - ")[0]
        .split(":")
        .map(Number);
      const [appEndHour, appEndMinute] = appointment.time
        .split(" - ")[1]
        .split(":")
        .map(Number);

      const slotStartTime = slotStartHour * 60 + slotStartMinute;
      const slotEndTime = slotEndHour * 60 + slotEndMinute;
      const appStartTime = appStartHour * 60 + appStartMinute;
      const appEndTime = appEndHour * 60 + appEndMinute;

      return (
        (slotStartTime >= appStartTime && slotStartTime < appEndTime) ||
        (slotEndTime > appStartTime && slotEndTime <= appEndTime)
      );
    });
  };

  const generateTimeSlots = () => {
    const slots = [];
    let startTime = 8 * 60;
    const endTime = 17 * 60;
    const interval = 30;

    while (startTime < endTime) {
      const hours = Math.floor(startTime / 60);
      const minutes = startTime % 60;
      const endHours = Math.floor((startTime + interval) / 60);
      const endMinutes = (startTime + interval) % 60;

      const timeSlot = `${hours}:${
        minutes === 0 ? "00" : minutes
      } - ${endHours}:${endMinutes === 0 ? "00" : endMinutes}`;

      const isBusy = isTimeSlotBusy(timeSlot, filteredSchedule);

      slots.push({
        time: timeSlot,
        isBusy: isBusy,
      });

      startTime += interval;
    }
    return slots;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookingClick = (timeSlot) => {
    navigate(`/users/booking/doctors/${doctor.id}/form`, {
      state: { doctor, timeSlot, selectedDate },
    });
  };

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <div className="flex flex-col md:flex-row bg-white p-4 rounded shadow">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full mr-4"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{doctor.name}</h2>
          <p className="text-gray-600">
            {doctor.age} years old - {doctor.specialtyId} years of experience
          </p>
          <p className="text-gray-600">{doctor.specialtyId}</p>
          <p className="mt-2 text-blue-500">{doctor.address}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full md:w-2/3 bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">
            Quick Appointment Booking
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {generateTimeSlots().map((slot, index) => (
              <button
                onClick={() => handleBookingClick(slot.time)}
                key={index}
                className={`p-2 rounded border shadow-sm ${
                  slot.isBusy
                    ? "bg-red-500 text-white cursor-not-allowed"
                    : "bg-white text-black hover:bg-blue-300"
                }`}
                disabled={slot.isBusy}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Select a Date</h3>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      </div>

      <div className="bg-orange-100 p-4 mt-4 rounded shadow">
        <h3 className="font-semibold text-orange-500">Note</h3>
        <p>{doctor.name}'s clinic is open from 8:00 AM to 5:00 PM.</p>
        <p>Address: {doctor.address}</p>
        <p>Consultation fee: 500,000 VND/visit</p>
      </div>

      <div className="bg-white p-4 mt-4 rounded shadow">
        <h3 className="font-semibold text-lg mb-4">Introduction</h3>
        <p>
          {doctor.name} is a doctor with many years of experience in{" "}
          {doctor.specialtyId}. Currently, the doctor is working at{" "}
          {doctor.hospitalId}. To book an appointment, please select a suitable
          time slot above.
        </p>
      </div>
    </div>
  );
};

export default DoctorDetail;
