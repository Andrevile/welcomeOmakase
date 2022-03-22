const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const hpp = require('hpp');
const connect = require('./db');
const usersRouter = require('./routes/users');
const placesRouter = require('./routes/places');
const postsRouter = require('./routes/posts');

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const { passportConfig, passportVerify, JWTConfig, JWTVerify } = require('./passport/auth');

dotenv.config();
const app = express();
if (process.env.NODE_ENV !== 'development') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
  app.set('port', 5000);
} else {
  app.use(morgan('dev'));
  app.set('port', 5000);
}
app.use(cors({ origin: ['http://localhost:3000', 'welcomeOmakase.com'], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
console.log(path.join(__dirname), 'uploads');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '../client/build')));
connect(); //DB 연결

// 라우터 등록
app.use('api/place', placesRouter); //dining에서 데이터 불러올 때,
app.use('api/user', usersRouter);
app.use('api/post', postsRouter);
app.use(passport.initialize());
passport.use('local', new LocalStrategy(passportConfig, passportVerify));
passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
//404 에러처리 미들웨어 = 일치하는 라우터가 없을 때,
app.use((req, res, next) => {
  res.status(400).send('Not Found');
});
// 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log('listening on port', app.get('port'));
});
