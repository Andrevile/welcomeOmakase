import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from 'components/Common/PageTitle';
import Layout from 'components/Common/Layout';
import PostForm from 'components/Post/PostForm';
import Posts from 'components/Post/Posts';
import styled, { createGlobalStyle } from 'styled-components';
import { loadPosts } from 'redux/actions/post';
export const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important;
  }
  .ant-card-actions{
    background-color: #fafafa;
  }
  .ant-card-body{
    font-size: 18px;
  }
 
  
`;
const Share = () => {
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(user.user_ID);
  }, []);
  return (
    <Layout>
      <Global />
      <PageTitle>글 목록</PageTitle>
      <PostForm />
      <Posts />
    </Layout>
  );
};

export default Share;
