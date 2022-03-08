const mongoose = require('mongoose');
const { Schema } = mongoose;
const imgSchema = new Schema({ src: { type: String } });
const postSchema = new Schema({
  //스키마 정의
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [imgSchema],
  comments: [String],
  likes: [String],
});

module.exports = mongoose.model('Post', postSchema); //Post란 이름으로 모델 정의
