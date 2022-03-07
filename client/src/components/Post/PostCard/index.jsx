import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Popover, Button, List, Space } from 'antd';

import { CommentOutlined, EllipsisOutlined, LikeTwoTone, LikeOutlined } from '@ant-design/icons';
import { deletePost } from 'redux/actions/post';
import CommentArea from 'components/Post/CommentArea';
import styled from 'styled-components';
import PostImages from './PostImages';
import IconText from './IconText';
import PostWriter from './PostWriter';
const CardWrapper = styled.div`
  border: 1px solid #d9d9d9;
`;

function PostCard({ post }) {
  const [likes, setLikes] = useState(false); // 리덕스로 연결 필요
  const [comment, setComment] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onToggleLike = useCallback(() => {
    setLikes(!likes);
  }, [setLikes, likes]);

  const onToggleComment = useCallback(() => {
    setComment(!comment);
  }, [setComment, comment]);

  const deletePostHandler = useCallback(() => {
    dispatch(deletePost(post.id));
  }, []);
  return (
    <div style={{ marginBottom: 20 }}>
      <CardWrapper>
        {user && post.user === user.user_ID ? (
          <Card
            cover={post.images[0] && <PostImages images={post.images}></PostImages>}
            actions={[
              <IconText
                key='comment'
                icon={<CommentOutlined />}
                text={post.comments.length}
                handler={onToggleComment}
              />,
              likes ? (
                <IconText key='liked' icon={<LikeTwoTone />} text={post.comments.length} handler={onToggleLike} />
              ) : (
                <IconText key='liked' icon={<LikeOutlined />} text={post.comments.length} handler={onToggleLike} />
              ),

              <Popover
                key='ellipsis'
                content={
                  <Button.Group>
                    <>
                      <Button>수정</Button>
                      <Button type='danger' onClick={deletePostHandler}>
                        삭제
                      </Button>
                    </>
                  </Button.Group>
                }
              >
                <EllipsisOutlined />
              </Popover>,
            ]}
          >
            <Card.Meta
              description={post.content} //PostContent 컴포넌트 삽입 할 공간
              title={<PostWriter postUser={post.user} />}
            ></Card.Meta>
          </Card>
        ) : (
          <Card
            cover={post.images[0] && <PostImages images={post.images}></PostImages>}
            actions={[
              <IconText
                key='comment'
                icon={<CommentOutlined />}
                text={post.comments.length}
                handler={onToggleComment}
              />,
              likes ? (
                <IconText key='liked' icon={<LikeTwoTone />} text={post.comments.length} handler={onToggleLike} />
              ) : (
                <IconText key='liked' icon={<LikeOutlined />} text={post.comments.length} handler={onToggleLike} />
              ),
            ]}
          >
            <Card.Meta description={post.content} title={<PostWriter postUser={post.user} />}></Card.Meta>
          </Card>
        )}
      </CardWrapper>
      {comment && <CommentArea post={post} comments={post.comments}></CommentArea>}
    </div>
  );
}

export default PostCard;
