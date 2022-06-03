const bcrypt = require("bcrypt");
const { LoggerFactory } = require("moleculer");
const ERRORS = {
  MISSING_PARAMETER: "Please insert all parameeter",
  USER_EXIST: "User already registred",
  EMAIL_EXIST: "This email it's altready in use",
  WRONG_CREDENTIALS: "The E-mail or password provided are not correct",
  WRONG_PASSWORD: "Passoword not correct",
};
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = {
  name: "auth",
  actions: {
    async register(ctx) {
      console.log(ctx.params);
      const { username, email, password } = ctx.params;

      const check_user = await global.db
        .collection("Users")
        .findOne({ username });
      const check_email = await global.db
        .collection("Users")
        .findOne({ email });

      if (check_user) return { result: false, message: ERRORS.USER_EXIST };
      if (check_email) return { result: false, message: ERRORS.EMAIL_EXIST };

      const hashed_password = await hashPassword(password);

      await global.db
        .collection("Users")
        .insertOne({ username, email, password: hashed_password });
      return { result: true, message: "Utente Creato con successo" };
    },
    async login(ctx) {
      const { email, password } = ctx.params;

      if (!email || !password)
        return { result: false, message: ERRORS.MISSING_PARAMETER };

      const check_email = await global.db
        .collection("Users")
        .find({ email })
        .project({ email: 1, _id: 0 })
        .toArray();

      const check_password = await global.db
        .collection("Users")
        .find({ password })
        .project({ password: 1, _id: 0 });

      if (!check_email || !check_password) {
        return { result: false, message: ERRORS.WRONG_CREDENTIALS };
      }

      //TODO CAPIRE PERCHè MI RITORNA UNDEFINED
      const user_password = check_password[0].password;
      console.log(password, user_password);
      const isMatch = bcrypt.compare(password, user_password);
      if (!isMatch) return { result: false, message: ERRORS.WRONG_CREDENTIALS };

      return { result: true, message: "Utente loggato con successo " };
    },
    forgotpassword() {
      return {
        result: true,
        message: "Hai chiamato il microServizio Forgot Password",
      };
    },
    resetpassword() {
      return {
        result: true,
        message: "Hai chiamato il microServizio Reset Password",
      };
    },
  },
};
