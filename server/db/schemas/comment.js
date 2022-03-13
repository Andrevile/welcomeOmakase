const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = new Schema({
  //   _id: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema); //Post란 이름으로 모델 정의
