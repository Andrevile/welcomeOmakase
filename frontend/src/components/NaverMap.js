import React, { useEffect } from "react";
import { callMap } from "../module/naverMap";
import { Axios } from "../module/axiosmodule";
const NaverMap = ({ mode, placeData, set_default, data_filter }) => {
  useEffect(async () => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
      process.env.REACT_APP_MAP_KEY;
    script.async = true;
    // console.log(placeData);
    console.log(mode);
    if (mode === "initailize") {
      let res = await Axios("/api/places", "GET", {});
      res = await res.data;
      // console.log(res);
      set_default(res);
      // console.log("placeData", placeData);
      callMap("initialize", res);
    } else if (mode === "filtering") {
      callMap("filtering", placeData);
    }
    //네이버 API 불러올 script 태그 생성후 src 삽입
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mode === "initalize") {
      console.log(placeData);
      // callMap("initialize", placeData);
    } else if (mode === "filtering") {
      callMap("filtering", placeData);
    }
  }, [placeData]);
  return (
    <>
      <div id="map" style={{ width: "70%", height: "80vh" }}></div>
    </>
  );
};

export default NaverMap;

//여기에 리덕스 연결
