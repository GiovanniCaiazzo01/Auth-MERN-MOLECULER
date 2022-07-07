import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...props }) => {
  const [jwt, setJwt] = useState("");

  console.log("private route", props);

  return jwt ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
