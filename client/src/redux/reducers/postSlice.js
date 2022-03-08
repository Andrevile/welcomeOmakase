import { createSlice } from '@reduxjs/toolkit';
import {
  addPost,
  deletePost,
  loadPosts,
  addComment,
  deleteComment,
  likeAction,
  unLikeAction,
} from 'redux/actions/post';
import { generateDummyPost } from 'utils/generateDummyPost';
import _concat from 'lodash/concat';
import _remove from 'lodash/remove';
import _find from 'lodash/find';

const initialState = {
  posts: [],
  imgPaths: [],
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,

  likeLoading: false,
  likeDone: false,
  likeError: null,
};

//type
// id: shortid.generate(),
// user: shortid.generate(),
// content: faker.lorem.paragraph(),
// images: [{ src: faker.image.image() }],
// comments: [{ id: shorid.generate(), user: shortid.generate(), content: faker.lorem.paragraph() }],
// likes: [ shortid.generate(), shortid.generate()],

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // 포스팅 불러오기
      .addCase(loadPosts.pending, (state) => {
        state.loadPostsLoading = true;
        state.loadPostsDone = false;
        state.loadPostsError = null;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsDone = true;
        state.loadPostsError = null;
        state.posts = _concat(state.posts, [...generateDummyPost(10)]);
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsError = action.error.message;
      }) // 글 쓰기
      .addCase(addPost.pending, (state) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        console.log(action.payload);
        state.addPostLoading = false;
        state.addPostDone = true;
        state.addPostError = null;
        state.posts = _concat([action.payload], state.posts);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.addPostLoading = false;
        state.addPostError = action.errror.message;
      }) //글 삭제
      .addCase(deletePost.pending, (state) => {
        state.removePostLoading = true;
        state.removePostDone = false;
        state.removePostError = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.removePostLoading = false;
        state.removePostDone = true;
        state.removePostError = null;
        state.posts = _remove(state.posts, (post) => post.id !== action.payload);
        // state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.removePostLoading = true;
        state.removePostDone = false;
        state.removePostError = action.error.message;
      }) // 댓글 작성
      .addCase(addComment.pending, (state) => {
        state.addCommentLoading = true;
        state.addCommentDone = false;
        state.addCommentError = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const post = _find(state.posts, { id: action.payload.id });
        state.addCommentLoading = false;
        state.addCommentDone = true;
        state.addCommentError = null;
        post.comments = _concat([action.payload.comment], post.comments);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.addCommentLoading = true;
        state.addCommentDone = false;
        state.addCommentError = action.error.message;
      }) // 댓글 삭제
      .addCase(deleteComment.pending, (state) => {
        state.removeCommentLoading = true;
        state.removeCommentDone = false;
        state.removeCommentError = null;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const post = _find(state.posts, { id: action.payload.id });
        state.removeCommentLoading = false;
        state.removeCommentDone = true;
        state.removeCommentError = null;
        post.comments = _remove(post.comments, (comment) => comment.id !== action.payload.commentID);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.removeCommentLoading = true;
        state.removeCommentDone = false;
        state.removeCommentError = action.error.message;
      }) // 좋아요 추가
      .addCase(likeAction.pending, (state) => {
        state.likeLoading = true;
        state.likeDone = false;
        state.likeError = null;
      })
      .addCase(likeAction.fulfilled, (state, action) => {
        const post = _find(state.posts, { id: action.payload.id });
        state.likeLoading = false;
        state.likeDone = true;
        state.likeError = null;

        post.likes = _concat([action.payload.user], post.likes);
      })
      .addCase(likeAction.rejected, (state, action) => {
        state.likeLoading = false;
        state.likeDone = false;
        state.likeError = action.error.message;
      }) // 좋아요 취소
      .addCase(unLikeAction.pending, (state) => {
        state.likeLoading = true;
        state.likeDone = false;
        state.likeError = null;
      })
      .addCase(unLikeAction.fulfilled, (state, action) => {
        const post = _find(state.posts, { id: action.payload.id });
        state.likeLoading = false;
        state.likeDone = true;
        state.likeError = null;

        post.likes = _remove(post.likes, (like) => like !== action.payload.user);
      })
      .addCase(unLikeAction.rejected, (state, action) => {
        state.likeLoading = false;
        state.likeDone = false;
        state.likeError = action.error.message;
      }),
});

export default postSlice;
