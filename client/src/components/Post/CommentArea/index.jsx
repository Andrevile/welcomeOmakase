import { Comment, List, Button } from 'antd';
import CommentForm from './CommentForm';
import styled from 'styled-components';

const CommentItem = styled(Comment)`
  .ant-comment-content {
    span {
      font-size: 16px;
    }
    font-size: 18px;
  }
`;
function CommentArea({ comments }) {
  return (
    <>
      <CommentForm />
      <List
        style={{ fontSize: 16, padding: '0px 3px' }}
        header={`${comments.length}개의 댓글`}
        itemLayout='horizontal'
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <CommentItem author={item.user} content={item.content} />
          </li>
        )}
      ></List>
    </>
  );
}

export default CommentArea;
