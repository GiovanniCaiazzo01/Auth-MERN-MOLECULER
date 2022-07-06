import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ userToken }) => {
  const [token, setToken] = useState("");
  setToken(userToken);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
