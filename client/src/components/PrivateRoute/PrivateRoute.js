import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ token }) => {
  console.log("token nel figlio", token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
