const SETDEFAULT = "filtering/setdefault"; // state를 초기화하는 것
const DATASEARCH = "filtering/datasearch"; // placedata를 필터링 하는 것

export const setdefault = () => ({ type: SETDEFAULT });
export const datasearch = () => ({ type: DATASEARCH, data });

const initialState = {
  placeData: [],
};
