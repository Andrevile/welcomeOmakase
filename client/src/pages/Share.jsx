import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageTitle from 'components/Common/PageTitle';
import Layout from 'components/Common/Layout';
import PostForm from 'components/Post/PostForm';
import Posts from 'components/Post/Posts';
import { createGlobalStyle } from 'styled-components';
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
  const { isLoggedIn } = useSelector((state) => state.user);
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
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
