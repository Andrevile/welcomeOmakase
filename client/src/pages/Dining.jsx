import React, { useState, useRef, useEffect } from 'react';

import NaverMap from 'components/NaverMap';
import IntroInfo from 'components/IntroInfo';
const Dining = () => {
  const [currentPlace, setPlace] = useState();
  const movetoIntro = useRef(null);

  useEffect(() => {
    let Timer;
    if (currentPlace) {
      Timer = setTimeout(() => {
        movetoIntro.current.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    }
    return () => {
      clearTimeout(Timer);
    };
  }, [currentPlace]);
  return (
    <div className='dining-container'>
      <div className='menu-title-container'>
        <p>맛집 검색</p>
      </div>
      <div className='map-container'>
        <NaverMap setPlace={setPlace}></NaverMap>
      </div>
      <div ref={movetoIntro}></div>

      <IntroInfo placeIntro={currentPlace}></IntroInfo>
    </div>
  );
};

export default Dining;
