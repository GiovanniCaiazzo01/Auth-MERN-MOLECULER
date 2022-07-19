import React, { useState } from "react";
import { Row, Col, Card, Input, Space, Button } from "antd";
import Messages from "../pieces/Messages/Messages";
import axios from "axios";
import "antd/dist/antd.css";
import "./login.css";

const Login = ({ doToken }) => {
  const [email, setEmail] = useState("bello@gmail.com");
  const [password, setPassword] = useState("1");
  const [result, setResult] = useState(false);
  const [message, setMessage] = useState("");

  // TODO: bisonga trovare  un modo migliore di gestire sto token frontend
  const handleLogin = async () => {
    const data = await axios.post("http://127.0.0.1:5000/auth/login", {
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
      style={{ minHeight: "100vh", minWidth: "50vh" }}
    >
      <Col span={4}>
        <Card>
          <form>
            <Space direction="vertical" size={"middle"}>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                allowClear={true}
                addonBefore="Email"
              />
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                allowClear={true}
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
