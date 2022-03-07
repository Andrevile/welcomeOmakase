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
  const { posts, loadPostsLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts(1));
  }, []);
  return (
    <>
      {loadPostsLoading ? (
        <h1> 로딩중...</h1>
      ) : (
        <CardList>
          {posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </CardList>
      )}
    </>
  );
}
export default Posts;
