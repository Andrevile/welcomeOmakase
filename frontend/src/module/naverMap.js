export const contentString = (data) => {
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

export const callMap = async (placeData) => {
  console.log(placeData);
  let map = null;
  const initMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.554722, 126.970833),
      zoom: 13,
    };
    const map = new window.naver.maps.Map("map", mapOptions);

    placeData.map((place) => {
      const makeMarker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(place.latitude, place.longitude),
        map: map,
        animation: window.naver.maps.Animation.DROP,
      });
      const infoWindow = new window.naver.maps.InfoWindow({
        content: contentString(place)[0],
        maxWidth: 500,
        backgroundColor: "white",
        borderColor: "#B0E0E6",
        borderWidth: 1,
        disableAnchor: true,
        // anchorSize: new window.naver.maps.Size(10, 20),
        // anchorSkew: false,
        // anchorColor: "red",
        // anchor: 3,
        pixelOffset: new window.naver.maps.Point(150, -50),
      });
      window.naver.maps.Event.addListener(
        makeMarker,
        "mouseover",
        function (e) {
          if (!infoWindow.getMap()) {
            infoWindow.open(map, makeMarker);
          }
        }
      );
      window.naver.maps.Event.addListener(makeMarker, "mouseout", function (e) {
        if (infoWindow.getMap()) {
          infoWindow.close();
        }
      });
    });
  };
  initMap();
};
