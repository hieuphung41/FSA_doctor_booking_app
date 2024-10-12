import { useState } from "react";
import BigCalendar from "./components/BigCalendar";
import EventsInDay from "./components/EventsInDay";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DoctorTable from "./components/DoctorTable";
import AddDoctor from "./components/AddDoctor";
import UpdateDoctor from "./components/UpdateDoctor";
import DoctorDashboard from "./components/DoctorDashboard";
import DoctorAppointment from "./components/DoctorAppointment";
import DoctorProfile from "./components/DoctorProfile";
import DoctorAppointmentDetail from "./components/DoctorAppointmentDetail";
import DoctorViewPatients from "./components/DoctorViewPatients";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<BigCalendar />} />
        <Route path="/events/:date" element={<EventsInDay />} />
        <Route path="/doctors" element={<DoctorDashboard />} />
        <Route path="/doctors/view-patients" element={<DoctorViewPatients />} />
        <Route path="/doctors/appointments" element={<DoctorAppointment />} />
        <Route
          path="/doctors/appointments/:appointmentId"
          element={<DoctorAppointmentDetail />}
        />
        <Route path="/doctors/profile" element={<DoctorProfile />} />
        <Route path="/doctors/add" element={<AddDoctor />} />
        <Route path="/doctors/update/:id" element={<UpdateDoctor />} />
      </Routes>
    </>
  );
}

export default App;
