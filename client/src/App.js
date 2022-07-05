import "./app.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const [token, setToken] = useState("");
  console.log("token nel padre", token);

  const haveToken = (res) => {
    setToken(res);
  };

  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute token={token} />}>
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route path="/login" element={<Login haveToken={haveToken} />} />
      </Routes>
    </div>
  );
};

export default App;
