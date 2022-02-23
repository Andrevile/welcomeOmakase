export const generateMarker = (naverMap, data) => {
  let marker = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(data.latitude, data.longitude),
    map: naverMap,
    // animation: window.naver.maps.Animation.DROP,
    icon: {
      content: [
        '<div class="cs_mapbridge">',
        `<span class="shd">${data.place_name}</span>`,
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
  return marker;
};
