'use strict';

angular.module('SLUD')
  .factory('Speaker', ['$resource', function ($resource) {
    return $resource('SLUD/Speakers/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
