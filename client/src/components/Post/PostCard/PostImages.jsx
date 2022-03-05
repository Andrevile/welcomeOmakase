import { useCallback } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';
const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f0f0f0;
  backgroundcolor: #f0f0f0;
`;
const ShowMoreImg = styled.div`
  width: 50%;
  text-align: center;
`;

function PostImages({ images }) {
  const [imageZoom, setImageZoom] = useState(false);

  const onZoom = useCallback(() => {
    console.log('on');
    setImageZoom(true);
  }, [imageZoom]);

  const onClose = useCallback(() => {
    console.log('off');
    setImageZoom(false);
  }, [imageZoom]);
  return (
    <>
      <div>
        <ImagesWrapper
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            border: '1px solid #f0f0f0',
            backgroundColor: '#f0f0f0',
          }}
        >
          {images.length === 1 ? (
            <img src={images[0].src} style={{ width: '100%' }} alt='포스트이미지' onClick={onZoom}></img>
          ) : images.length === 2 ? (
            images.map((img, idx) => {
              return (
                <img
                  key={`${img.src} ` + ` ${idx}`}
                  style={{ width: '50%' }}
                  src={img.src}
                  alt='포스트이미지'
                  onClick={onZoom}
                ></img>
              );
            })
          ) : (
            <>
              <img src={images[0].src} style={{ width: '50%' }} alt='포스트이미지' onClick={onZoom}></img>
              <ShowMoreImg onClick={onZoom}>
                <PlusOutlined />
                <br />
                {images.length - 1}
                개의 사진 더보기
              </ShowMoreImg>
            </>
          )}
        </ImagesWrapper>
      </div>
      {imageZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
}

export default PostImages;
