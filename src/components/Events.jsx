import React from "react";
import {
  BsCalendarEvent,
  BsClockFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";

const Events = ({ events }) => {
  console.log(events);

  if (events.length === 0) {
    return (
      <div className="border-2 rounded-md text-sm mt-16 px-4 py-2">
        <h2 className="text-lg mb-3 font-medium">Upcoming Events</h2>
        <p>No Upcoming Events</p>
      </div>
    );
  }

  return (
    <div className="border-2 rounded-md text-sm mt-16 px-4 py-2">
      <h2 className="text-lg mb-3">Upcoming Events</h2>
      {events.map((event) => {
        return (
          <div className="border-t-2 py-2 my-2">
            <p className="font-medium">{event.eventName}</p>
            <p className="flex items-center mt-2">
              <BsCalendarEvent />
              <span className="ml-2">{event.eventDate}</span>
            </p>
            <p className="flex items-center mt-2">
              <BsClockFill />
              <span className="ml-2">{event.eventTime}</span>
            </p>
            <p className="flex items-center mt-2">
              <BsFillCameraVideoFill />
              <span className="ml-2 text-blue-600 cursor-pointer">Link</span>
            </p>
            <p className="flex items-center mt-2">
              Duration - {event.eventDuration} minutes
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
