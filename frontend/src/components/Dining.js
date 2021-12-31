import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { callMap } from "../module/naverMap";
import DefaultIntro from "./DefaultIntro";

const Dining = () => {
  //네이버 지도는 DOM을 직접적으로 조작하기 때문에, useRef를 추후에 고려해볼것
  const [pageIdx, changepageIdx] = useState();
  const [placeData, filterplaceData] = useState([
    {
      youtuber: "",
      place_name: "기본",
      place_position: "서울시/1",
      place_imgPath: "img/Jumbo-picture3.jpg",
      place_yotubeURL: "",
      lat: 37.554822,
      long: 126.970833,
    },
    {
      youtuber: "",
      place_name: "서울역",
      place_position: "서울시/2",
      place_imgPath: "",
      place_yotubeURL: "",
      lat: 37.5536387,
      long: 126.9669926,
    },
  ]);
  useEffect(() => {
    //네이버 API 불러올 script 태그 생성후 src 삽입
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
      process.env.REACT_APP_MAP_KEY;
    script.async = true;
    document.body.appendChild(script);
    callMap(placeData);

    return () => {
      document.body.removeChild(script);
    };
  }, [placeData]);

  return (
    <>
      <div className="dining-container">
        <div className="contents-container">
          <div className="map-container">
            <div id="map" style={{ width: "90%", height: "80vh" }}></div>
          </div>
        </div>
      </div>
      <DefaultIntro></DefaultIntro>
    </>
  );
};

export default Dining;
