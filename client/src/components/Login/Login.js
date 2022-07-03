import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const data = axios.post("http://localhost:5000/auth/login", {
      username,
      password,
    });

    console.log(data);
  };

  const handleUsername = (e) => {
    setUsername(e);
  };

  const handlePassword = (e) => {
    setPassword(e);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      autoComplete="off"
      size="small"
      onFinish={handleLogin}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: {},
          },
        ]}
        getValueFromEvent={handleUsername}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: {},
          },
        ]}
        getValueFromEvent={handlePassword}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
