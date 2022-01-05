import React, { useEffect } from "react";
import { callMap } from "../module/naverMap";
import { Axios } from "../module/axiosmodule";
const NaverMap = ({ data }) => {
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
    await callMap(res);
    //네이버 API 불러올 script 태그 생성후 src 삽입

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div id="map" style={{ width: "70%", height: "80vh" }}></div>;
};

export default NaverMap;
