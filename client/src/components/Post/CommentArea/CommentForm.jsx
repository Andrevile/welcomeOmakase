import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFormData from 'hooks/useFormData';
import { Comment, Form, Button, List, Input } from 'antd';

function CommentForm() {
  const { values, changeHandler } = useFormData({ initialValues: { comment: '' } });

  const onSubmitHandler = useCallback(() => {
    console.log(values);
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
