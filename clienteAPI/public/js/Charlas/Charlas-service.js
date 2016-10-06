'use strict';

angular.module('SLUD')
  .factory('Charlas', ['$resource', function ($resource) {
    return $resource("http://slud.pythonanywhere.com/api/charlas/:id", {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
