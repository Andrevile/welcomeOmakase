import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import styled from 'styled-components';
import PostCard from '../PostCard';

const CardList = styled.div`
  border: 1px solid #d9d9d9;
  padding: 10px;
`;

function Posts() {
  const { posts } = useSelector((state) => state.post);
  return (
    <CardList>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </CardList>
  );
}
export default Posts;
