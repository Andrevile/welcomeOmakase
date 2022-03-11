import { useCallback, useEffect, useState } from 'react';
import api from 'utils/axiosmodule';
import { generateMarker } from 'utils/generateMarker';
const useMarker = (naverMap, setPlace, filter_condition) => {
  const [markerList, setMarkerList] = useState({});
  const markerClickHandler = useCallback(
    (place) => () => {
      setPlace({ ...place });
    },
    []
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

  const initMarker = useCallback((data) => {
    let temp = {};

    data.map((place) => {
      const marker = generateMarker(naverMap.current, place);
      window.naver.maps.Event.addListener(marker, 'click', markerClickHandler(place));
      temp[place.place_name] = marker;
    });
    setMarkerList({ ...temp });
  }, []);

  useEffect(() => {
    api.post('/places', filter_condition).then((res) => {
      initMarker(res.data);
    });

    return () => {
      setPlace(null);
    };
  }, []);

  return { markerList, initMarker, markerFiltering };
};

export default useMarker;
