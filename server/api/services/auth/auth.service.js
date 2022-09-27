const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
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
  return uuidv4();
};

module.exports = {
  name: "auth",
  actions: {
    async register(ctx) {
      const { username, email, password } = ctx.params;

      if (!email || !password) {
        return { result: false, message: ERRORS.MISSING_PARAMETER };
      }

      try {
        const check_email = await global.db
          .collection("Users")
          .findOne({ email });
        if (check_email) return { result: false, message: ERRORS.EMAIL_EXIST };
      } catch (error) {
        console.log(error);
      }

      const hashed_password = await hashPassword(password);
      const unique_code = await generateUniqueCode();

      try {
        await global.db.collection("Users").insertOne({
          username,
          email,
          password: hashed_password,
          UCODE: unique_code,
          role: "Babbano",
        });
      } catch (error) {
        console.log(error);
      }

      return { result: true, message: "Utente Creato con successo" };
    },
    async login(ctx) {
      const { email, password } = ctx.params;
      const { ACCESS_TOKEN } = process.env;

      if (!email || !password) {
        return { result: false, message: ERRORS.MISSING_PARAMETER };
      }

      try {
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

        return {
          result: true,
          message: "Utente loggato con successo",
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};