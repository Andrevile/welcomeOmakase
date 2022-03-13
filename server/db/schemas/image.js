const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = new Schema({
  //   _id: String,
  src: { type: String, required },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
});

module.exports = mongoose.model('Image', imageSchema);
