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
<<<<<<< HEAD
        <Route element={<PrivateRoute />}>
=======
        <Route element={<PrivateRoute token={userToken} />}>
>>>>>>> 5c1370349da09f6b1653e294b2c648aef016292e
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route path="/login" element={<Login haveToken={haveToken} />} />
      </Routes>
    </div>
  );
};

export default App;
