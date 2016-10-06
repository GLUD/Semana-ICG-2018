'use strict';

angular.module('SLUD')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/Charlas', {
        templateUrl: 'views/Charlas/Charlas.html',
        controller: 'CharlasController',
        resolve:{
          resolvedCharlas: ['Charlas', function (Charlas) {
            return Charlas.query();
          }]
        }
      })
    }]);
