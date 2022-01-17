const express = require("express");
const User = require("../schemas/user");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrpyt = require("bcrypt");
const { signUp } = require("../module/auth");
//./api/signup
router.post("/signup", signUp, async (req, res, next) => {
  try {
    const newUser = await new User(req.body);
    console.log(newUser);
    const registerUser = await newUser.save();
    console.log(registerUser);

    res
      .status(200)
      .json({ message: "회원가입이 완료되었습니다.", status: 200 });
  } catch (err) {}
});

module.exports = router;
