import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSeletor } from 'react-redux';
import PageTitle from 'components/Common/PageTitle';
import Layout from 'components/Common/Layout';
import PostForm from 'components/Post/PostForm';
import Posts from 'components/Post/Posts';

const Share = () => {
  return (
    <Layout>
      <PageTitle>글 목록</PageTitle>
      <PostForm />
      <Posts />
    </Layout>
  );
};

export default Share;
