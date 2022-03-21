import { useCallback } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { backUrl } from 'config/config';
const ImagesWrapper = styled.div`
  & > div {
    display: inline-block;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 200px;
`;
function Images({ images, setImages }) {
  const onRemoveImage = useCallback(
    (id) => async () => {
      //   const response = await api.delete(`/post/removeimages/${images[id]}`);

      setImages([...images.filter((img, index) => index !== id)]);
    },
    [images, setImages]
  );
  return (
    <ImagesWrapper>
      {images.map((v, i) => {
        return (
          <div key={v}>
            <Image src={`${backUrl}/${v}`} alt={v} />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </div>
        );
      })}
    </ImagesWrapper>
  );
}

export default Images;
