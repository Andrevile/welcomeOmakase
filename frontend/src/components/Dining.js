import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NaverMapContainer from "../containers/NaverMapContainer";
import DefaultIntro from "./DefaultIntro";
import { Axios } from "../module/axiosmodule";
const Dining = () => {
  //네이버 지도는 DOM을 직접적으로 조작하기 때문에, useRef를 추후에 고려해볼것
  // const [pageIdx, changepageIdx] = useState();
  const [initialize, changeInitialize] = useState(true);

  return (
    <>
      <div className="dining-container">
        <div className="map-container">
          <div id="filtering-place"></div>{" "}
          {/*여기서 이벤트로 리덕스 스테이트 조정*/}
          <NaverMapContainer></NaverMapContainer>
        </div>
      </div>

      <DefaultIntro></DefaultIntro>
    </>
  );
};

export default Dining;
