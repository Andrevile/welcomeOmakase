const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

const connect = require("./schemas");
const usersRouter = require("./routes/users");
const placesRouter = require("./routes/places");
dotenv.config();
const app = express();

app.set("port", process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_MODE !== "DEV") {
  //배포시 설정할 static 경로
  app.use(express.static(path.join(__dirname, process.env.FRONTEND_DIR)));
}

connect(); //DB 연결

// 라우터 등록
app.use("/api/places", placesRouter); //dining에서 데이터 불러올 때,
app.use("/api/users", usersRouter);

// 배포 테스트용 코드
// app.get("/", (req, res) => {
//   console.log(path.join(__dirname, process.env.FRONTEND_DIR));
//   // res.send("Hello");
//   if (process.env.NODE_MODE !== "DEV") {
//     res.sendFile(path.join(__dirname, process.env.FRONTEND_DIR, "/index.html"));
//   } else {
//     res.send("hello");
//   }
// });

//404 에러처리 미들웨어 = 일치하는 라우터가 없을 때,
app.use((req, res, next) => {
  res.status(400).send("Not Found");
});
// 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500), send(err.message);
});

app.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});
