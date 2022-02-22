import { useRef, useEffect, useState } from 'react';
import { mapOptions } from 'static/constants/mapOptions';

const useCallMap = () => {
  const [success, setSuccess] = useState(false);
  const mapRef = useRef(null);

  const callMap = async () => {
    try {
      mapRef.current = new window.naver.maps.Map('map', mapOptions);
      setSuccess(true);
    } catch (err) {
      console.error('네이버 지도', err);
    }
  };
  useEffect(() => {
    callMap();
    return () => {
      mapRef.current = null;
    };
  }, []);

  return { mapRef, success };
};

export default useCallMap;
