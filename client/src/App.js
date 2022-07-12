import "./app.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const handleUserToken = (token) => {
    localStorage.setItem("token", token);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login doUser={handleUserToken} />} />
      </Routes>
    </div>
  );
};

export default App;
