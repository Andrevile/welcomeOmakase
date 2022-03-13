const mongoose = require('mongoose');
const { Schema } = mongoose;
const placeSchema = new Schema(
  {
    //스키마 정의
    youtuber: {
      type: String,
      required: true,
    },
    place_name: {
      //매장 명
      type: String,
      required: true,
      unique: true,
    },
    place_position: {
      //매장 주소
      type: String,
    },
    place_imgPath: {
      //매장 사진
      type: String,
    },
    place_youtubeURL: {
      //유튜버 링크
      type: String,
    },
    place_number: {
      //매장 전화번호
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: { type: Number },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Place', placeSchema); //Place란 이름으로 모델 정의
