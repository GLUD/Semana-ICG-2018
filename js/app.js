(function(angular){
  'use strict';

  angular.module('SLUD', [])
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
  .controller('Expositores', ['$http' , function Expositores($http){
    // Obtener los expositores del API
    $http.get('https://slud.pythonanywhere.com/api/speakers/')
      .success(data => {
        this.lista = data;
      })
  }])
  .controller('Agenda', ['$http', function Agenda($http){
    // Consultar las charlas del API
    $http.get('https://slud.pythonanywhere.com/api/charlas/')
      .success(data => {
        this.dias = util.procesarCharlas(data);
      });
  }]);
})(window.angular);
