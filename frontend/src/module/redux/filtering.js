const DATAFILTER = "filtering/datafilter"; // placedata를 필터링 하는 것

export const datafilter = (data) => ({ type: DATAFILTER, data });

const initialState = {
  place_name: "",
  youtuber: "",
  place_position: "",
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case DATAFILTER:
      console.log(action.data);
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default places;
