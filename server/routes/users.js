const express = require('express');
const User = require('../db/schemas/user');
const { signUp } = require('../middlewares/signUp');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
dotenv.config();

//./api/signup
router.post('/signup', signUp, async (req, res, next) => {
  try {
    const newUser = await new User(req.body);
    const registerUser = await newUser.save();

    return res.status(200).json({ message: '회원가입이 완료되었습니다.', status: 200 });
  } catch (err) {
    next(err);
  }
});

router.post('/signin', async (req, res, next) => {
  try {
    console.log(req.body);
    passport.authenticate('local', async (passportErr, user, info) => {
      console.log(user);
      if (passportErr || !user) {
        return res.status(400).json({ message: info.reason });
      }
      console.log('로그인', user);
      req.login(user, { session: false }, (loginError) => {
        if (loginError) {
          console.log(loginError);
          return res.status(400).json({ message: '로그인에 실패하였습니다.' });
        }
        const token = jwt.sign({ id: user._id, user_ID: user.user_ID }, process.env.JWT_KEY, {
          expiresIn: '3d',
        });
        res.cookie(
          'omakase_user',
          { id: user._id, user: user.user_ID, token: token },
          {
            maxAge: 24 * 60 * 60 * 3000,
            httpOnly: true,
	    domain: '.welcomeomakase.com',
          }
        );
        return res.status(201).json(user);
      });
    })(req, res);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/logout', async (req, res, next) => {
  try {
    res.clearCookie('omakase_user');
    res.status(201).json('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/check', async (req, res) => {
  try {
    const token = req.cookies.omakase_user.token;
    console.log('새로운 요청', token);

    console.log(req.body);
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    console.log(decoded);

    if (decoded.user_ID !== req.body.user_ID) {
      throw '세션 만료';
    }
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24) {
      const user = await User.findOne({ user_ID: req.body.user_ID });
      console.log('토큰 재발급', user);
      const token = jwt.sign({ id: user._id, user_ID: user.user_ID }, process.env.JWT_KEY, {
        expiresIn: '3d',
      });
      res.cookie(
        'omakase_user',
        { id: user._id, user: user.user_ID, token: token },
        {
          maxAge: 24 * 60 * 60 * 3000,
          httpOnly: true,
        }
      );
    }
    res.status(201).json(req.body);
  } catch (err) {
    console.log(err);
    res.clearCookie('omakase_user');
    res.status(401).json({ message: '세션 만료' });
  }
});
module.exports = router;
