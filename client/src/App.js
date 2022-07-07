import "./app.css";
import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserContextProvider from "./components/provider/UserContextProvider";

const App = () => {
  const [userToken, setUserToken] = useState();
  const [userData, setUserData] = useState({});

  const retriveData = (data) => {
    setUserData(data);
  };

  return (
    <div className="app">
      <UserContextProvider value={userData}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} exact />
          </Route>

          <Route path="/login" element={<Login retriveData={retriveData} />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;
