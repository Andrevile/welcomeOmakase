import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NaverMap from "../components/NaverMap";
import IntroInfo from "./IntroInfo";
import { Axios } from "../module/axiosmodule";
const Dining = () => {
  //네이버 지도는 DOM을 직접적으로 조작하기 때문에, useRef를 추후에 고려해볼것

  const [initialize, changeInitialize] = useState(true);
  const [currentPlace, setPlace] = useState();
  const movetoIntro = useRef(null);
  useEffect(() => {}, []);

  useEffect(() => {
    let Timer;
    if (currentPlace) {
      Timer = setTimeout(() => {
        movetoIntro.current.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
    return () => {
      clearTimeout(Timer);
    };
  }, [currentPlace]);
  return (
    <>
      <div className="dining-container">
        <div className="menu-title-container">
          <p>맛집 검색</p>
        </div>
        <div className="map-container">
          <NaverMap setPlace={setPlace}></NaverMap>
          {/* <div className="big-device filtering-place"></div> */}
        </div>
        <div ref={movetoIntro}></div>
        {/* {!currentPlace ? null : <IntroInfo></IntroInfo>} */}
        <IntroInfo placeIntro={currentPlace}></IntroInfo>
      </div>
    </>
  );
};

export default Dining;
