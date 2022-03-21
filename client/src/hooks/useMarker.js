import { useCallback, useEffect, useState } from 'react';
import { abortApi } from 'utils/api';
import axios from 'axios';
import { generateMarker } from 'utils/generateMarker';
const useMarker = (naverMap, setPlace, filter_condition) => {
  const [markerList, setMarkerList] = useState({});
  const markerClickHandler = useCallback(
    (place) => () => {
      setPlace({ ...place });
    },
    [setPlace]
  );

  const markerFiltering = (data) => {
    let temp = {};
    for (let marker in markerList) {
      markerList[marker].setMap(null);
    }
    data.forEach((place) => {
      if (place.place_name in markerList) {
        markerList[place.place_name].setMap(naverMap.current);
      } else {
        const marker = generateMarker(naverMap.current, place);
        window.naver.maps.Event.addListener(marker, 'click', markerClickHandler(place));
        temp[place.place_name] = marker;
      }
    });
    setMarkerList({ ...markerList, ...temp });
  };

  const initMarker = useCallback(
    (data) => {
      let temp = {};

      data.map((place) => {
        const marker = generateMarker(naverMap.current, place);
        window.naver.maps.Event.addListener(marker, 'click', markerClickHandler(place));
        temp[place.place_name] = marker;
      });
      setMarkerList({ ...temp });
    },
    [markerClickHandler, naverMap]
  );

  useEffect(() => {
    let controller = new AbortController();

    const abortAPI = new abortApi(controller);
    abortAPI
      .post('/place', filter_condition, { withCredentials: true, signal: controller.signal })
      .then((res) => {
        initMarker(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.warn('요청 취소');
        }
      });

    return () => controller?.abort();
  }, [filter_condition, initMarker]);

  return { markerList, initMarker, markerFiltering };
};

export default useMarker;
