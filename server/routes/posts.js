const express = require('express');
const Post = require('../db/schemas/post');
const Comment = require('../db/schemas/comment');
const User = require('../db/schemas/user');
const router = express.Router();
const passport = require('passport');

router.get('/test', passport.authenticate('jwt', { session: false }), async (req, res, next) => {});
router.get('/loadpost', async (req, res, next) => {
  try {
    console.log('last ID =', req.query.lastId);
    const lastID = {};
    if (req.query.lastId !== 'undefined') {
      lastID._id = { $lt: req.query.lastId };
    }
    let posts = await Post.find(lastID)
      .populate('user', { user_ID: 1 })
      .populate({
        path: 'comments',
        populate: { path: 'user', select: 'user_ID' },
        options: { sort: { createdAt: -1 } },
      })
      .sort({ createdAt: -1 })
      .limit(5);

    return res.json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/addpost', async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body.content);
    const post = { ...newPost._doc, user: { _id: newPost.user, user_ID: req.body.user_ID } };
    return res.status(201).send(post);
  } catch (err) {
    next(err);
  }
});

router.put('/addcomment/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId });
    const newComment = await Comment.create(req.body);
    const user = await User.findOne({ _id: req.body.user }).select('user_ID');
    await Post.updateOne({ _id: req.params.postId }, { $addToSet: { comments: newComment } });
    const result = {
      id: req.params.postId,
      comment: { _id: newComment._id, post: req.params.postId, user: user, content: req.body.content },
    };
    return res.status(201).send(result);
  } catch (err) {
    next(err);
  }
});

router.post('/deletecomment', async (req, res, next) => {
  try {
    const result = await Comment.deleteOne({ _id: req.body.commentID });
    await Post.updateOne({ _id: req.body.id }, { $pull: { comments: req.body.commentID } });
    res.status(201).send('ok');
  } catch (err) {
    next(err);
  }
});

router.put('/like/:postId', async (req, res, next) => {
  try {
    console.log(req.body);
    await Post.updateOne({ _id: req.params.postId }, { $addToSet: { likes: req.body.user } });
    res.status(201).send('ok');
  } catch (err) {
    next(err);
  }
});

router.put('/unlike/:postId', async (req, res, next) => {
  try {
    console.log(req.body);
    await Post.updateOne({ _id: req.params.postId }, { $pull: { likes: req.body.user } });
    res.status(201).send('ok');
  } catch (err) {
    next(err);
  }
});

router.delete('/:postId', async (req, res, next) => {
  console.log(req.params);
  try {
    await Post.deleteOne({ _id: req.params.postId });
    await Comment.deleteMany({ post: req.params.postId });
    res.status(200).json({ message: '삭제 성공' });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
