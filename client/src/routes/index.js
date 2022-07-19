import React, { lazy } from "react";
import { Navigate, Routes, Router } from "react-router-dom";
import PublicRoute from "../components/PublicRoute/PublicRoute";

const Home = lazy(() => import("../components/Home/Home"));
const Login = lazy(() => import("../components/Login/Login"));

const MainRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}

      <PublicRoute path="/login">
        <Login />
      </PublicRoute>

      {/* PRIVATE ROUTES*/}
    </Routes>
  );
};
export default MainRoutes;
