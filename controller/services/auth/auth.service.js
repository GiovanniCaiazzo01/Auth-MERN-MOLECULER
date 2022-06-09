const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const ERRORS = {
  MISSING_PARAMETER: "Please insert all parameeter",
  USER_EXIST: "A user with this username already exists ",
  USER_NOT_EXIST: "There is no use with this E-mail",
  EMAIL_EXIST: "This email it's altready in use",
  WRONG_CREDENTIALS: "The E-mail or password provided are not correct",
  WRONG_PASSWORD: "Passoword not correct",
};
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const generateUniqueCode = async () => {
  return await uuidv4();
};

const generete_hash_password = async () => {
  const token = await crypto.randomBytes(20).toString("hex");
  return await hashPassword(token);
};
module.exports = {
  name: "auth",
  actions: {
    async register(ctx) {
      console.log(ctx.params);
      const { username, email, password } = ctx.params;

      if (!username || !email || !password) {
        return { result: false, message: ERRORS.MISSING_PARAMETER };
      }
      const check_user = await global.db
        .collection("Users")
        .findOne({ username });
      const check_email = await global.db
        .collection("Users")
        .findOne({ email });

      if (check_user) return { result: false, message: ERRORS.USER_EXIST };
      if (check_email) return { result: false, message: ERRORS.EMAIL_EXIST };

      const hashed_password = await hashPassword(password);
      const unique_code = await generateUniqueCode();

      await global.db.collection("Users").insertOne({
        username,
        email,
        password: hashed_password,
        UCODE: unique_code,
      });
      return { result: true, message: "Utente Creato con successo" };
    },
    async login(ctx) {
      const { email, password } = ctx.params;
      const { ACCESS_TOKEN } = process.env;

      if (!email || !password) {
        return { result: false, message: ERRORS.MISSING_PARAMETER };
      }

      const user = await global.db.collection("Users").findOne({ email });
      if (!user) return { result: false, message: ERRORS.WRONG_CREDENTIALS };
      const {
        userEmail = user.email,
        userPassword = user.password,
        userUCode = user.UCODE,
      } = user;
      const compared_password = await bcrypt.compare(password, userPassword);

      if (email !== userEmail || compared_password === false) {
        return { result: false, message: ERRORS.WRONG_CREDENTIALS };
      }

      const accessToken = jwt.sign(userUCode, ACCESS_TOKEN);

      return {
        result: true,
        message: "Utente loggato con successo",
        token: accessToken,
      };
    },
    async forgotpassword(ctx) {
      const { email } = ctx.params;
      if (!email) return { result: false, message: ERRORS.MISSING_PARAMETER };

      const userEmail = await global.db.collection("Users").findOne({ email });
      if (!userEmail) {
        return { result: "false", message: ERRORS.USER_NOT_EXIST };
      }

      const haveToken = await global.db
        .collection("Users")
        .findOne({}, { projection: { _id: 0, refresh_token: 1 } });
      if (haveToken) {
        await global.db
          .collection("Users")
          .deleteOne({}, { projection: { _id: 0, token: 1 } });
      }

      const genereate_new_token = generete_hash_password();

      // const ucode = await global.db
      //   .collection("Users")
      //   .findOne({ email }, { projection: { _id: 0, UCODE: 1 } });

      return console.log("ocaz");
    },
    resetpassword() {
      return {
        result: true,
        message: "Hai chiamato il microServizio Reset Password",
      };
    },
  },
};
