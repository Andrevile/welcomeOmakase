import { createSlice } from '@reduxjs/toolkit';

let post_ID = 4;
const initialState = {
  posts: [
    {
      id: 1,
      user: 'abc',
      content: 'ㅇㄴㅁㅇㄻㄴㅇㄹ',
      images: [
        { src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' },
        { src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' },
      ],
      comments: [
        {
          user: 'errrrrrr',
          content: '웕',
        },
      ],
      likes: ['test'],
    },
    {
      id: 2,
      user: 'abg1000',
      content: 'test',
      images: [{ src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' }],
      comments: [],
      likes: ['test', 'test2'],
    },
    {
      id: 3,
      user: 'test123456789',
      content: 'test',
      images: [
        { src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' },
        { src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' },
        { src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' },
      ],
      comments: [
        {
          user: 'errrrrrr',
          content: '웕',
        },
        {
          user: 'errrrrrr',
          content: '웕',
        },
      ],
      likes: ['test', 'test2'],
    },
  ],
  imgPaths: [],
};

const dummyPost = {
  id: post_ID++,
  user: 'abg1000',
  content: 'test',
  images: [{ src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' }],
  comments: [
    {
      user: 'errrrrrr',
      content: '웕',
    },
  ],
  likes: ['test', 'test2'],
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts = [dummyPost, ...state.posts];
    },
  },
});

export default postSlice;
