import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Moment from "react-moment";

function getHumanizeDate(date, fullDate, addYear = 0) {
  // can be used
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dates = new Date(date);
  const day = dates.getDate();
  const month = dates.getMonth();
  const year = dates.getFullYear() + addYear;
  const hour = dates.getHours();
  const minute =
    dates.getMinutes() < 10 ? `0${dates.getMinutes()}` : dates.getMinutes();
  const time = hour > 12 ? `${hour - 12}:${minute} PM` : `${hour}:${minute} AM`;
  return date && fullDate
    ? `${year}/${month + 1}/${day} ${time}`
    : `${year}/${month + 1}/${day}`;
}

const CustomDate = ({ date }) => {
  return (
    <OverlayTrigger
      overlay={
        <Tooltip>{getHumanizeDate(date)}</Tooltip>
      }
    >
      <div>
        <Moment fromNow>{date}</Moment>
      </div>
    </OverlayTrigger>
  );
};

export default CustomDate;
