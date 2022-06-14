import { useState, useEffect } from "react";

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

  const registerHandler = async () => {
    if (password !== confirmpassword) {
      console.log("ocaz");
    }
  };

  return (
    <>
      <div className="fornContainer">
        <form>
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
          <button type="submit" value="Submit" onSubmit={registerHandler}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
