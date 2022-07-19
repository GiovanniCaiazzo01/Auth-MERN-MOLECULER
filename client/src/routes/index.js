import React, { lazy } from "react";
import { Navigate, Routes, Router } from "react-router-dom";

const Home = lazy(() => import("../components/Home/Home"));
const Login = lazy(() => import("../components/Login/Login"));

const MainRoutes = () => {
  return <Router></Router>;
};
