import React, { useState } from "react";
import { Row, Col, Card, Input, Space, Button } from "antd";

import Messages from "../pieces/Messages/Messages";

import axios from "axios";
import "antd/dist/antd.css";
import "./login.css";

const Login = (isLoggedIn) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const data = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });

    const res = data.data;
    setResult(res.result);
    setMessage(res.message);
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
                defaultValue="Email"
                addonBefore="Email"
              />
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                allowClear={true}
                defaultValue="Password"
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
