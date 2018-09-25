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
      {url: '#informacion', text: 'Información'},
      {url: '#tematica', text: 'Temática'},
      {url: '#talleres_conferencias', text: 'Talleres y Conferencias'},
      {url: '#comite', text: 'Comite'},
      {url: '#contactenos', text: 'Contáctenos'},
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
  }])
  .controller('Sponsors', ['$http', 'CONFIG', function Sponsors($http, CONFIG){
    $http.get(CONFIG.API_URL + '/api/sponsors/')
      .then(response => {
        console.log(response.data)
        this.lista = response.data
      })
  }]);
})(window.angular);
