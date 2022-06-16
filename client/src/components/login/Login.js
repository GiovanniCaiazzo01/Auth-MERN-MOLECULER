import { useState } from "react";
import InputWithLabel from "../pieces/InputWithLabel/InputWithLabel";
import "../register/register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async () => {};

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
      </form>
    </div>
  );
};

export default Login;
