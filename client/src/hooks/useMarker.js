import { useCallback, useEffect, useState } from 'react';
import { Axios } from 'utils/axiosmodule';
import { defaultCondition } from 'static/constants/defaultCondition';
import { generateMarker } from 'utils/generateMarker';
const useMarker = (naverMap, setPlace) => {
  const [markerList, setMarkerList] = useState([]);

  const markerClickHandler = useCallback(
    (place) => () => {
      setPlace({ ...place });
    },
    []
  );
  const initMarker = useCallback((data) => {
    data.map((place) => {
      const marker = generateMarker(naverMap.current, place);
      window.naver.maps.Event.addListener(marker, 'click', markerClickHandler(place));
      setMarkerList([...markerList, marker]);
    });
  }, []);
  useEffect(() => {
    Axios('/api/places', 'POST', defaultCondition).then((res) => {
      initMarker(res.data);
    });
  }, []);

  return markerList;
};

export default useMarker;
