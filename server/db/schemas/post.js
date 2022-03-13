const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  //스키마 정의
  // _id: {
  //   type: String,
  //   required: true,
  // },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Post', postSchema);
