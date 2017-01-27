// TODO: Create a map variable
     // TODO: Complete the following function to initialize the map
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.3961205, lng: -65.9993829},
        zoom: 13
       });
       var alpha = {lat: 18.3961205, lng: -65.9993829};
       var defaultIcon = makeMarkerIcon("f4511e");
       var marker =  new google.maps.Marker({
        position: alpha,
        map: map,
        title: "Alpha Legal Group",
        animation: google.maps.Animation.DROP,
        icon: defaultIcon
       });
     }
      // This function takes in a COLOR, and then creates a new marker
      // icon of that color. The icon will be 21 px wide by 34 high, have an origin
      // of 0, 0 and be anchored at 10, 34).

      function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor + '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21, 34));

        return markerImage;
      }
    
