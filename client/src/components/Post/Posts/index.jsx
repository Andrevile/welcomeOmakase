import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import styled from 'styled-components';
import PostCard from '../PostCard';
import { useEffect } from 'react';
import { loadPosts } from 'redux/actions/post';
const CardList = styled.div`
  border: 1px solid #d9d9d9;
  padding: 10px;
`;

function Posts() {
  const { posts, loadPostsLoading, hasMorePosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(loadPosts());
    }
  }, []);
  useEffect(() => {
    const scrollY = () => {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (!loadPostsLoading && hasMorePosts) {
          dispatch(loadPosts());
        }
      }
    };
    window.addEventListener('scroll', scrollY);
    return () => {
      window.removeEventListener('scroll', scrollY);
    };
  }, [loadPosts, hasMorePosts, posts]);
  return (
    <>
      <CardList>
        {posts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </CardList>
      {loadPostsLoading && <h1> 로딩중...</h1>}
    </>
  );
}
export default Posts;
