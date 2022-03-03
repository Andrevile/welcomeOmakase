import { useEffect, useState, useRef } from 'react';
import PageTitle from 'components/Common/PageTitle';
import Layout from 'components/Common/Layout';
import PostForm from 'components/Post/PostForm';

const Share = () => {
  return (
    <Layout>
      <PageTitle>글 목록</PageTitle>
      <PostForm />
    </Layout>
  );
};

export default Share;
