const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../config.env" });

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader) return res.sendStatus(401);
//   const bearerToken = authHeader.split(" ");
//   const token = bearerToken[1];

//   jwt.verify(token, process.env.ACCESS_TOKEN, (err, payload) => {
//     if (err) {
//       return res.send("pippo");
//     }
//     req.payload = payload;
//     next();
//   });
// };

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !password)
    res.send({
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
  const { email, password } = req.body;

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

  res.send(data);
});

module.exports = router;
