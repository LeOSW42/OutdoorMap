// the map
document.querySelector('#btn-map').addEventListener ('click', function () {
  document.querySelector('#map_page').className = 'current skin-dark';
  document.querySelector('[data-position="current"]').className = 'left skin-dark';
});
document.querySelector('#btn-map-back').addEventListener ('click', function () {
  document.querySelector('#map_page').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});
