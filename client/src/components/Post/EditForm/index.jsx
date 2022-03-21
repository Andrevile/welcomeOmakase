import { useRef, useState } from 'react';
import { Form, Input, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import styled from 'styled-components';
import useFormData from 'hooks/useFormData';
import Images from './Images';
import { useDispatch } from 'react-redux';
import { editPost } from 'redux/actions/post';
import api from 'utils/api';
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

function EditForm({ post, setEditMode }) {
  const imageInput = useRef(null);
  const { values, changeHandler } = useFormData({ initialValues: { content: post.content } });
  const [images, setImages] = useState([...post.images]);
  //   const { posts, addPostDone, imgPaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!values.content || !values.content.trim()) {
      return message.warning('게시글을 작성하세요.');
    }

    dispatch(
      editPost({
        id: post._id,
        content: {
          user: post.user,
          content: values.content,
          images: [...images],
          comments: [...post.comments],
          likes: [...post.likes],
        },
      })
    ).then(({ type }) => {
      if (type !== 'POST/EDIT_POST/rejected') {
        message.success('게시글이 수정되었습니다.');
        setEditMode(false);
      }
    });
  };

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onChangeImages = useCallback(
    async (e) => {
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);
      });
      const response = await api.post('post/images', imageFormData);
      setImages([...images, ...response]);
    },
    [images]
  );

  const editModeHandler = useCallback(() => {
    setEditMode(false);
  }, [setEditMode]);

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
        <Button.Group style={{ float: 'right', color: 'white' }}>
          <>
            <Button style={{ marginRight: 10 }} type='primary' htmlType='submit'>
              수정
            </Button>
            <Button type='danger' onClick={editModeHandler}>
              취소
            </Button>
          </>
        </Button.Group>
      </OptionWrapper>
      <Images images={images} setImages={setImages} />
    </FormWrapper>
  );
}

export default EditForm;
