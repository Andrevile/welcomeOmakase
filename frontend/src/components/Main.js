import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { datafilter } from '../module/redux/filtering';
import { profileList } from '../module/gdata';
const Main = ({ data_filter }) => {
  const test_condition = useRef(null);
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
              return (
                <Link
                  key={idx}
                  to='/dining'
                  className='tiles-card'
                  onClick={async (e) => {
                    let condition = {
                      place_name: '',
                      youtuber: profile.name,
                      place_position: '',
                    };
                    data_filter(condition);
                  }}
                >
                  <li>
                    <div className='tiles-profile-picture'>
                      <img src={'img/youtuber/' + profile.name + '.jpeg'} alt={profile}></img>
                      <p className='tiles-profile-title'>{profile.name}</p>
                      <p className='tiles-profile-intro'>{'(' + profile.intro + ')'}</p>
                      <p style={{ marginTop: '10px' }}>
                        구독자: <span>{profile.sub}</span>
                      </p>
                    </div>
                  </li>
                </Link>
              );
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
