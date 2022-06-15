import React from "react";
import "./generalError.css";

export const GeneralError = ({ text }) => {
  return (
    <div className="error-container">
      <p>{text}</p>
    </div>
  );
};
