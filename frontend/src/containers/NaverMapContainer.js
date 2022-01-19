import NaverMap from "../components/NaverMap";
import { connect } from "react-redux";
import { datafilter } from "../module/redux/filtering";

const NaverMapContainer = ({
  location,
  mode,
  placeData,
  set_default,
  data_filter,
}) => {
  return (
    <>
      <NaverMap
        location={location}
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
    place_name: state.places.place_name,
    youtuber: state.places.youtuber,
    place_position: state.places.place_position,
  }),
  (dispatch) => ({
    data_filter: (data) => dispatch(datafilter(data)),
  })
)(NaverMapContainer);
