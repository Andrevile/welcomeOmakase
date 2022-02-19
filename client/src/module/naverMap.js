export const contentString = (data) => {
  //네이버 infoWindow 스타일 문자열 반환.
  const arr = [
    `<div class="iw_inner"style=" padding-top:5px; font-size: 10px; width:200px; height: 100px;  box-sizing:border-box;">
    <div style="padding: 3px 3px;">
    <div style="margin:0 auto;">
    <h3 style="font-size:12px; text-align:center; margin: 0;">${data.place_name}</h3>
    </div>
    <div style="margin: 0 auto;  height:auto; padding: 10px; ">
      <img
        src="${data.place_imgPath}"
        width="100%"
        alt=${data.place_name}
        class="thumb"
        style="padding:0; margin:0;"
      />
    </div>
    <div style="width: 100%; padding:5px;">
    <p style="margin: 0;"> 주소:</p>
    <p style="margin: 0;">${data.place_position}ㅎㅂㄷㅎㄱㄷㅂㅎㅂㄷㅎㄱㅂㅎㅂㄷㅎㄱㅂㄷㅎㄱㅎㄷㅂㄱㅎㅂ</p>
    </div>
    
    </div>
    </div>
  </div>`,
  ];
  return arr;
};
var N_map;
var MarkerArr = new Map();
export const callMap = async (mode, placeData, setPlace) => {
  //케이스 고려사항
  //1. 처음 렌더링 되면 모든 데이터 마커 표시
  //2. 필터링 폼 제출시, 해당 데이터만 마커 표시
  //3. 이미 필터링된 마커 표시 상황에서 다른 필터링폼을 적용할 때 즉각반영
  //4. 언마운트나 초기화 적용시 모든 마커 표시
  try {
    if (mode === 'initialize') {
      let zoomOption = 10;
      if (window.innerWidth < 800) {
        console.log('here');
        zoomOption = 10;
      }
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
      placeData.map((place) => {
        let makeMarker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(place.latitude, place.longitude),
          map: N_map,
          // animation: window.naver.maps.Animation.DROP,
          icon: {
            content: [
              '<div class="cs_mapbridge">',
              `<span class="shd">${place.place_name}</span>`,
              '<div class="map_group _map_group">',
              '<div class="map_marker _marker tvhp tvhp_big">',
              '<i class="fa-solid fa-utensils"></i>',
              '</div>',
              '</div>',

              '</div>',
            ].join(''),
            size: new window.naver.maps.Size(38, 58),
            anchor: new window.naver.maps.Point(19, 58),
          },
        });
        MarkerArr.set(JSON.stringify(place), makeMarker);
        // const infoWindow = new window.naver.maps.InfoWindow({
        //   content: contentString(place)[0],
        //   maxWidth: 500,
        //   backgroundColor: "white",
        //   borderColor: "#B0E0E6",
        //   borderWidth: 1,
        //   disableAnchor: true,
        //   pixelOffset: new window.naver.maps.Point(150, -50),
        // });
        // window.naver.maps.Event.addListener(
        //   makeMarker,
        //   "mouseover",
        //   function (e) {
        //     if (!infoWindow.getMap()) {
        //       infoWindow.open(N_map, makeMarker);
        //     }
        //   }
        // );
        // window.naver.maps.Event.addListener(
        //   makeMarker,
        //   "mouseout",
        //   function (e) {
        //     if (infoWindow.getMap()) {
        //       infoWindow.close();
        //     }
        //   }
        // );
        window.naver.maps.Event.addListener(makeMarker, 'click', function (e) {
          setPlace({ ...place });
        });
      });
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
