import { useRef } from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import styled from 'styled-components';

function PostForm() {
  const imageInput = useRef(null);
  const onSubmit = useCallback(() => {}, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);
  return (
    <Form encType='multipart/form-data'>
      <Input.TextArea placeholder='후기를 남겨주세요.' autoSize={{ minRows: 3, maxRows: 5 }} />
      <div>
        <input type='file' multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type='primary' style={{ float: 'right', color: 'white' }} htmlType='submit'>
          글 쓰기
        </Button>
      </div>
    </Form>
  );
}

export default PostForm;
