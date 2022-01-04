const mongoose = require("mongoose");
const { Schema } = mongoose;
const placeSchema = new Schema({
  //스키마 정의
  youtuber: {
    type: String,
    required: true,
  },
  place_name: {
    type: String,
    required: true,
    unique: true,
  },
  place_position: {
    type: String,
  },
  place_imgPath: {
    type: String,
  },
  place_youtubeURL: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: { type: Number },
});

module.exports = mongoose.model("Place", placeSchema); //Place란 이름으로 모델 정의
