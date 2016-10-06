'use strict';

angular.module('SLUD')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/Sponsors', {
        templateUrl: 'views/Sponsor/Sponsors.html',
        controller: 'SponsorController',
        resolve:{
          resolvedSponsor: ['Sponsor', function (Sponsor) {
            return Sponsor.query();
          }]
        }
      })
    }]);
