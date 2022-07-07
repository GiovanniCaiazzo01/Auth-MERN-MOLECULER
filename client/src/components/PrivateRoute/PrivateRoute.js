import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const [token, setToken] = useState(false);

  return token === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
