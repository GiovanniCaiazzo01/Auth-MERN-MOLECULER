import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ haveToken }) => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    haveToken ? setToken(true) : setToken(false);
  }, [haveToken]);

  return token === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
