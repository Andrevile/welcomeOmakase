import { DATAFILTER } from 'redux/actions/filtering';

const initialState = {
  place_name: '',
  youtuber: '',
  place_position: '',
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case DATAFILTER:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default places;
