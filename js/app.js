import util from '../js/util.js';

(function(angular){
  'use strict';

  angular.module('SLUD', [])
  .constant('CONFIG', {
      'APP_NAME' : 'SLUD fontend',
      'APP_VERSION' : '0.1.0',
      'BASE_URL' : '',
      'API_URL' : 'https://sludapi.glud.org',
      'SYSTEM_LANGUAGE' : 'S'
  })
  .controller('Menu', function MenuController(){
    this.lista = [
      {url: '#inicio', text: 'Inicio'},
      {url: '#expositores', text: 'Expositores'},
      {url: '#agenda', text: 'Agenda'},
      {url: '#ubicacion', text: 'Ubicación'},
      {url: '#patrocinadores', text: 'Patrocinadores'},
    ];
  })
  .controller('Expositores', ['$http' , 'CONFIG', function Expositores($http, CONFIG){
    // Obtener los expositores del API
    $http.get(CONFIG.API_URL + '/api/speakers/')
      .then(response => {
        this.lista = response.data
      })
  }])
  .controller('Agenda', ['$http', 'CONFIG', function Agenda($http, CONFIG){
    // Consultar las charlas del API
    $http.get(CONFIG.API_URL + '/api/charlas/')
      .then(response => {
        this.dias = util.procesarCharlas(response.data)
      })
  }]);
})(window.angular);
