import { Comment, List } from 'antd';
import CommentForm from './CommentForm';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { deleteComment } from 'redux/actions/post';
const CommentItem = styled(Comment)`
  .ant-comment-content {
    span {
      font-size: 16px;
    }
    font-size: 18px;
  }
`;
const CommentAuthor = styled.div``;
const CommentBtn = styled.button`
  position: absolute;
  cursor: pointer;
  z-index: 1001;
  border: none;
  background-color: white;
  right: 20px;
`;
function CommentArea({ post, comments }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const deleteCommentHandler = useCallback(
    (comment) => () => {
      dispatch(deleteComment({ id: post._id, commentID: comment._id }));
    },
    [dispatch, post._id]
  );
  return (
    <>
      <CommentForm post={post} />
      <List
        style={{ fontSize: 16, padding: '0px 3px' }}
        header={`${comments.length}개의 댓글`}
        itemLayout='horizontal'
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <CommentItem
              author={
                <CommentAuthor>
                  <span>{item.user.user_ID}</span>
                  {item.user.user_ID === userInfo.user_ID && (
                    <CommentBtn onClick={deleteCommentHandler(item)}>삭제</CommentBtn>
                  )}
                </CommentAuthor>
              }
              content={item.content}
            />
          </li>
        )}
      ></List>
    </>
  );
}

export default CommentArea;
