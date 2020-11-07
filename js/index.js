var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 72, lng: -58},
    mapTypeId: 'hybrid',
    zoom: 4

    });
    var markerX = new google.maps.Marker({
      position: new google.maps.LatLng(76.533315, -68.699899),
      map: map,
      title: "Thule Air Base",
      label: { color: '#ffffff', fontWeight: 'bold', fontSize: '14px', text: '1' },
    });
    var markerX = new google.maps.Marker({
      position: new google.maps.LatLng(77.469487, -69.229231),
      map: map,
      title: "Qaanaaq",
      label: { color: '#ffffff', fontWeight: 'bold', fontSize: '14px', text: '2' },
    });
    var markerX = new google.maps.Marker({
      position: new google.maps.LatLng(75.909660, -66.451543),
      map: map,
      title: "Cape York",
      label: { color: '#ffffff', fontWeight: 'bold', fontSize: '14px', text: '3' },
    });

    google.maps.event.addListener(markerX, "click", function() {
      map.panTo(this.getPosition());
      map.setZoom(13);


});

}
