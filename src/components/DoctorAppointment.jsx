import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";
import scheduleData from "../seeds/scheduleData";
import CustomBreadcrumb from "./Breadcrumb";

const localizer = momentLocalizer(moment);

const convertSchedules = (data) => {
  return data.map((event) => {
    const [startHour, startMinute] = event.time.split(" - ")[0].split(":");
    const [endHour, endMinute] = event.time.split(" - ")[1].split(":");
    const [year, month, day] = event.date.split("-");

    return {
      id: event.id,
      title: event.content,
      start: new Date(year, month - 1, day, startHour, startMinute),
      end: new Date(year, month - 1, day, endHour, endMinute),
      status: event.status,
    };
  });
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
  {
    title: "Doctor Appointments",
    path: "/doctors/appointments",
  },
];

const DoctorAppointment = () => {
  const doctorId = 1;
  const [schedule, setSchedules] = useState([]);
  const [view, setView] = useState(Views.MONTH);
  const navigate = useNavigate();

  useEffect(() => {
    const convertedSchedules = convertSchedules(
      scheduleData.filter((x) => Number(x.doctorId) === doctorId)
    );
    setSchedules(convertedSchedules);
  }, []);

  const handleSelectEvent = (event) => {
    navigate(`/doctors/appointments/${event.id}`);
  };

  return (
    <div style={{ height: "100vh" }} className="m-5">
      <div className="my-4">
        <CustomBreadcrumb breadcrumbItems={breadcrumb} />
      </div>
      <Calendar
        localizer={localizer}
        events={schedule}
        startAccessor="start"
        endAccessor="end"
        views={[Views.DAY, Views.WEEK, Views.MONTH, Views.AGENDA]}
        view={view}
        onView={(selectedView) => setView(selectedView)}
        style={{ height: "98%" }}
        selectable
        min={new Date(2024, 9, 1, 8, 0, 0)}
        max={new Date(2024, 9, 1, 17, 0, 0)}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default DoctorAppointment;
