import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Writer = styled.span`
  font-weight: bold;
`;

function PostWriter({ postUser }) {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <>
      <Writer style={{ fontWeight: 'bold' }}>
        {userInfo.user_ID === postUser ? `글쓴이:\u00A0 ${postUser} (나)` : `글쓴이:\u00A0 ${postUser}`}
      </Writer>
    </>
  );
}

export default PostWriter;
