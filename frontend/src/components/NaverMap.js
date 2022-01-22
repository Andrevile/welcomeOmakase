import React, { useEffect, useState, useRef } from "react";
import { callMap, Markerfilter } from "../module/naverMap";
import { Axios } from "../module/axiosmodule";
import { connect } from "react-redux";
import { datafilter } from "../module/redux/filtering";
import { gdata, filter_condition_form } from "../module/gdata";
const NaverMap = ({ setPlace, data_filter, filter_condition }) => {
  const [loading, loadingState] = useState(false);

  const filterForm = useRef();
  async function fetchData(condition) {
    let res = await Axios("/api/places", "POST", condition);
    return res;
  }

  async function filterData(e) {
    e.preventDefault();
    let condition = {
      place_name: this.place_name.value,
      youtuber: this.select_person.value,
      place_position: this.select_area.value,
    };
    data_filter(condition);
    let res = await Axios("/api/places", "POST", condition);
    res = await res.data;
    Markerfilter(res);
  }
  useEffect(() => {
    loadingState(
      fetchData(filter_condition_form).then((res) => {
        let loading = callMap("initialize", res.data, setPlace);
        return loading;
      })
    );
    (async function (filter_condition) {
      let res = await Axios("/api/places", "POST", filter_condition);
      res = await res.data;
      Markerfilter(res);
    })(filter_condition);
    // Markerfilter(data);

    filterForm.current.addEventListener("submit", filterData);
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
        <form className="filtering-form" ref={filterForm}>
          <div className="filtering-input">
            <input
              type="text"
              name="place_name"
              placeholder="가게 이름을 적어주세요"
            ></input>
          </div>
          <div className="filtering-select">
            <select name="select_person">
              <option value="">유튜버</option>
              {gdata.youtuber.map((person, idx) => {
                return (
                  <option key={idx} value={person}>
                    {person}
                  </option>
                );
              })}
            </select>
            <select name="select_area">
              <option value="">지역</option>
              {gdata.area.map((each_area, idx) => {
                return (
                  <option key={idx} value={each_area}>
                    {each_area}
                  </option>
                );
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
