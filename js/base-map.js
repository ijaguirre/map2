// Set view of Leaflet map based on screen size
var layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 28,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

if ($(window).width() < 626) {
	var map = new L.Map('map').setView([-35.406654326, -71.664995696],21);

} else {
	var map = new L.Map('map').setView([-35.406654326,	-71.664995696],21);
}
map.addLayer(layer);
