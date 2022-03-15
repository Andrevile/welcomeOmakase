const passport = require('passport');
const bcrpyt = require('bcrypt');
const { ExtractJwt } = require('passport-jwt');
const User = require('../db/schemas/user');
const dotenv = require('dotenv');
dotenv.config();
// exports.signUp
exports.signUp = async (req, res, next) => {
  try {
    if (!req.body.user_ID | !req.body.user_PW | !req.body.email) {
      return res.status(400).json({ message: '비어있는 칸이 존재합니다.' });
    }
    const checkID = await User.find({ user_ID: req.body.user_ID });

    console.log(checkID);
    if (checkID.length !== 0) {
      // res.status(400).send('이미 존재');
      return res.status(400).json({ message: '이미 존재하는 ID입니다.' });
      // return;
    }
    const checkEmail = await User.find({ email: req.body.email });
    if (checkEmail.length !== 0) {
      return res.status(400).json({ message: '이미 가입 되어있는 Email 입니다.' });
    }

    req.body.user_PW = await bcrpyt.hash(req.body.user_PW, 10);
    console.log(req.body.user_PW);
    next();
  } catch (err) {
    console.log('singUp:', err);
    next(err);
  }
};

exports.passportConfig = {
  //요청 보내는 태그 name
  usernameField: 'user_ID',
  passwordField: 'user_PW',
};

exports.passportVerify = async (ID, PW, done) => {
  try {
    const user = await User.findOne({ user_ID: ID });
    if (!user) {
      //유저를 못찾으면 에러
      done(null, false, { reason: '존재하지 않는 아이디 입니다.' });
      return;
    }

    const compareResult = await bcrpyt.compare(PW, user.user_PW);

    if (compareResult) {
      //비밀번호 같으면 유저 객체 전송
      done(null, user);
      return;
    }
    //비밀번호 틀리면 에러
    done(null, false, { reason: '올바르지 않은 비밀번호 입니다.' });
    return;
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const cookieExtractor = (req) => {
  const { user } = req.cookies;

  return user.token;
};
exports.JWTConfig = {
  // cookieExtractor
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY,
};

exports.JWTVerify = async (jwtPayload, done) => {
  try {
    const user = await User.findOne({ user_ID: jwtPayload.user_ID });
    if (user) {
      console.log('발견');
      done(null, user);
      return;
    }
    done(null, 'vxzc', { reason: '올바르지 않은 인증정보 입니다.' });
    return;
  } catch (err) {
    console.error(err);
    done(err);
  }
};
