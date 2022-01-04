const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      dbName: "Omakase",
    },
    (error) => {
      if (error) {
        console.log("몽고DB 연결 에러", error);
      } else {
        console.log("몽고DB 연결 성공");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("몽고DB 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("몽고DB 연결이 끊겼습니다. 연결을 재시도합니다");
  connect();
});

module.exports = connect;
