import { useRef } from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import styled from 'styled-components';
import useFormData from 'hooks/useFormData';
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

  const onSubmit = useCallback(() => {
    setValues({ content: '' });
  }, []);

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
