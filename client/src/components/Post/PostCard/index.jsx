import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Popover, Button } from 'antd';

import { CommentOutlined, EllipsisOutlined, LikeTwoTone, LikeOutlined } from '@ant-design/icons';
import { deletePost, likeAction, unLikeAction } from 'redux/actions/post';
import CommentArea from 'components/Post/CommentArea';

import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import EditForm from '../EditForm';
import PostImages from './PostImages';
import IconText from './IconText';
import PostWriter from './PostWriter';

const CardWrapper = styled.div`
  border: 1px solid #d9d9d9;
`;

dayjs.locale('ko');
dayjs.extend(relativeTime);
function PostCard({ post }) {
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const onToggleLike = useCallback(() => {
    dispatch(likeAction({ id: post._id, user: userInfo.user_ID }));
  }, [post._id, userInfo.user_ID, dispatch]);

  const onToggleUnLike = useCallback(() => {
    dispatch(unLikeAction({ id: post._id, user: userInfo.user_ID }));
  }, [post._id, userInfo.user_ID, dispatch]);

  const onToggleComment = useCallback(() => {
    setComment(!comment);
  }, [setComment, comment]);

  const deletePostHandler = useCallback(() => {
    dispatch(deletePost(post._id));
  }, [dispatch, post._id]);

  const editModeHandler = useCallback(() => {
    setEditMode(true);
  }, []);

  const likes = post.likes.find((v) => v === userInfo.user_ID);
  if (editMode) {
    return <EditForm post={post} setEditMode={setEditMode} />;
  }
  return (
    <div key={post._id} style={{ marginBottom: 20 }}>
      <CardWrapper>
        {userInfo && post.user.user_ID === userInfo.user_ID ? (
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
                <IconText key='liked' icon={<LikeTwoTone />} text={post.likes.length} handler={onToggleUnLike} />
              ) : (
                <IconText key='liked' icon={<LikeOutlined />} text={post.likes.length} handler={onToggleLike} />
              ),

              <Popover
                key='ellipsis'
                content={
                  <Button.Group>
                    <>
                      <Button onClick={editModeHandler}>??????</Button>
                      <Button type='danger' onClick={deletePostHandler}>
                        ??????
                      </Button>
                    </>
                  </Button.Group>
                }
              >
                <EllipsisOutlined />
              </Popover>,
            ]}
          >
            <>
              <span style={{ float: 'right' }}>{dayjs(post.createdAt).format('YYYY-MM-DD')}</span>
            </>
            <Card.Meta
              description={post.content} //PostContent ???????????? ?????? ??? ??????
              title={<PostWriter postUser={post.user.user_ID} />}
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
                <IconText key='liked' icon={<LikeTwoTone />} text={post.likes.length} handler={onToggleUnLike} />
              ) : (
                <IconText key='liked' icon={<LikeOutlined />} text={post.likes.length} handler={onToggleLike} />
              ),
            ]}
          >
            <>
              <span style={{ float: 'right' }}>{dayjs(post.createdAt).format('YYYY-MM-DD')}</span>
            </>
            <Card.Meta description={post.content} title={<PostWriter postUser={post.user.user_ID} />}></Card.Meta>
          </Card>
        )}
      </CardWrapper>
      {comment && <CommentArea post={post} comments={post.comments}></CommentArea>}
    </div>
  );
}

export default PostCard;
