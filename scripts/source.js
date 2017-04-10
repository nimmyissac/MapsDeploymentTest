
var currentLocationFound = function() {
  fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAbjKXCCuwm4apKOJW0Hmh5EzcGiPt3V5w', {
  	method: 'post'
  })
  .then(function(response) {
    return (response.json());
  })
  .then(function(data) {
    var dataObj = (data.location);
    var location = {
      "lat" : (dataObj.lat),
      "lng" : (dataObj.lng)
    };
    initMap(location);
  })
  .catch(function(err) {
  	console.log("Error", err);
  });
}


function initMap(location) {
  var map = new google.maps.Map(document.getElementById('map'), {
           center: location,
           zoom: 15
    });

    var marker = new google.maps.Marker({
     position: location,
     map: map,
     title: 'Hello World!fkdksjfhkdsjalfjkaljflk'
   });


}

var getMap = function() {
  var address = document.getElementById("address").value;
  address = encodeURI(address);
  var xhr = new XMLHttpRequest();
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyAbjKXCCuwm4apKOJW0Hmh5EzcGiPt3V5w"
  xhr.open("GET", url );
  xhr.onload = function() {
    var response = JSON.parse(xhr.response);
    var lat = response.results[0].geometry.location.lat;
    var long = response.results[0].geometry.location.lng;
    initMap(response.results[0].geometry.location);
  }
  xhr.send();
}
document.addEventListener("keyup", function(event) {
  /*if enter key pressed */
   if(event.keyCode === 13) {
     getMap();
   }
});
