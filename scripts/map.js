var parisLatLng = [48.8566, 2.3522];

var postcardIcon = L.icon({
    iconUrl: 'assets/postcard_icon.png',
    iconSize: [60, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

var map = L.map('map').setView(parisLatLng, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker(parisLatLng, { icon: postcardIcon }).addTo(map);

marker.bindPopup('Paris Centre').openPopup();