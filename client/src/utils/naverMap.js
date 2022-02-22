var N_map;
var MarkerArr = new Map();

export const test = async () => {
  try {
    let zoomOption = 10;

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.554722, 126.970833),
      zoom: zoomOption,
      scrollWheel: true,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };
    N_map = new window.naver.maps.Map('map', mapOptions);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
export const callMap = async (mode, placeData, setPlace) => {
  try {
    if (mode === 'initialize') {
      let zoomOption = 10;

      const mapOptions = {
        center: new window.naver.maps.LatLng(37.554722, 126.970833),
        zoom: zoomOption,
        scrollWheel: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };
      N_map = new window.naver.maps.Map('map', mapOptions);
      // placeData.map((place) => {
      //   let makeMarker = new window.naver.maps.Marker({
      //     position: new window.naver.maps.LatLng(place.latitude, place.longitude),
      //     map: N_map,
      //     animation: window.naver.maps.Animation.DROP,
      //     // icon: {
      //     //   content: [
      //     //     '<div class="cs_mapbridge">',
      //     //     `<span class="shd">${place.place_name}</span>`,
      //     //     '<div class="map_group _map_group">',
      //     //     '<div class="map_marker _marker tvhp tvhp_big">',
      //     //     '<i class="fa-solid fa-utensils"></i>',
      //     //     '</div>',
      //     //     '</div>',

      //     //     '</div>',
      //     //   ].join(''),
      //     //   size: new window.naver.maps.Size(38, 58),
      //     //   anchor: new window.naver.maps.Point(19, 58),
      //     // },
      //   });
      //   MarkerArr.set(JSON.stringify(place), makeMarker);

      //   window.naver.maps.Event.addListener(makeMarker, 'click', function (e) {
      //     setPlace({ ...place });
      //   });
      // });
    }
    return true;
  } catch (err) {
    console.log('네이버 지도 못불러옴');
    return false;
  }
};

export const Markerfilter = async function (placeData) {
  let filter = new Map();
  placeData.map((item) => {
    filter.set(JSON.stringify(item), N_map);
  });
  MarkerArr.forEach((value, key) => {
    if (filter.get(key) !== undefined) {
      //걸러진 마커 종류에 현재 마커가 존재하면 그리기
      // console.log(MarkerArr.get(key));
      MarkerArr.get(key).setMap(N_map);
    } else {
      // console.log(MarkerArr.get(key));
      MarkerArr.get(key).setMap(null);
    }
  });
};
