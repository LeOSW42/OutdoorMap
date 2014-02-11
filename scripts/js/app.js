// the map
document.querySelector('#btn-map').addEventListener ('click', function () {
  document.querySelector('#map_page').className = 'current skin-dark';
  document.querySelector('[data-position="current"]').className = 'left skin-dark';
});
document.querySelector('#btn-map-back').addEventListener ('click', function () {
  document.querySelector('#map_page').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});

// the settings
document.querySelector('#btn-settings').addEventListener ('click', function () {
  document.querySelector('#settings_page').className = 'current skin-dark';
  document.querySelector('[data-position="current"]').className = 'left skin-dark';
});
document.querySelector('#btn-settings-back').addEventListener ('click', function () {
  document.querySelector('#settings_page').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});

// the help
document.querySelector('#btn-help').addEventListener ('click', function () {
  document.querySelector('#help_page').className = 'current skin-dark';
  document.querySelector('[data-position="current"]').className = 'left skin-dark';
});
document.querySelector('#btn-help-back').addEventListener ('click', function () {
  document.querySelector('#help_page').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});

// the license
document.querySelector('#btn-license').addEventListener ('click', function () {
  document.querySelector('#license_page').className = 'current skin-dark';
  document.querySelector('[data-position="current"]').className = 'left skin-dark';
});
document.querySelector('#btn-license-back').addEventListener ('click', function () {
  document.querySelector('#license_page').className = 'right skin-dark';
  document.querySelector('[data-position="current"]').className = 'current skin-dark';
});