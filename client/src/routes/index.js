import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("../components/Home/Home"));
const Login = lazy(() => import("../components/Login/Login"));

const MainRoutes = () => {
  return (
    <Routes>
      {/* PRIVATE ROUTES*/}
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default MainRoutes;
