import React from "react";
import "./messages.css";

const Messages = ({ type, message, icon }) => {
  return (
    <div className={type}>
      <i className={`fa fa-${icon}`}></i>
      {message}
    </div>
  );
};

export default Messages;
