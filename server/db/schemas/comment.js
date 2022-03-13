const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = new Schema(
  {
    //   _id: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    content: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Comment', commentSchema);
