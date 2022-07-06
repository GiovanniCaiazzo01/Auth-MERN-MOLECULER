import React, { useState } from "react";
import { Row, Col, Card, Input, Space, Button } from "antd";
import Messages from "../pieces/Messages/Messages";
import { Navigate } from "react-router-dom";

import axios from "axios";
import "antd/dist/antd.css";
import "./login.css";

// const setState = async (setResult, setMessage, setToken, res) => {
//   await setResult(res.result);
//   await setMessage(res.message);
//   await setToken(res.token);
// };

const Login = ({ haveToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const data = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });

    const res = data.data;
    // await setState(setResult, setMessage, setToken, res);
    setResult(res.result);
    setMessage(res.message);
    setToken(res.token);
    haveToken(res.token);
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Col span={4}>
        <Card>
          <form>
            <Space direction="vertical" size={"middle"}>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                allowClear={true}
                defaultValue="bello@gmail.com"
                addonBefore="Email"
              />
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                allowClear={true}
                defaultValue="1"
                addonBefore="Password"
              />
              <Button onClick={handleLogin}>Login</Button>

              {result === false ? (
                <Messages type={"error"} message={message} />
              ) : (
                <Messages type={"success"} message={message} />
              )}
            </Space>
          </form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
