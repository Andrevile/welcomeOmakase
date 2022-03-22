import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import { removeImages } from 'redux/actions/post';
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
function Images() {
  const { imgPaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const onRemoveImage = useCallback(
    (id) => () => {
      dispatch(removeImages(imgPaths[id]));
    },
    [imgPaths, dispatch]
  );
  return (
    <ImagesWrapper>
      {imgPaths.map((v, i) => {
        return (
          <div key={v}>
            {/* <Image src={`${backUrl}/uploads/${v}`} alt={v} /> */}
            <Image src={v} alt={v} />
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
