import React, { useEffect, useState, useRef } from 'react';
import { callMap, Markerfilter } from 'utils/naverMap';
import { Axios } from 'utils/axiosmodule';
import { connect } from 'react-redux';
import { datafilter } from 'redux/actions/filtering';
import { filter_condition_form } from 'static/constants/filteringConditionForm';
import { gdata } from 'static/constants/gdata';
import useFormData from 'hooks/useFormData';
const NaverMap = ({ setPlace, data_filter, filter_condition }) => {
  const [loading, loadingState] = useState(false);
  const { values, changeHandler } = useFormData({
    initialValues: {
      place_name: '',
      youtuber: '',
      place_position: '',
    },
  });

  async function fetchData(condition) {
    let res = await Axios('/api/places', 'POST', condition);
    return res;
  }
  const filterSubmit = async (e) => {
    e.preventDefault();
    data_filter(values);
    let res = await Axios('/api/places', 'POST', values);
    res = await res.data;
    Markerfilter(res);
  };

  useEffect(() => {
    loadingState(
      fetchData(filter_condition_form).then((res) => {
        let loading = callMap('initialize', res.data, setPlace);
        return loading;
      })
    );

    return () => {
      data_filter({
        place_name: '',
        youtuber: '',
        place_position: '',
      });
    };
  }, []);

  useEffect(() => {
    let T;
    (async function (filter_condition) {
      T = setTimeout(async () => {
        let res = await Axios('/api/places', 'POST', filter_condition);
        res = await res.data;
        Markerfilter(res);
      }, 50);
    })(filter_condition);

    return () => {
      clearTimeout(T);
    };
  }, []);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      <div className='filtering-place'>
        <form className='filtering-form' onSubmit={filterSubmit}>
          <div className='filtering-input'>
            <input type='text' name='place_name' placeholder='가게 이름을 적어주세요' onChange={changeHandler}></input>
          </div>
          <div className='filtering-select'>
            <select name='youtuber' onChange={changeHandler}>
              <option value=''>유튜버</option>
              {gdata.youtuber.map((person, idx) => {
                return (
                  <option key={idx} value={person}>
                    {person}
                  </option>
                );
              })}
            </select>
            <select name='place_position' onChange={changeHandler}>
              <option value=''>지역</option>
              {gdata.area.map((each_area, idx) => {
                return (
                  <option key={idx} value={each_area}>
                    {each_area}
                  </option>
                );
              })}
            </select>
          </div>
          <button className='filtering-submit'>
            <i className='fa-solid fa-magnifying-glass'>
              <span>검색</span>
            </i>
          </button>
        </form>
      </div>
      {loading === false ? (
        <div className='loading-modal'>
          <div className='loading'></div>
        </div>
      ) : (
        <div id='map' style={{ width: '100%' }}></div>
      )}
    </>
  );
};

// export default NaverMap;
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
