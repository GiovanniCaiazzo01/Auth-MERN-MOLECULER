const bcrypt = require("bcrypt");
const ERRORS = {
  USER_EXIST: "User already registred",
  EMAIL_EXIST: "This email it's altready in use",
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
      console.log(hashed_password);

      await global.db
        .collection("Users")
        .insertOne({ username, email, password: hashed_password });
      return { result: true, message: "Utente Creato con successo" };
    },
    login() {
      return {
        result: true,
        message: "Hai chiamato il microServizio Login",
      };
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
