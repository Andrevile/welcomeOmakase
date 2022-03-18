const passport = require('passport');

exports.isAuthenticated = (req, res, next) => {
  if (passport.authenticate('jwt', { session: false })) {
    next();
  } else {
    res.clearCookie('omakase_user');
    res.status(401).send('올바르지 않은 인증 정보입니다. 다시 로그인 해주세요');
  }
};
