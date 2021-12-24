const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, process.env.FRONTEND_DIR)));
// const introduceRouter = require("./routes/introduce");
// const diningRouter = require("./routes/dining");

// app.use("/", introduceRouter);
// app.use("/user", diningRouter);

app.get("/", (req, res) => {
  console.log(path.join(__dirname, process.env.FRONTEND_DIR));
  res.send("Hello");
  //   res.sendFile(path.join(__dirname, process.env.FRONTEND_DIR, "/index.html"));
});
app.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});
