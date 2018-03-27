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
    // $http.get(CONFIG.API_URL + '/api/speakers/')
    //   .success(data => {
    //     this.lista = data;
    //   })
  }])
  .controller('Agenda', ['$http', 'CONFIG', function Agenda($http, CONFIG){
    // Consultar las charlas del API
    // $http.get(CONFIG.API_URL + '/api/charlas/')
    //   .success(data => {
    //     this.dias = util.procesarCharlas(data);
    //   });
  }]);
})(window.angular);
