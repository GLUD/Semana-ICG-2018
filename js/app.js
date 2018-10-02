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
        .when('/informacion', {
          templateUrl: 'views/informacion.html'
        })
        .otherwise('/');

    }
  ])
  .controller('Menu', function MenuController(){
    this.lista = [
      {url: '/#!/informacion', text: 'Información'},
      {url: '#tematica', text: 'Temática'},
      {url: '#talleres_conferencias', text: 'Talleres y Conferencias'},
      {url: '#comite', text: 'Comite'},
      {url: '#contactenos', text: 'Contáctenos'},
    ];
  })

})(window.angular);
