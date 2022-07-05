import "./app.css";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route path="/login" element={<Login isLoggedIn={false} />} />
      </Routes>
    </div>
  );
};

export default App;
