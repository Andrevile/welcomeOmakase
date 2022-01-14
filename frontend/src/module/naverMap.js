export const contentString = (data) => {
  //네이버 infoWindow 스타일 문자열 반환.
  const arr = [
    `<div class="iw_inner"style=" padding:0; font-size: 10px; width:200px; height: 100px;  box-sizing:border-box;">
    <div style="padding: 3px 3px;">
    <div style="margin:0 auto;">
    <h3 style="font-size:12px; text-align:center; margin: 0;">${data.place_name}</h3>
    </div>
    <div style="margin: 0 auto;  height:auto; border:1px solid #B0E0E6; padding: 10px; ">
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

export const callMap = async (mode, placeData, markerList, setMarkerList) => {
  //케이스 고려사항
  //1. 처음 렌더링 되면 모든 데이터 마커 표시
  //2. 필터링 폼 제출시, 해당 데이터만 마커 표시
  //3. 이미 필터링된 마커 표시 상황에서 다른 필터링폼을 적용할 때 즉각반영
  //4. 언마운트나 초기화 적용시 모든 마커 표시
  try {
    let N_map;
    let placeMap = new Map(); //객체와 Map의 다른점은 객체는 객체키를 사용할 수 없지만 Map은 객체키를 사용가능함.

    if (mode === "initialize") {
      //케이스 1번
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.554722, 126.970833),
        zoom: 13,
        scrollWheel: true,
      };
      N_map = new window.naver.maps.Map("map", mapOptions);
      placeData.map((place) => {
        //필터링된 데이터를 Map에 초기화
        placeMap.set(place, N_map);
      });
      markerDrawing(
        mode,
        N_map,
        placeData,
        placeMap,
        markerList,
        setMarkerList
      );
    } else if (mode === "filtering") {
      //케이스 2,3번
      placeData.map((place) => {
        //필터링된 데이터를 Map에 초기화
        placeMap.set(place, N_map);
      });
      N_map = window.naver.maps;
      console.log(N_map);
      markerDrawing(mode, N_map, placeData, markerList, setMarkerList);
    } else if (mode === "allMarker") {
      //케이스 4번
    }
    // console.log(placeMap);
    // markerList[0].makeMarker.marker.setMap(null);
    // console.log(markerList[0].makeMarker.map);
  } catch (err) {}
};

const markerDrawing = async (
  mode,
  N_map,
  placeData,
  placeMap,
  markerList,
  setMarkerList
) => {
  try {
    let temp = [];
    switch (mode) {
      case "initialize": //
        placeData.map((place) => {
          const makeMarker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(
              place.latitude,
              place.longitude
            ),
            map: N_map,
            animation: window.naver.maps.Animation.DROP,
          });
          temp.push({
            //나중에 필터링된 placeData와 marker들과 비교하기 위한 객체 삽입
            place,
            makeMarker,
          });
          setMarkerList(temp);
          const infoWindow = new window.naver.maps.InfoWindow({
            content: contentString(place)[0],
            maxWidth: 500,
            backgroundColor: "white",
            borderColor: "#B0E0E6",
            borderWidth: 1,
            disableAnchor: true,
            pixelOffset: new window.naver.maps.Point(150, -50),
          });
          window.naver.maps.Event.addListener(
            makeMarker,
            "mouseover",
            function (e) {
              if (!infoWindow.getMap()) {
                infoWindow.open(N_map, makeMarker);
              }
            }
          );
          window.naver.maps.Event.addListener(
            makeMarker,
            "mouseout",
            function (e) {
              if (infoWindow.getMap()) {
                infoWindow.close();
              }
            }
          );
        });
        break;
      case "filtering":
        console.log(markerList);
        markerList.map((each) => {
          if (placeMap.get(each.place) === undefined) {
            //지금 마커가 Map에 없으면
            each.marker.setMap(null);
          } else {
            //지금 마커가 Map에 존재는 하는데,
            if (each.makeMarker.marker.map === null) {
              //지금 마커가 지도에 연결 안되있는경우
              each.makeMarker.marker.setMap(N_map);
            }
          }
        });
        break;

      // console.log(markerList[0].marker;

      // case "filtering":
    }
  } catch (err) {
    console.log("makerStatus:", err);
  }
};
