import React, { useEffect, useRef, useState } from 'react';
import { callMap, Markerfilter, test } from 'utils/naverMap';
import { Axios } from 'utils/axiosmodule';
import { connect } from 'react-redux';
import { datafilter } from 'redux/actions/filtering';

import { gdata } from 'static/constants/gdata';
import useFormData from 'hooks/useFormData';
import SelectBox from './SelectBox';
import useCallMap from 'hooks/useCallMap';
import Loading from 'components/Common/Loading';
import Map from './Map';
import useMarker from 'hooks/useMarker';

function NaverMap({ setPlace, data_filter, filter_condition }) {
  const { mapRef, loading } = useCallMap();
  const markerList = useMarker(mapRef, setPlace);
  const { values, changeHandler } = useFormData({
    initialValues: {
      place_name: '',
      youtuber: '',
      place_position: '',
    },
  });
  const fetchData = async (condition) => {
    let res = await Axios('/api/places', 'POST', condition);
    return res;
  };

  const filterSubmit = async (e) => {
    e.preventDefault();
    data_filter(values);
    let res = await Axios('/api/places', 'POST', values);
    res = await res.data;
    Markerfilter(res);
  };
  useEffect(() => {}, []);

  // useEffect(() => {
  //   let zoomOption = 10;

  //   const mapOptions = {
  //     center: new window.naver.maps.LatLng(37.554722, 126.970833),
  //     zoom: zoomOption,
  //     scrollWheel: true,
  //     zoomControl: true,
  //     zoomControlOptions: {
  //       position: window.naver.maps.Position.TOP_RIGHT,
  //     },
  //   };
  //   new window.naver.maps.Map('map', mapOptions);
  // }, []);
  // useEffect(() => {
  //   loadingState(
  //     fetchData(filter_condition_form).then((res) => {
  //       let loading = callMap('initialize', res.data, setPlace);
  //       return loading;
  //     })
  //   );
  //   let T;
  //   (async function (filter_condition) {
  //     T = setTimeout(async () => {
  //       let res = await Axios('/api/places', 'POST', filter_condition);
  //       res = await res.data;
  //       Markerfilter(res);
  //     }, 50);
  //   })(filter_condition);

  //   return () => {
  //     data_filter({
  //       place_name: '',
  //       youtuber: '',
  //       place_position: '',
  //     });
  //     clearTimeout(T);
  //   };
  // }, []);

  return (
    <>
      <div className='filtering-place'>
        <form className='filtering-form' onSubmit={filterSubmit}>
          <div className='filtering-input'>
            <input type='text' name='place_name' placeholder='가게 이름을 적어주세요' onChange={changeHandler} />
          </div>
          <div className='filtering-select'>
            <SelectBox name='yotuber' text='유튜버' data={gdata.youtuber} changeHandler={changeHandler} />
            <SelectBox name='place_position' text='지역' data={gdata.area} changeHandler={changeHandler} />
          </div>
          <button className='filtering-submit'>
            <i className='fa-solid fa-magnifying-glass'>
              <span>검색</span>
            </i>
          </button>
        </form>
      </div>
      {/* <Map /> */}
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
