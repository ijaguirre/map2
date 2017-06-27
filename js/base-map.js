// Set view of Leaflet map based on screen size
var layer = new L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	apikey: 'efbb614508e045beb3c1002201c66ba2',
	maxZoom: 22
});

if ($(window).width() < 626) {
	var map = new L.Map('map').setView([-35.406654326, -71.664995696],21);

} else {
	var map = new L.Map('map').setView([-35.406654326,	-71.664995696],21);
}
map.addLayer(layer);
