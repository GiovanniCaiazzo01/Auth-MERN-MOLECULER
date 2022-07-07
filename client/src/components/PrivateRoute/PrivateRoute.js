<<<<<<< HEAD
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...props }) => {
  const [jwt, setJwt] = useState("");

  console.log("private route", props);

  return jwt ? children : <Navigate to="/login" />;
=======
import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  console.log("il token lo tengo ?", props);
  const [token, setToken] = useState(false);
  useEffect(() => {
    props ? setToken(true) : setToken(false);
  }, [props]);

  return token === true ? <Outlet /> : <Navigate to="/login" />;
>>>>>>> 5c1370349da09f6b1653e294b2c648aef016292e
};

export default PrivateRoute;
