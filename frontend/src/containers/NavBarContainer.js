import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import { setdefault, datafilter } from "../module/redux/filtering";
const NavBarContainer = ({ set_default, data_filter }) => {
  return (
    <>
      <NavBar set_default={set_default} data_filter={data_filter}></NavBar>
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
)(NavBarContainer);
