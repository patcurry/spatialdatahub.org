L.MochaTest = {
    compute: function () { return 2; }
}

L.map('mapid').setView([0, 0], 2);


var myMap = L.map('mapid').setView([0, 8.8460], 2);
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

// This is the default layer for the map. I don't really like the way it looks with the
// ZMT colors. It clashes. So this will probably change. Other maps will be provided
// for users to choose.

L.tileLayer.provider('OpenStreetMap.Mapnik', {
  minZoom: 0,
  maxZoom: 20,
  maxNativeZoom: 18,  
  attribution: osmAttrib
}).addTo(myMap);

////////////////////////////////////////////////////////////////////////////////////// 
// Allow different background maps to be selected by saving them as variables, and
// creating a selector function.
////////////////////////////////////////////////////////////////////////////////////// 

var openStreetMapMapnik = L.tileLayer.provider('OpenStreetMap.Mapnik'),
    mapQuestOpenAerial = L.tileLayer.provider('MapQuestOpen.Aerial'),
    openTopoMap = L.tileLayer.provider('OpenTopoMap'),
    stamenWaterColor = L.tileLayer.provider('Stamen.Watercolor'),
    thunderForestSpinalMap = L.tileLayer.provider('Thunderforest.SpinalMap'),
    thunderForestTransportDark = L.tileLayer.provider('Thunderforest.TransportDark'),
    nasaNight = L.tileLayer.provider('NASAGIBS.ViirsEarthAtNight2012');

var baseLayers = {
  "Street Map": openStreetMapMapnik,
  "Aerial": mapQuestOpenAerial,
  "Topo": openTopoMap,
  "Water Color": stamenWaterColor,
  "Spinal Map": thunderForestSpinalMap,
  "Dark Map": thunderForestTransportDark,
  "NASA Night": nasaNight
};

L.control.layers(baseLayers).addTo(myMap);

////////////////////////////////////////////////////////////////////////////////////// 

// I still may have a bit of trouble with these functions and loading many layers

// password protected
function getJsonFromLocal(data) {
    L.geoJson(data).addTo(myMap);
}

// not password protected
function getJsonFromUrl(data) {
    omnivore.geojson(data).addTo(myMap);
}

// not password protected
function getKMLFromUrl(data) {
    omnivore.kml(data).addTo(myMap);
}

////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////// 


var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(e.latlng.toString())
    .openOn(myMap);
}

myMap.on('click', onMapClick);

// This takes it too far and actually removes the map background as well.
function clearAllLayers() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
  });
}
