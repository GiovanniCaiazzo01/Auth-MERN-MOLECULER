import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState(false);

  return token === true ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
