import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import styled from 'styled-components';
import PostCard from '../PostCard';
import { useEffect } from 'react';
import { loadPosts } from 'redux/actions/post';
import _throttle from 'lodash/throttle';
const CardList = styled.div`
  border: 1px solid #d9d9d9;
  padding: 10px;
`;

function Posts() {
  const { posts, loadPostsLoading, hasMorePosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const scrollY = _throttle(() => {
    console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (!loadPostsLoading && hasMorePosts) {
        console.log('이벤트', loadPostsLoading, hasMorePosts);
        dispatch(loadPosts(posts[posts.length - 1]?._id));
      }
    }
  }, 500);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(loadPosts());
    }
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    window.addEventListener('scroll', scrollY);
    return () => {
      window.removeEventListener('scroll', scrollY);
    };
  }, [loadPostsLoading, hasMorePosts, posts]);
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
