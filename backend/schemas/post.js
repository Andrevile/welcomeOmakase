const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({
  //스키마 정의
  user_ID: {
    //작성자
    type: String,
    required: true,
  },
  place_name: {
    //매장 명
    type: String,
    required: true,
  },
  post_title: {
    //글제목
    type: String,
    required: true,
  },
  post_content: {
    //글 내용
    type: String,
    required: true,
  },
  post_up: {
    //따봉 업
    type: Number,
  },
  post_down: {
    //따봉 다운
    type: Number,
  },
});

module.exports = mongoose.model("Post", postSchema); //Post란 이름으로 모델 정의
