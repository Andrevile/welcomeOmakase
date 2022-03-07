import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFormData from 'hooks/useFormData';
import { Comment, Form, Button, List, Input } from 'antd';
import { addComment } from 'redux/actions/post';

function CommentForm({ post }) {
  const { values, changeHandler } = useFormData({ initialValues: { comment: '' } });
  const dispatch = useDispatch();
  const onSubmitHandler = useCallback(() => {
    console.log(values);
    dispatch(
      addComment({
        id: post.id,
        comment: { user: JSON.parse(localStorage.getItem('user')).user_ID, content: values.comment },
      })
    );
  }, [values]);
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
