import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFormData from 'hooks/useFormData';
import { Comment, Form, Button, List, Input } from 'antd';
import { addComment } from 'redux/actions/post';
import shortid from 'shortid';
function CommentForm({ post }) {
  const { values, changeHandler, setValues } = useFormData({ initialValues: { comment: '' } });
  const { addCommentDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const onSubmitHandler = useCallback(() => {
    console.log(values);
    dispatch(
      addComment({
        id: post._id,
        comment: {
          post: post._id,
          user: JSON.parse(localStorage.getItem('user'))._id,
          content: values.comment,
        },
      })
    );
  }, [values]);

  useEffect(() => {
    if (addCommentDone) {
      setValues({ comment: '' });
    }
  }, [addCommentDone]);
  return (
    <Form onFinish={onSubmitHandler}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea rows={4} name='comment' value={values.comment} onChange={changeHandler} />
        <Button style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }} type='primary' htmlType='submit'>
          댓글 쓰기
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;
