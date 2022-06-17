import { useState, useEffect } from "react";
import InputWithLabel from "../pieces/InputWithLabel/InputWithLabel";
import { NavLink, Navigate } from "react-router-dom";
import "../register/register.css";
import Button from "../pieces/Button/Button";
import axios from "axios";
import { GeneralError } from "../pieces/GeneralError/GeneralError";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [jwt, setJwt] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://127.0.0.1:5000/auth/login", {
      email,
      password,
    });
    console.log(data);
    setError(data.data.result);
    setMessage(data.data.message);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <InputWithLabel
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputWithLabel
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <Button text="Accedi" />
      </form>

      <h1>{jwt}</h1>
      <NavLink
        to="/register"
        className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
      >
        Register
      </NavLink>
      {error === false ? <GeneralError text={message} /> : <h1>{message}</h1>}
    </div>
  );
};

export default Login;
