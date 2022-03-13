const express = require('express');
const User = require('../db/schemas/user');
const { signUp, JWTMiddleware } = require('../module/auth');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
dotenv.config();

//./api/signup
router.post('/signup', signUp, async (req, res, next) => {
  try {
    const newUser = await new User(req.body);
    console.log('회원가입 요청 폼:', newUser);
    const registerUser = await newUser.save();

    return res.status(200).json({ message: '회원가입이 완료되었습니다.', status: 200 });
  } catch (err) {
    next(err);
  }
});

router.post('/signin', async (req, res, next) => {
  try {
    passport.authenticate('local', async (passportErr, user, info) => {
      if (passportErr || !user) {
        res.json({ message: info.reason });
        return;
      }

      req.login(user, { session: false }, (loginError) => {
        if (loginError) {
          console.log(loginError);
          res.json({ message: '로그인에 실패하였습니다.' });
          return;
        }
        const token = jwt.sign(
          { id: user._id, user_ID: user.user_ID, email: user.email, auth: user.auth },
          process.env.JWT_KEY,
          {
            expiresIn: '1d',
          }
        );
        res.cookie('user', { id: user._id, user: user.user_ID, token: token });
        return res.status(201).json({
          message: 'OK',
          token,
          user,
        });
      });
    })(req, res);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/share', JWTMiddleware, async (req, res, next) => {
  try {
    //포스트들 데이터베이스에서 가져옴
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
