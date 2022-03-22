import { useState } from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { backUrl } from 'config/config';
function ImagesZoom({ images, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Header>
        상세 이미지 <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <Slider
          infinite={true}
          speed={500}
          slidesToScroll={1}
          slidesToShow={1}
          beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
        >
          {images.map((img, idx) => {
            return (
              <ImgWrapper key={idx}>
                <img src={`${backUrl}/uploads/${img}`} alt={img}></img>
              </ImgWrapper>
            );
          })}
        </Slider>
        <Index>
          <div>
            {currentSlide + 1} / {images.length}
          </div>
        </Index>
      </SlickWrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.header`
  background-color: white;
  position: relative;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 20px;
`;

const SlickWrapper = styled.div`
  background-color: black;
  height: 100%;
  padding: 50px 100px;
`;

const ImgWrapper = styled.div`
  padding: 0px 32px 32px 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
    width: 80%;
  }
`;

const Index = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export default ImagesZoom;
