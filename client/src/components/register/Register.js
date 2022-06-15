import { useState, useEffect } from "react";
import axios from "axios";

import "./register.css";
import InputWithLabel from "../pieces/InputWithLabel/InputWithLabel";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(true);
  const [message, setMessage] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const data = await axios.post("http://127.0.0.1:5000/auth/register", {
      username,
      email,
      password,
    });
    console.log(data);
    setError(data.data.result);
    setMessage(data.data.message);
  };

  return (
    <>
      <div className="fornContainer">
        <form onSubmit={registerHandler}>
          <InputWithLabel
            type="text"
            id="username"
            name="username"
            value={username}
            required={false}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputWithLabel
            type="email"
            id="email"
            name="email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputWithLabel
            type="password"
            id="password"
            name="password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputWithLabel
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={confirmpassword}
            required={true}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>

        {error === false ? <h1>{message}</h1> : <h1>{message}</h1>}
      </div>
    </>
  );
};
