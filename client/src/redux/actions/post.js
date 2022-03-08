import { createAsyncThunk } from '@reduxjs/toolkit';
export const loadPosts = createAsyncThunk('POST/LOAD_POSTS', async (data) => {
  console.log('포스팅 불러오는중');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });

  const response = await promise;
  console.log('포스팅 불러오기 성공', response);
  return response;
});

export const addPost = createAsyncThunk('POST/ADD_POST', async (data) => {
  console.log('글 게시중', data);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const response = await promise;
  console.log('글 게시 성공', response);
  return data;
});

export const deletePost = createAsyncThunk('POST/DELETE_POST', async (data) => {
  console.log('글 삭제중');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const response = await promise;
  console.log('글 삭제 성공');
  return data;
});

export const addComment = createAsyncThunk('POST/ADD_COMMENT', async (data) => {
  console.log('댓글 작성중', data);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const response = await promise;
  console.log('댓글 작성 성공');
  return data;
});

export const deleteComment = createAsyncThunk('POST/DELETE_COMMENT', async (data) => {
  console.log('댓글 삭제중', data);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const response = await promise;
  console.log('댓글 삭제 성공');
  return data;
});

export const likeAction = createAsyncThunk('POST/LIKE_ACTION', async (data) => {
  console.log('좋아요 시도중', data);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const response = await promise;
  console.log('좋아요 성공');
  return data;
});

export const unLikeAction = createAsyncThunk('POST/UNLIKE_ACTION', async (data) => {
  console.log('좋아요 취소 시도중', data);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const response = await promise;
  console.log('좋아요 취소  성공');
  return data;
});
