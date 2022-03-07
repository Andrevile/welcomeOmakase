import { useEffect, useRef } from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import styled from 'styled-components';
import useFormData from 'hooks/useFormData';

import { useDispatch, useSelector } from 'react-redux';
import { addPost } from 'redux/actions/post';
import userSlice from 'redux/reducers/userSlice';
import shortid from 'shortid';
const FormWrapper = styled(Form)`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 5px;
`;

const OptionWrapper = styled.div`
  margin-top: 5px;
`;

function PostForm() {
  const imageInput = useRef(null);
  const { values, changeHandler, setValues } = useFormData({ initialValues: { content: '' } });

  const { user } = useSelector((state) => state.user);
  const { posts, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      addPost({
        id: shortid.generate(),
        user: JSON.parse(localStorage.getItem('user')).user_ID,
        content: values.content,
        images: [],
        comments: [],
        likes: [],
      })
    );
  };

  useEffect(() => {
    if (addPostDone) {
      setValues({ content: '' });
    }
  }, [addPostDone]);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <FormWrapper encType='multipart/form-data' onFinish={onSubmit}>
      <Input.TextArea
        style={{ fontSize: 18 }}
        placeholder='후기를 남겨주세요.'
        autoSize={{ minRows: 3, maxRows: 5 }}
        value={values.content}
        name={'content'}
        onChange={changeHandler}
      />

      <OptionWrapper>
        <input type='file' multiple hidden ref={imageInput} />
        <Button icon={<UploadOutlined />} onClick={onClickImageUpload}>
          이미지 업로드
        </Button>
        <Button type='primary' style={{ float: 'right', color: 'white' }} htmlType='submit'>
          글 쓰기
        </Button>
      </OptionWrapper>
    </FormWrapper>
  );
}

export default PostForm;
