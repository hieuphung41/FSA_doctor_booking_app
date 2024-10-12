import React from "react";
import BigCalendar from "../components/BigCalendar";
import SmallCalendar from "../components/SmallCalendar";

const DoctorDashboard = () => {
  return (
    <>
      <h1 className="text-xl font-semibold text-center">Events</h1>
      <div className="w-full flex xl:flex-row flex-col">
        <div className="w-full h-full bg-white p-4 rounded-md">
          <BigCalendar />
        </div>
        {/* <div className="w-full xl:w-1/3 flex flex-col gap-8">
          <SmallCalendar />
        </div> */}
      </div>
    </>
  );
};

export default DoctorDashboard;
