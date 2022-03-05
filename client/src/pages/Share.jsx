import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSeletor } from 'react-redux';
import PageTitle from 'components/Common/PageTitle';
import Layout from 'components/Common/Layout';
import PostForm from 'components/Post/PostForm';
import Posts from 'components/Post/Posts';
import styled, { createGlobalStyle } from 'styled-components';

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
