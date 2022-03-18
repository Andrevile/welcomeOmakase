const bcrpyt = require('bcrypt');
const User = require('../db/schemas/user');

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
