import { connect } from "react-redux";
import { setdefault, datafilter } from "../module/redux/filtering";
import Main from "../components/Main";
const MainContainer = ({ mode, placeData, set_default, data_filter }) => {
  return (
    <>
      <Main
        mode={mode}
        placeData={placeData}
        set_default={set_default}
        data_filter={data_filter}
      ></Main>
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
)(MainContainer);
