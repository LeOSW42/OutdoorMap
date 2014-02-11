var map = L.map('map', {
	center: new L.LatLng(46.42, 2.55),
	zoom: 6
});

L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; OpenStreetMap contributors',
	maxZoom: 18
}).addTo(map);

L.control.locate().addTo(map);