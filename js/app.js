import util from '../js/util.js';
import data from '../js/data.js';

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
        .when('/agenda', {
            templateUrl: 'views/agenda.html'
        })
        .when('/comite', {
            templateUrl: 'views/comite.html'
        })
        .when('/contacto', {
            templateUrl: 'views/contacto.html'
        })
        .when('/test', {
            templateUrl: 'views/conferencias_talleres.html'
        })
        .otherwise('/');

    }
  ])
  .controller('Menu', function MenuController(){
    this.lista = [
      // {url: '#tematica', text: 'Temática'},
      {url: '/#!/', text: 'Inicio'},
      {url: '/#!/agenda', text: 'Talleres y Conferencias'},
      {url: '/#!/contacto', text: 'Contáctenos'},
      {url: '/#!/test', text: 'Whats up'}
    ];
  })
  .controller('Agenda', function AgendaController() {
      this.dias = data.agenda
      this.talleres = data.talleres
  }).filter('unsafe', function($sce) {
	    return function(val) {
	    return $sce.trustAsHtml(val);
	    };
	});

})(window.angular);
