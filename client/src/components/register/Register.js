import { useState, useEffect } from "react";
import axios from "axios";

const InputWithLabel = ({ type, id, name, value, onChange, required }) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://127.0.0.1:5000/auth/register", {
      username,
      email,
      password,
    });
    console.log(data);
    setError(data.data.result);
    setErrorMessage(data.data.message);

    console.log(error, errorMessage);
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
            required={false}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>

        {error === false ? <h1>{errorMessage}</h1> : null}
      </div>
    </>
  );
};
