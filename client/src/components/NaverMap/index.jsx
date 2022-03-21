import React, { useEffect } from 'react';
import api from 'utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { defaultCondition } from 'static/constants/defaultCondition';
import { gdata } from 'static/constants/gdata';
import useFormData from 'hooks/useFormData';
import SelectBox from './SelectBox';
import useCallMap from 'hooks/useCallMap';
import Loading from 'components/Common/Loading';
import Map from './Map';
import useMarker from 'hooks/useMarker';
import placeSlice from 'redux/reducers/placeSlice';

function NaverMap({ setPlace }) {
  const filter_condition = useSelector((state) => state.place);

  const dispatch = useDispatch();
  const { mapRef, loading } = useCallMap();
  const { markerFiltering } = useMarker(mapRef, setPlace, filter_condition);
  const { values, changeHandler } = useFormData({
    initialValues: {
      place_name: '',
      youtuber: '',
      place_position: '',
    },
  });
  const fetchData = async (condition) => {
    let res = await api.post('/place', condition);
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
      dispatch(placeSlice.actions.datafilter(defaultCondition));
      mapRef.current = null;
    };
  }, [dispatch, mapRef]);

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

export default NaverMap;

//여기에 리덕스 연결
