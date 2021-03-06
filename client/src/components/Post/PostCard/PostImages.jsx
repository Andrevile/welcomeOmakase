import { useCallback } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';
import { backUrl } from 'config/config';
const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f0f0f0;
  backgroundcolor: #f0f0f0;
  position: relative;
  cursor: pointer;
`;
const ShowMoreImg = styled.div`
  width: 50%;
  text-align: center;
  height: 100%;
  cursor: pointer;
`;

function PostImages({ images }) {
  const [imageZoom, setImageZoom] = useState(false);

  const onZoom = useCallback(() => {
    setImageZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setImageZoom(false);
  }, []);
  return (
    <>
      <div>
        <ImagesWrapper
          onClick={onZoom}
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            border: '1px solid #f0f0f0',
            backgroundColor: '#f0f0f0',
          }}
        >
          {images.length === 1 ? (
            // <img src={`${backUrl}/uploads/${images[0]}`} style={{ width: '100%' }} alt='포스트이미지'></img>
            <img src={images[0]} style={{ width: '100%' }} alt='포스트이미지'></img>
          ) : images.length === 2 ? (
            images.map((img, idx) => {
              return (
                <img
                  key={`${img} `}
                  style={{ width: '50%' }}
                  // src={`${backUrl}/uploads/${img}`}
                  src={img}
                  alt='포스트이미지'
                  onClick={onZoom}
                ></img>
              );
            })
          ) : (
            <>
              {/* <img src={`${backUrl}/uploads/${images[0]}`} style={{ width: '50%' }} alt='포스트이미지'></img> */}
              <img src={images[0]} style={{ width: '50%' }} alt='포스트이미지'></img>
              <ShowMoreImg>
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
