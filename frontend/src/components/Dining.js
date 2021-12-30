import React from "react";
import { NaverMap, Marker } from "react-naver-maps";

const Dining = () => {
  return (
    <div className="dining-container">
      <div className="contents-container">
        <div className="map-container">
          <NaverMap
            className="NaverMap"
            mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
            style={{
              width: "100%", // 네이버지도 가로 길이
              height: "80vh", // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
            defaultZoom={13} // 지도 초기 확대 배율
          />
        </div>
      </div>
    </div>
  );
};

export default Dining;
