import React from "react";
import { useParams } from "react-router-dom";
import { Table, Descriptions } from "antd";
import scheduleData from "../seeds/scheduleData";
import doctorsData from "../seeds/doctorsData";
import patientsData from "../seeds/patientsData";
import CustomBreadcrumb from "./Breadcrumb";

const getDoctorName = (doctorId) => {
  const doctor = doctorsData.find((doc) => doc.id === doctorId);
  return doctor ? doctor.name : "Unknown Doctor";
};

const getPatientName = (patientId) => {
  const patient = patientsData.find((pat) => pat.id === patientId);
  return patient ? patient.name : "Unknown Patient";
};

const DoctorAppointmentDetail = () => {
  const { appointmentId } = useParams();

  const appointment = scheduleData.find((item) => item.id === appointmentId);

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
      title: "Doctor Appointments",
      path: "/doctors/appointments",
    },
    {
      title: `Appointment Detail`,
      path: `/doctors/appointments/${appointmentId}`,
    },
  ];

  if (!appointment) {
    return <p>Appointment not found</p>;
  }

  return (
    <div className="m-5">
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <Descriptions bordered title="Appointment Details" layout="vertical">
        <Descriptions.Item label="Doctor">
          {getDoctorName(appointment.doctorId)}
        </Descriptions.Item>
        <Descriptions.Item label="Patient">
          {getPatientName(appointment.patientId)}
        </Descriptions.Item>
        <Descriptions.Item label="Date">{appointment.date}</Descriptions.Item>
        <Descriptions.Item label="Time">{appointment.time}</Descriptions.Item>
        <Descriptions.Item label="Content">
          {appointment.content}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {appointment.status}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default DoctorAppointmentDetail;
