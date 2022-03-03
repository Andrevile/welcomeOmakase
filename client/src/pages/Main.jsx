import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profileList } from 'static/constants/profileList';
import { defaultCondition } from 'static/constants/defaultCondition';
import Profile from 'components/Profile';
import filteringSlice from 'redux/reducers/filteringSlice';

const Main = () => {
  const dispatch = useDispatch();
  const onClickHandler = (name) => () => {
    dispatch(filteringSlice.actions.datafilter({ ...defaultCondition, youtuber: name }));
  };
  return (
    <>
      <div className='Jumbo'>
        <div className='Jumbo-description'>
          <p className='Jumbo-title'>이랏샤이 おまかせ</p>
          <p>먹을거에 목숨 건 유튜버들 추천 리스트...</p>
        </div>
      </div>

      <div className='Youtuber'>
        <div className='tiles'>
          <div className='tiles-title'>LIST</div>
          <ul>
            {profileList.map((profile, idx) => {
              return <Profile key={idx} profile={profile} handler={onClickHandler} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Main;
