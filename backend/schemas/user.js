const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Userschema = new Schema(
  {
    user_ID: {
      type: String,
      required: true,
      unique: true,
    },
    user_PW: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

Userschema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

Userschema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; //true or false
};

Userschema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};
Userschema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};
module.exports = mongoose.model("User", Userschema);
