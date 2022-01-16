import React, { useEffect } from "react";
import { callMap } from "../module/naverMap";
import { Axios } from "../module/axiosmodule";

const NaverMap = ({ location, setPlace }) => {
  const query = decodeURI(location.search);
  async function fetchData(mode, query, setPlace) {
    let res = await Axios("/api/places" + query, "GET", {});
    res = await res.data;
    await callMap(mode, res, setPlace);
  }
  useEffect(() => {
    fetchData("initialize", query, setPlace); //마커 모두 등록
    return () => {};
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </>
  );
};

export default NaverMap;

//여기에 리덕스 연결
