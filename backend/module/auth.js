const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrpyt = require("bcrypt");

const User = require("../schemas/user");

exports.signUp = async (req, res, next) => {
  try {
    if (!req.body.user_ID | !req.body.user_PW | !req.body.email) {
      res.json({ message: "비어있는 칸이 존재합니다." });
    }
    const checkID = await User.find({ user_ID: req.body.user_ID });

    console.log(checkID);
    if (checkID.length !== 0) {
      res.json({ message: "이미 존재하는 ID입니다." });
    }
    const checkEmail = await User.find({ email: req.body.email });
    if (checkEmail.length !== 0) {
      res.json({ message: "이미 존재하는 Email 입니다." });
    }

    console.log(await bcrpyt.hash(req.body.user_PW, 10));
    req.body.user_PW = await bcrpyt.hash(req.body.user_PW, 10);
    next();
  } catch (err) {
    console.log("singUp:", err);
    next(err);
  }
};
