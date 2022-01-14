import React, { useState, useEffect } from "react";
import { callMap } from "../module/naverMap";
import { Axios } from "../module/axiosmodule";

const NaverMap = ({ location, mode, placeData, set_default, data_filter }) => {
  const [MarkerList, setMarkerList] = useState([]);
  const query = decodeURI(location.search);
  async function fetchData(mode, query) {
    let res = await Axios("/api/places" + query, "GET", {});
    res = await res.data;
    set_default(res);
    if (mode === "initialize") {
      callMap("initialize", res, MarkerList, setMarkerList);
    } else if (mode === "filtering") {
      callMap("filtering", res, MarkerList, setMarkerList);
    }
  }
  useEffect(() => {
    fetchData("initialize", ""); //마커 모두 등록
    if (query && query !== "?youtuber=all") {
      fetchData("filtering", query);
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (mode === "initalize") {
      console.log(placeData);
      // callMap("initialize", placeData);
    } else if (mode === "filtering") {
      // callMap("filtering", placeData);
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
