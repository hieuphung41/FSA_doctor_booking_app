import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import eventsData from "../seeds/eventsData";

const localizer = momentLocalizer(moment);

const convertEvents = (data) => {
  const result = [];

  Object.keys(data).forEach((dateKey) => {
    data[dateKey].forEach((event) => {
      const [startHour, startMinute] = event.time.split(" - ")[0].split(":");
      const [endHour, endMinute] = event.time.split(" - ")[1].split(":");
      const [year, month, day] = dateKey.split("-");

      result.push({
        title: event.content,
        start: new Date(year, month - 1, day, startHour, startMinute),
        end: new Date(year, month - 1, day, endHour, endMinute),
        status: event.status,
      });
    });
  });

  return result;
};

const BigCalendar = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(Views.MONTH);

  useEffect(() => {
    const convertedEvents = convertEvents(eventsData);
    setEvents(convertedEvents);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={[Views.DAY, Views.WEEK, Views.MONTH, Views.AGENDA]}
        view={view}
        onView={(selectedView) => setView(selectedView)}
        style={{ height: "98%" }}
        selectable
        min={new Date(2024, 9, 1, 8, 0, 0)}
        max={new Date(2024, 9, 1, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;
