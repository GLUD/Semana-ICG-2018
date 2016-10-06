'use strict';

angular.module('SLUD')
  .factory('Sponsor', ['$resource', function ($resource) {
    return $resource('SLUD/Sponsors/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
