const express = require('express');
const Post = require('../db/schemas/post');
const router = express.Router();

router.get('/loadpost', async (req, res, next) => {
  try {
    let posts = await Post.find();
    console.log(posts);
    return res.json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/addpost', async (req, res, next) => {
  try {
    console.log(req.body);
    const newPost = await new Post(req.body);
    await newPost.save();
    return res.status(201).send('ok');
  } catch (err) {
    next(err);
  }
});

router.put('/addcomment/:postId', async (req, res, next) => {
  try {
    console.log(req.body);
    const post = await Post.findOne({ _id: req.params.postId });
    const comments = [req.body, ...post.comments].reverse();

    console.log('gere', comments);
    await Post.updateOne({ _id: req.params.postId }, { $addToSet: { comments: comments } });
    return res.status(201).send('ok');
  } catch (err) {
    next(err);
  }
});

router.put('/deletecomment/:postId', async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.put('/like/:postId', async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.put('/unlike/:postId', async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.delete('/:postId', async (req, res, next) => {
  console.log(req.params);
  try {
    await Post.deleteOne({ _id: req.params.postId });
    res.status(200).json({ message: '삭제 성공' });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
