import React, { useEffect, useRef, useState } from 'react';
import { Axios } from 'utils/axiosmodule';
import { connect } from 'react-redux';
import { datafilter } from 'redux/actions/filtering';
import { defaultCondition } from 'static/constants/defaultCondition';
import { gdata } from 'static/constants/gdata';
import useFormData from 'hooks/useFormData';
import SelectBox from './SelectBox';
import useCallMap from 'hooks/useCallMap';
import Loading from 'components/Common/Loading';
import Map from './Map';
import useMarker from 'hooks/useMarker';

function NaverMap({ setPlace, data_filter, filter_condition }) {
  const { mapRef, loading } = useCallMap();
  const { markerList, initMarker, markerFiltering } = useMarker(mapRef, setPlace, filter_condition);
  const { values, changeHandler } = useFormData({
    initialValues: {
      place_name: '',
      youtuber: '',
      place_position: '',
    },
  });
  const fetchData = async (condition) => {
    let res = await Axios('/api/places', 'POST', condition);
    return res.data;
  };

  const filterSubmit = (e) => {
    e.preventDefault();
    fetchData(values).then((res) => {
      markerFiltering(res);
    });
  };

  useEffect(() => {
    return () => {
      data_filter(defaultCondition);
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      <div className='filtering-place'>
        <form className='filtering-form' onSubmit={filterSubmit}>
          <div className='filtering-input'>
            <input type='text' name='place_name' placeholder='가게 이름을 적어주세요' onChange={changeHandler} />
          </div>
          <div className='filtering-select'>
            <SelectBox name='youtuber' text='유튜버' data={gdata.youtuber} changeHandler={changeHandler} />
            <SelectBox name='place_position' text='지역' data={gdata.area} changeHandler={changeHandler} />
          </div>
          <button className='filtering-submit'>
            <i className='fa-solid fa-magnifying-glass'>
              <span>검색</span>
            </i>
          </button>
        </form>
      </div>
      {loading === false ? <Loading /> : <Map />}
    </>
  );
}

export default connect(
  (state) => ({
    filter_condition: {
      place_name: state.places.place_name,
      youtuber: state.places.youtuber,
      place_position: state.places.place_position,
    },
  }),
  (dispatch) => ({
    data_filter: (data) => dispatch(datafilter(data)),
  })
)(NaverMap);

//여기에 리덕스 연결
