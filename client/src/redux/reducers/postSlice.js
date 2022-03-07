import { createSlice } from '@reduxjs/toolkit';
import { addPost, deletePost, loadPosts } from 'redux/actions/post';
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
};

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
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.removePostLoading = true;
        state.removePostDone = false;
        state.removePostError = action.error.message;
      }),
});

export default postSlice;
