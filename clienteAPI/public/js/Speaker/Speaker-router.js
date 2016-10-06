'use strict';

angular.module('SLUD')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/Speakers', {
        templateUrl: 'views/Speaker/Speakers.html',
        controller: 'SpeakerController',
        resolve:{
          resolvedSpeaker: ['Speaker', function (Speaker) {
            return Speaker.query();
          }]
        }
      })
    }]);
