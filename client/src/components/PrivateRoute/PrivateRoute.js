import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
