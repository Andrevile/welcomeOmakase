const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema(
  {
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
    images: [String], //[{ type: Schema.Types.ObjectId, ref: 'Image' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Post', postSchema);
