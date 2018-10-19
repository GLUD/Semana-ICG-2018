import util from '../js/util.js';

(function(angular){
  'use strict';

  angular.module('SLUD', [
    'ngRoute'
  ])
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/', {
          templateUrl: 'views/inicio.html'
        })
        .when('/conferencias_talleres', {
            templateUrl: 'views/conferencias_talleres.html'
        })
        .when('/comite', {
            templateUrl: 'views/comite.html'
        })
        .when('/contacto', {
            templateUrl: 'views/contacto.html'
        })
        .otherwise('/');

    }
  ])
  .controller('Menu', function MenuController(){
    this.lista = [
      {url: '#inicio', text: 'Inicio'},
      {url: '/#!/conferencias_talleres', text: 'Talleres y Conferencias'},
      {url: '/#!/contacto', text: 'Contáctenos'},
    ];
  })

})(window.angular);
