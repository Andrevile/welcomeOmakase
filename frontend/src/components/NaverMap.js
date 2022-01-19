import React, { useEffect, useState } from "react";
import { callMap } from "../module/naverMap";
import { Axios } from "../module/axiosmodule";
import { connect } from "react-redux";
import { datafilter } from "../module/redux/filtering";
import { gdata } from "../module/gdata";
const NaverMap = ({ setPlace, data_filter, filter_condition }) => {
  const [loading, loadingState] = useState(false);

  async function fetchData(mode, condition, setPlace) {
    let res = await Axios("/api/places", "POST", condition);
    res = await res.data;
    await callMap(mode, res, setPlace);
  }
  useEffect(() => {
    console.log(gdata.youtuber);
    loadingState(fetchData("initialize", filter_condition, setPlace)); //마커 모두 등록
    return () => {
      data_filter({
        place_name: "",
        youtuber: "",
        place_position: "",
      });
    };
  }, []);

  return (
    <>
      <div className="filtering-place">
        <form className="filtering-form">
          <div className="filtering-input">
            <input
              type="text"
              name="place_name"
              placeholder="가게 이름을 적어주세요"
            ></input>
          </div>
          <div className="filtering-select">
            <select name="select-person">
              <option value="">유튜버</option>
              {gdata.youtuber.map((person) => {
                return <option value={person}>{person}</option>;
              })}
            </select>
            <select name="select-area">
              <option value="">지역</option>
              {gdata.area.map((each_area) => {
                return <option value={each_area}>{each_area}</option>;
              })}
            </select>
          </div>
          <button className="filtering-submit">
            <i className="fa-solid fa-magnifying-glass">
              <span>검색</span>
            </i>
          </button>
        </form>
      </div>
      {loading === false ? (
        <div className="loading-modal">
          <div className="loading"></div>
        </div>
      ) : (
        <div id="map" style={{ width: "100%" }}></div>
      )}
    </>
  );
};

// export default NaverMap;
export default connect(
  (state) => ({
    filter_condition: {
      place_name: state.places.place_name,
      youtuber: state.places.youtuber,
      place_position: state.places.place_position,
    },
  }),
  (dispatch) => ({
    data_filter: (data) => dispatch(datafilter(data)),
  })
)(NaverMap);

//여기에 리덕스 연결
