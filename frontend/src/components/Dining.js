import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { callMap } from "../module/naverMap";
import DefaultIntro from "./DefaultIntro";
import { Axios } from "../module/axiosmodule";
const Dining = () => {
  //네이버 지도는 DOM을 직접적으로 조작하기 때문에, useRef를 추후에 고려해볼것
  const [pageIdx, changepageIdx] = useState();
  const [initialize, changeInitialize] = useState(true);
  const [placeData, filterplaceData] = useState([]);
  useEffect(async () => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
      process.env.REACT_APP_MAP_KEY;
    script.async = true;
    let res = await Axios("/api/places", "GET", {});
    console.log(res);
    res = await res.data;
    console.log(res);
    filterplaceData(res);
    await callMap(res);
    //네이버 API 불러올 script 태그 생성후 src 삽입
    // if (initialize) {

    // console.log(placeData);
    // callMap(placeData);

    return () => {
      console.log(placeData);

      document.body.removeChild(script);
    };
  }, []);
  console.log(placeData);
  return (
    <>
      <div className="dining-container">
        <div className="map-container">
          <div id="filtering-place"></div>
          <div id="map" style={{ width: "70%", height: "80vh" }}></div>
        </div>
      </div>

      <DefaultIntro></DefaultIntro>
    </>
  );
};

export default Dining;
