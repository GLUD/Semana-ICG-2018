(function(angular){
  'use strict';
   
  angular.module('SLUD', [])
  .constant('CONFIG', {
      'APP_NAME' : 'SLUD fontend',
      'APP_VERSION' : '0.1.0',
      'GOOGLE_ANALYTICS_ID' : '',
      'BASE_URL' : '',
//      'API_URL' : 'https://slud.pythonanywhere.com',
      'API_URL' : 'https://sludapi.glud.org',
      'SYSTEM_LANGUAGE' : 'S'
  })
  .controller('Menu', function MenuController(){
    this.lista = [
      {url: '#expositores', text: 'Expositores'},
      {url: '#agenda', text: 'Agenda'},
      {url: '#ubicacion', text: 'Ubicación'},
      {url: '#patrocinadores', text: 'Patrocinadores'},
      {url: 'https://goo.gl/forms/wmGOuYSPulXCCXGJ2', text: 'Hackathon'},
      {url: 'https://docs.google.com/forms/d/e/1FAIpQLScTOiqY2FZ1bt1fa6WPL9JFnjKo28XG_xVwGUTPg2kwQlUyWA/viewform', text: 'Torneo FoFiX'}
    ];
  })
  .controller('Expositores', ['$http' , 'CONFIG', function Expositores($http, CONFIG){
    // Obtener los expositores del API
    $http.get(CONFIG.API_URL + '/api/speakers/')
      .success(data => {
        this.lista = data;
      })
  }])
  .controller('Agenda', ['$http', 'CONFIG', function Agenda($http, CONFIG){
    // Consultar las charlas del API
    $http.get(CONFIG.API_URL + '/api/charlas/')
      .success(data => {
        this.dias = util.procesarCharlas(data);
      });
  }]);
})(window.angular);
