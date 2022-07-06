import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  console.log("il token lo tengo ?", props);
  const [token, setToken] = useState(false);
  useEffect(() => {
    props ? setToken(true) : setToken(false);
  }, [props]);

  return token === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
