const SETDEFAULT = "filtering/setdefault"; // state를 초기화하는 것
const DATAFILTER = "filtering/datafilter"; // placedata를 필터링 하는 것

export const setdefault = (data) => ({ type: SETDEFAULT, data });
export const datafilter = (data) => ({ type: DATAFILTER, data });

const initialState = {
  mode: "initailize",
  placeData: [],
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case SETDEFAULT:
      console.log(action.data);
      return {
        ...state,
        placeData: action.data, //state.placeData.concat(action.data),
      };
    case DATAFILTER:
      return {
        ...state,
        mode: "filtering",
        placeData: action.data,
      };
    default:
      return state;
  }
};

export default places;
