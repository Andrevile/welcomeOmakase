import { createAsyncThunk } from '@reduxjs/toolkit';

import api from 'utils/api';

export const loadPosts = createAsyncThunk(
  'POST/LOAD_POSTS',
  async (data) => {
    try {
      const response = await api.get(`api/post/loadpost?lastId=${data}`);
      return response;
    } catch (err) {
      console.error('loadpost', err);
      return err;
    }
  },
  {
    condition: (data, { getState, extra }) => {
      const { post } = getState();

      if (post.loadPostsLoading) {
        console.warn('이벤트 취소');
        return false;
      }
    },
  }
);

export const addPost = createAsyncThunk('POST/ADD_POST', async (data) => {
  try {
    const response = await api.post('api/post/addpost', data);
    return response;
  } catch (err) {
    console.error('addpost', err);
    return err;
  }
});

export const deletePost = createAsyncThunk('POST/DELETE_POST', async (data) => {
  try {
    const response = await api.delete(`api/post/${data}`);
    return data;
  } catch (err) {
    console.error('deletePost', err);
    return err;
  }
});

export const addComment = createAsyncThunk('POST/ADD_COMMENT', async (data) => {
  const response = await api.put(`api/post/addcomment/${data.id}`, data.comment);

  return response;
});

export const deleteComment = createAsyncThunk('POST/DELETE_COMMENT', async (data) => {
  const response = await api.post(`api/post/deletecomment`, data);

  return data;
});

export const likeAction = createAsyncThunk('POST/LIKE_ACTION', async (data) => {
  const response = await api.put(`api/post/like/${data.id}`, data);

  return data;
});

export const unLikeAction = createAsyncThunk('POST/UNLIKE_ACTION', async (data) => {
  const response = await api.put(`api/post/unlike/${data.id}`, data);

  return data;
});

export const uploadImages = createAsyncThunk('POST/UPLOAD_IMAGES', async (data, { rejectWithValue }) => {
  try {
    const response = await api.post('api/post/images', data);
    return response;
  } catch (err) {
    console.error(err);
    return rejectWithValue(err);
  }
});

export const removeImages = createAsyncThunk('POST/REMOVE_IMAGES', async (data, { rejectWithValue }) => {
  try {
    let imgUrl = data.split('/');
    imgUrl = imgUrl[imgUrl.length - 1];
    console.log(imgUrl);
    const response = await api.delete(`api/post/removeimages/${imgUrl}`);
    return data;
  } catch (err) {
    console.error(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const editPost = createAsyncThunk('POST/EDIT_POST', async (data, { rejectWithValue }) => {
  try {
    const response = await api.put(`api/post/editpost?postId=${data.id}`, data.content);
    return response;
  } catch (err) {
    console.error(err.response.data);
    return err.response.data;
  }
});
// export const editImages = createAsyncThunk('POST/EDIT_IMAGES', async (data, { rejectWithValue }) => {
//   try {
//     const response = await api.post('/post/images',data);
//     return response
//   } catch (err) {
//     console.error(err.response.data);
//     return rejectWithValue(err.response.data);
//   }
// });
