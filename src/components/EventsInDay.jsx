import React from "react";
import { useParams } from "react-router-dom";
import { Timeline, Badge } from "antd";

const timeSlots = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

const eventsData = {
  "2024-10-01": [
    {
      time: "08:00 - 09:00",
      content: "Team stand-up meeting",
      status: "success",
    },
    { time: "10:00 - 11:00", content: "Client onboarding", status: "pending" },
    {
      time: "14:00 - 15:00",
      content: "Internal project review",
      status: "error",
    },
  ],
  "2024-10-02": [
    { time: "09:00 - 10:00", content: "Presentation prep", status: "pending" },
    {
      time: "11:00 - 12:00",
      content: "Meeting with Client B",
      status: "success",
    },
    { time: "13:00 - 14:00", content: "Design review", status: "pending" },
  ],
  "2024-10-03": [
    { time: "10:00 - 11:00", content: "Strategy planning", status: "success" },
    { time: "13:00 - 14:00", content: "Development update", status: "pending" },
  ],
  "2024-10-05": [
    {
      time: "09:00 - 10:00",
      content: "Meeting with Client C",
      status: "error",
    },
    {
      time: "11:00 - 12:00",
      content: "Review quarterly goals",
      status: "success",
    },
    { time: "14:00 - 15:00", content: "HR update meeting", status: "pending" },
  ],
  "2024-10-08": [
    {
      time: "08:00 - 09:00",
      content: "Meeting with Client D",
      status: "success",
    },
    {
      time: "10:00 - 11:00",
      content: "Technical discussion",
      status: "pending",
    },
    { time: "15:00 - 16:00", content: "Team retrospective", status: "error" },
  ],
  "2024-10-10": [
    { time: "09:00 - 10:00", content: "1:1 with manager", status: "success" },
    { time: "11:00 - 12:00", content: "Product demo", status: "pending" },
    { time: "14:00 - 15:00", content: "Marketing strategy", status: "success" },
  ],
  "2024-10-12": [
    {
      time: "10:00 - 11:00",
      content: "Client feedback session",
      status: "success",
    },
    { time: "13:00 - 14:00", content: "Bug triage", status: "pending" },
  ],
  "2024-10-15": [
    { time: "08:00 - 09:00", content: "Weekly team sync", status: "success" },
    { time: "10:00 - 11:00", content: "Review last sprint", status: "pending" },
    { time: "14:00 - 15:00", content: "Meeting with vendor", status: "error" },
  ],
  "2024-10-18": [
    {
      time: "09:00 - 10:00",
      content: "Product feature discussion",
      status: "success",
    },
    {
      time: "11:00 - 12:00",
      content: "Project deadline planning",
      status: "pending",
    },
    {
      time: "13:00 - 14:00",
      content: "Review project milestones",
      status: "pending",
    },
  ],
  "2024-10-20": [
    {
      time: "08:00 - 09:00",
      content: "Quarterly business review",
      status: "success",
    },
    { time: "12:00 - 13:00", content: "Meeting with CEO", status: "pending" },
  ],
  "2024-10-22": [
    {
      time: "09:00 - 10:00",
      content: "Workshop on UX design",
      status: "success",
    },
    { time: "11:00 - 12:00", content: "Budget planning", status: "pending" },
    { time: "14:00 - 15:00", content: "Client follow-up", status: "pending" },
  ],
  "2024-10-25": [
    {
      time: "08:00 - 09:00",
      content: "Meeting with Client E",
      status: "success",
    },
    {
      time: "10:00 - 11:00",
      content: "Project retrospective",
      status: "error",
    },
    {
      time: "14:00 - 15:00",
      content: "Brainstorming session",
      status: "pending",
    },
  ],
  "2024-10-28": [
    { time: "09:00 - 10:00", content: "Sprint planning", status: "success" },
    { time: "11:00 - 12:00", content: "Design team review", status: "pending" },
    {
      time: "15:00 - 16:00",
      content: "Follow-up with Client F",
      status: "error",
    },
  ],
  "2024-10-30": [
    {
      time: "08:00 - 09:00",
      content: "Review marketing goals",
      status: "pending",
    },
    { time: "10:00 - 11:00", content: "Legal review", status: "error" },
    { time: "13:00 - 14:00", content: "Final presentation", status: "success" },
  ],
};

const EventsInDay = () => {
  const { date } = useParams();
  const events = eventsData[date] || [];

  const findEventByTime = (time) => {
    return events.find((event) => event.time === time);
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-100";
      case "error":
        return "bg-red-100";
      case "pending":
        return "bg-yellow-100";
      default:
        return "bg-gray-100";
    }
  };
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Events on {date}</h1>
      <div className="space-y-4">
        {timeSlots.map((timeSlot, index) => {
          const event = findEventByTime(timeSlot);
          return (
            <div
              key={index}
              className={`p-4 rounded-lg shadow ${
                event ? getStatusColor(event.status) : "bg-gray-50"
              }`}
            >
              <div className="text-lg font-semibold">{timeSlot}</div>
              <div className="text-gray-600">
                {event ? event.content : "No events during this time"}
              </div>
              <div className="flex justify-end">
                {event && (
                  <Badge
                    status={
                      event.status === "success"
                        ? "success"
                        : event.status === "error"
                        ? "error"
                        : "warning"
                    }
                    text={
                      event.status === "success"
                        ? "Completed"
                        : event.status === "error"
                        ? "Cancelled"
                        : "Pending"
                    }
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsInDay;
