import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NaverMap from "./NaverMap";
import DefaultIntro from "./DefaultIntro";
import { Axios } from "../module/axiosmodule";
const Dining = () => {
  //네이버 지도는 DOM을 직접적으로 조작하기 때문에, useRef를 추후에 고려해볼것
  // const [pageIdx, changepageIdx] = useState();
  const [initialize, changeInitialize] = useState(true);
  const [placeData, filterplaceData] = useState([]);

  return (
    <>
      <div className="dining-container">
        <div className="map-container">
          <div id="filtering-place"></div>
          <NaverMap></NaverMap>
        </div>
      </div>

      <DefaultIntro></DefaultIntro>
    </>
  );
};

export default Dining;
