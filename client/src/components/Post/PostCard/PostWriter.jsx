import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Writer = styled.span`
  font-weight: bold;
`;

function PostWriter({ postUser }) {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Writer style={{ fontWeight: 'bold' }}>
        {user.user_ID === postUser ? `글쓴이:\u00A0 ${postUser} (나)` : `글쓴이:\u00A0 ${postUser}`}
      </Writer>
    </>
  );
}

export default PostWriter;
