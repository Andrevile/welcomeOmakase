import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NaverMap from "../components/NaverMap";
import IntroInfo from "./IntroInfo";
import { Axios } from "../module/axiosmodule";
const Dining = () => {
  //네이버 지도는 DOM을 직접적으로 조작하기 때문에, useRef를 추후에 고려해볼것
  const location = useLocation();
  const [initialize, changeInitialize] = useState(true);
  const [currentPlace, setPlace] = useState();
  const movetoIntro = useRef(null);

  useEffect(() => {
    if (currentPlace) {
      movetoIntro.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPlace]);
  return (
    <>
      <div className="dining-container">
        <div className="map-container">
          <div id="filtering-place"></div>{" "}
          <NaverMap location={location} setPlace={setPlace}></NaverMap>
        </div>
      </div>
      {!currentPlace ? null : <IntroInfo ref={movetoIntro}></IntroInfo>}
      {/* <DefaultIntro></DefaultIntro> */}
    </>
  );
};

export default Dining;
