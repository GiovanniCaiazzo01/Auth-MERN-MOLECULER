require("dotenv").config({ path: "./config.env" });
const { MongoClient } = require("mongodb");
const express = require("express");
const { ServiceBroker } = require("moleculer");
const AUTH_SERVICE = require("./controller/services/auth/auth.service");

global.broker = new ServiceBroker({
  nodeID: "auth",
});

const app = express();
app.use(express.json());
app.use("/auth", require("./routes/auth"));

const { PORT, URI } = process.env || 5000;

global.broker.createService(AUTH_SERVICE);

const start = async () => {
  const dba = await MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  global.db = dba.db("Auth");

  try {
    await dba.connect();
    console.log("DATABASE CONNESSO CON SUCCESSO📡");
  } catch (e) {
    console.error(e);
  }

  await global.broker.start();
  app.listen(PORT, () => console.log(`PORT IT'S UP AND RUNNING 🚀 ON ${PORT}`));
};
start();
