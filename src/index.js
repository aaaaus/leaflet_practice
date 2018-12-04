
document.addEventListener('DOMContentLoaded', () => {

  //initialize map, set coordinates and zoom
  var mymap = L.map('mapid').setView([40.743, -74], 13);

  //add tile layer to map
  // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //     }).addTo(mymap);

  //add tile layer to map (grayscale)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    	maxZoom: 16
  }).addTo(mymap);


  //flatiron school marker
  var flatiron = L.marker([40.7052529, -74.0140703]).addTo(mymap);

  //stay puft marshmallow man marker
  var stayPuft = L.marker([40.767382, -73.981713]).addTo(mymap);

  //500m circle around flatiron school
  var touristAvoidanceZone = L.circle([40.757, -73.986], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500 //in meters
  }).addTo(mymap);

  //popups (.openPopup has popup open by default)

  flatiron.bindPopup("<b>Hello</b> from Flatiron School!").openPopup();

  touristAvoidanceZone.bindPopup("Tourist Avoidance Zone")

  stayPuft.bindPopup(`<img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Stay-puft-marshmallow-man.jpg/320px-Stay-puft-marshmallow-man.jpg" /> I tried to think of the most harmless thing. Something I loved from my childhood, something that could never, ever possibly destroy us: Mr. Stay-Puft`)

  //listener and callback for map click; lat and long can be retreived from this function

  function onMapClick(event) {
    console.log("You clicked the map at " + event.latlng);
    //event.latlng.lat = latitude as integer
    //event.latlng.lng = longitude as integer
  }

  mymap.on('click', onMapClick);

})
