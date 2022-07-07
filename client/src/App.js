import "./app.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {
  UserContextProvider,
  UserContext,
} from "./components/provider/UserContextProvider";

const App = () => {
  const [userToken, setUserToken] = useState();

  return (
    <div className="app">
      <UserContextProvider.Provider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} exact />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContextProvider.Provider>
    </div>
  );
};

export default App;
