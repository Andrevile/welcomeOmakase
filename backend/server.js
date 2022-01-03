const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_MODE !== "DEV") {
  app.use(express.static(path.join(__dirname, process.env.FRONTEND_DIR)));
}

let db;
mongoose
  .connect(process.env.MONGO_URI, { dbName: "Omakase" })
  .then(() => {
    console.log("Connected to MongoDB");
    db = mongoose.connection;
    app.listen(app.get("port"), () => {
      console.log("listening on port", app.get("port"));
    });
  })
  .catch((e) => {
    console.log(e);
  });

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

// Dining 데이터 필터링 api
app.route("/api/filtering").get(async (req, res) => {
  console.log(req.query);
  // let target = await db.getCollection("Place");
  // target.findOne({ youtuber: "먹적" }, (err, result) => {
  //   console.log(result);
  // });
  // const dbData = await db.collection
  console.log("requsest here");
  const Fdata = [
    {
      youtuber: "",
      place_name: "기본",
      place_position: "서울시/1",
      place_imgPath: "img/Jumbo-picture3.jpg",
      place_yotubeURL: "",
      lat: 37.554822,
      long: 126.970833,
    },
    {
      youtuber: "",
      place_name: "서울역",
      place_position: "서울시/2",
      place_imgPath: "",
      place_yotubeURL: "",
      lat: 37.5536387,
      long: 126.9669926,
    },
  ];
  // console.log(target);
  res.json({ data: Fdata });
});
