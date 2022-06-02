const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    tpye: String,
  },

  password: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
