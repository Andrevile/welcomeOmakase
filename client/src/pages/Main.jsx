import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { datafilter } from 'redux/actions/filtering';
import { profileList } from 'static/constants/profileList';
import { defaultCondition } from 'static/constants/defaultCondition';
import Profile from 'components/Profile';

const Main = ({ data_filter }) => {
  const onClickHandler = (name) => () => {
    data_filter({ ...defaultCondition, youtuber: name });
  };
  return (
    <>
      <div className='Jumbo'>
        <div className='Jumbo-description'>
          <h1>이랏샤이 おまかせ</h1>
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

export default connect(
  (state) => ({
    place_name: state.places.place_name,
    youtuber: state.places.youtuber,
    place_position: state.places.place_position,
  }),
  (dispatch) => ({
    data_filter: (data) => dispatch(datafilter(data)),
  })
)(Main);
