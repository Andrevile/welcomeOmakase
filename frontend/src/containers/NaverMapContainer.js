import { useEffect } from "react";
import NaverMap from "../components/NaverMap";
import { connect } from "react-redux";
import { setdefault, datafilter } from "../module/redux/filtering";
import { Axios } from "../module/axiosmodule";
const NaverMapContainer = ({ mode, placeData, set_default, data_filter }) => {
  useEffect(async () => {
    if (mode === "initailize") {
      //   let res = await Axios("/api/places", "GET", {});
      //   res = await res.data;
      //   console.log(res);
      //   set_default(res);
      console.log("placeData", placeData);
    } else if (mode === "filtering") {
    }
  }, []);
  return (
    <>
      <NaverMap
        mode={mode}
        placeData={placeData}
        set_default={set_default}
        data_filter={data_filter}
      ></NaverMap>
    </>
  );
};

export default connect(
  (state) => ({
    mode: state.places.mode,
    placeData: state.places.placeData,
  }),
  (dispatch) => ({
    set_default: (data) => dispatch(setdefault(data)),
    data_filter: (data) => dispatch(datafilter(data)),
  })
)(NaverMapContainer);
