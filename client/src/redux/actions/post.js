import { createAsyncThunk } from '@reduxjs/toolkit';
import { generateDummyPost } from 'utils/generateDummyPost';
import api from 'utils/api';

export const loadPosts = createAsyncThunk('POST/LOAD_POSTS', async (data) => {
  try {
    const response = await api.get(`/post/loadpost?lastId=${data}`);
    console.log('받아온 데이터', response);
    return response;
  } catch (err) {
    console.error('loadpost', err);
    return err;
  }
});

export const addPost = createAsyncThunk('POST/ADD_POST', async (data) => {
  try {
    const response = await api.post('/post/addpost', data);
    console.log('추가한 데이터', response);
    return response;
  } catch (err) {
    console.error('addpost', err);
    return err;
  }
});

export const deletePost = createAsyncThunk('POST/DELETE_POST', async (data) => {
  try {
    const response = await api.delete(`/post/${data}`);
    return data;
  } catch (err) {
    console.error('deletePost', err);
    return err;
  }
});

export const addComment = createAsyncThunk('POST/ADD_COMMENT', async (data) => {
  console.log('댓글 작성중', data);
  const response = await api.put(`/post/addcomment/${data.id}`, data.comment);
  console.log('댓글 작성 성공');
  return response;
});

export const deleteComment = createAsyncThunk('POST/DELETE_COMMENT', async (data) => {
  console.log('댓글 삭제중', data);
  const response = await api.post(`/post/deletecomment`, data);

  console.log('댓글 삭제 성공');
  return data;
});

export const likeAction = createAsyncThunk('POST/LIKE_ACTION', async (data) => {
  console.log('좋아요 시도중', data);
  const response = await api.put(`/post/like/${data.id}`, data);
  console.log('좋아요 성공');
  return data;
});

export const unLikeAction = createAsyncThunk('POST/UNLIKE_ACTION', async (data) => {
  console.log('좋아요 취소 시도중', data);
  const response = await api.put(`/post/unlike/${data.id}`, data);

  console.log('좋아요 취소  성공');
  return data;
});
