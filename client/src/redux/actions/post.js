import { createAsyncThunk } from '@reduxjs/toolkit';
import { generateDummyPost } from 'utils/generateDummyPost';
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
