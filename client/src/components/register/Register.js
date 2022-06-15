import { useState } from "react";
import axios from "axios";
import InputWithLabel from "../pieces/InputWithLabel/InputWithLabel";
import Button from "../pieces/Button/Button";
import { GeneralError } from "../pieces/GeneralError/GeneralError";
import {} from "../pieces/GeneralError/GeneralError";
import "./register.css";

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
      <div className="form-container">
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
          <Button text="Registrati" />
        </form>
      </div>

      {error === false ? <GeneralError text={message} /> : <h1>{message}</h1>}
    </>
  );
};
