import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import { Register } from "./components/register/Register";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
