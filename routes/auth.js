const express = require("express");
const router = express.Router();

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

router.post("/login", async (req, res) => {
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

  res.send(data);
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
