import React, { useState, useRef, useEffect } from 'react';

import Layout from 'components/Common/Layout';
import NaverMap from 'components/NaverMap';
import IntroInfo from 'components/IntroInfo';
import PageTitle from 'components/Common/PageTitle';

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
    <Layout>
      <PageTitle>맛집검색</PageTitle>
      <div className='map-container'>
        <NaverMap setPlace={setPlace}></NaverMap>
      </div>
      <div ref={movetoIntro}></div>

      <IntroInfo placeIntro={currentPlace}></IntroInfo>
    </Layout>
  );
};

export default Dining;
