import "./app.css";
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const [userToken, setUserToken] = useState("");

  const haveToken = (token) => {
    setUserToken(token);
  };

  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route path="/login" element={<Login haveToken={haveToken} />} />
      </Routes>
    </div>
  );
};

export default App;
