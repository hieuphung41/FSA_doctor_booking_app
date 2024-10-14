import { useState } from "react";
import BigCalendar from "./components/BigCalendar";
import EventsInDay from "./components/EventsInDay";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DoctorTable from "./components/DoctorTable";
import AddDoctor from "./components/AddDoctor";
import UpdateDoctor from "./components/UpdateDoctor";
import DoctorDashboard from "./components/DoctorDashboard";
import DoctorAppointment from "./components/DoctorAppointment";
import DoctorProfile from "./components/DoctorProfile";
import DoctorAppointmentDetail from "./components/DoctorAppointmentDetail";
import DoctorViewPatients from "./components/DoctorViewPatients";
import UserBookingAppointment from "./pages/UserBookingAppointment";
import DoctorDetail from "./components/DoctorDetail";
import BookingDoctors from "./components/BookingDoctors";
import BookingHospital from "./components/BookingHospital";
import BookingMedicalExamination from "./components/BookingMedicalExamination";
import BookingForm from "./components/BookingForm";

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
        <Route path="/users/booking" element={<UserBookingAppointment />}>
          <Route index element={<Navigate to="doctors" />} />
          <Route path="doctors" element={<BookingDoctors />} />
          <Route path="hospital" element={<BookingHospital />} />
          <Route path="medical" element={<BookingMedicalExamination />} />
        </Route>
        <Route
          path="/users/booking/doctors/:doctorId/form"
          element={<BookingForm />}
        />
        <Route
          path="/users/booking/doctors/:doctorId"
          element={<DoctorDetail />}
        />
        <Route path="/doctors/profile" element={<DoctorProfile />} />
        <Route path="/doctors/add" element={<AddDoctor />} />
        <Route path="/doctors/update/:id" element={<UpdateDoctor />} />
      </Routes>
    </>
  );
}

export default App;
