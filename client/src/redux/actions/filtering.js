import { createAction } from '@reduxjs/toolkit';

export const DATAFILTER = 'filtering/datafilter'; // placedata를 필터링 하는 것

// export const datafilter = (data) => ({ type: DATAFILTER, data });

export const datafilter = createAction('filtering/datafilter', (data) => {
  return {
    payload: {
      data,
    },
  };
});
