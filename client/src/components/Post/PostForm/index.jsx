import { useEffect, useRef } from 'react';
import { Form, Input, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import styled from 'styled-components';
import useFormData from 'hooks/useFormData';

import { useDispatch, useSelector } from 'react-redux';
import { addPost, uploadImages } from 'redux/actions/post';

import Images from './Images';
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

  const { userInfo } = useSelector((state) => state.user);
  const { addPostDone, imgPaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!values.content || !values.content.trim()) {
      return message.warning('게시글을 작성하세요.');
    }

    dispatch(
      addPost({
        user_ID: userInfo.user_ID,
        content: {
          user: userInfo._id,
          content: values.content,
          images: imgPaths,
          comments: [],
          likes: [],
        },
      })
    ).then(({ type }) => {
      if (type !== 'POST/ADD_POST/rejected') {
        message.success('게시글이 등록되었습니다.');
      }
    });
  };

  useEffect(() => {
    if (addPostDone) {
      setValues({ content: '' });
    }
  }, [addPostDone, setValues]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onChangeImages = useCallback(
    (e) => {
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);
      });

      dispatch(uploadImages(imageFormData));
    },
    [dispatch]
  );

  return (
    // <FormWrapper encType='multipart/form-data' onFinish={onSubmit}>
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
        <input type='file' name='image' multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button icon={<UploadOutlined />} onClick={onClickImageUpload}>
          이미지 업로드
        </Button>
        <Button type='primary' style={{ float: 'right', color: 'white' }} htmlType='submit'>
          글 쓰기
        </Button>
      </OptionWrapper>

      <Images />
    </FormWrapper>
  );
}

export default PostForm;
