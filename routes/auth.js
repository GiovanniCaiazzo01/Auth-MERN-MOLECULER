const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

// todo FAR  FUNZIONARE STO CAZZO DI MIDDLEWARE
const authenticateToken = (req, res, next) => {
  const authHeader = req.header["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !password)
    console.log({
      result: false,
      message: "Please Provide all the data in the form ",
    });
  const data = await global.broker.call("auth.register", {
    username,
    email,
    password,
  });
  res.send(data);
});

router.post("/login", authenticateToken, async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !password)
    console.log({
      result: false,
      message: "Please Provide all the data in the form ",
    });

  const data = await global.broker.call("auth.login", {
    email,
    password,
  });
  console.log(data);

  res.send(data.filter((datas) => datas.email === req.user.name));
});

router.get("/forgotpassword", async (req, res) => {
  const frg_pwd = await global.broker.call("auth.forgotpassword");
  res.send(frg_pwd);
});

router.get("/resetpassword", async (req, res) => {
  const rest_pwd = await global.broker.call("auth.resetpassword");
  res.send(rest_pwd);
});

module.exports = router;
