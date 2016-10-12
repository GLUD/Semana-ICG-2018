(function(angular){
  'use strict';

  angular.module('SLUD', [])
  .controller('Menu', function MenuController(){
    this.lista = [
      {url: '#expositores', text: 'Expositores'},
      {url: '#agenda', text: 'Agenda'},
      {url: '#ubicacion', text: 'Ubicación'},
      {url: '#patrocinadores', text: 'Patrocinadores'},
    ];
  })
  .controller('Expositores', ['$http' , function Expositores($http){
    // Obtener los expositores del API
    // $http.get('https://slud.pythonanywhere.com/api/speakers/')
    //   .success(data => {
    //     this.lista = data;
    //   })

    // Expositores de prueba
    this.lista = [
      {
        'foto': 'http://www.oalaska.com/wp-content/themes/pointfinder/images/empty_avatar.jpg',
        'nombre': 'Prueba 1',
        'trabajo': 'Grupo GNU/Linux'
      },
      {
        'foto': 'http://www.oalaska.com/wp-content/themes/pointfinder/images/empty_avatar.jpg',
        'nombre': 'Prueba 2',
        'trabajo': 'Grupo GNU/Linux'
      }
    ];
  }])
  .controller('Agenda', ['$http', function Agenda($http){
    // Consultar las charlas del API
    $http.get('https://slud.pythonanywhere.com/api/charlas/')
      .success(data => {
        this.dias = util.procesarCharlas(data);
      });
  }]);
})(window.angular);
