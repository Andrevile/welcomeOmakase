import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Popover, Button, List, Space } from 'antd';

import {
  CommentOutlined,
  EllipsisOutlined,
  LikeTwoTone,
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import PostImages from './PostImages';
import IconText from './IconText';
const CardWrapper = styled.div`
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
`;

function PostCard({ post }) {
  const [likes, setLikes] = useState(false); // 리덕스로 연결 필요
  const [comment, setComment] = useState(false);

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(post, user);
  }, []);

  const onToggleLike = useCallback(() => {
    console.log('ger');
    setLikes(!likes);
  }, [setLikes, likes]);

  const onToggleComment = useCallback(() => {
    console.log('gertew');
    setComment(!comment);
  }, [setComment, comment]);
  return (
    <CardWrapper>
      <Card
        cover={post.images[0] && <PostImages images={post.images}></PostImages>}
        actions={[
          <IconText key='comment' icon={<CommentOutlined />} text={post.comments.length} handler={onToggleComment} />,
          likes ? (
            <IconText key='liked' icon={<LikeTwoTone />} text={post.comments.length} handler={onToggleLike} />
          ) : (
            <IconText key='liked' icon={<LikeOutlined />} text={post.comments.length} handler={onToggleLike} />
          ),
          <Popover
            key='ellipsis'
            content={
              <Button.Group>
                {user && post.user === user.user_ID ? (
                  <>
                    <Button>수정</Button>
                    <Button type='danger'>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          description={post.content}
          title={
            <>
              <span style={{ fontWeight: 'bold' }}>{`글쓴이:\u00A0 ${post.user}`}</span>
            </>
          }
        ></Card.Meta>
      </Card>
    </CardWrapper>
  );
}

export default PostCard;
