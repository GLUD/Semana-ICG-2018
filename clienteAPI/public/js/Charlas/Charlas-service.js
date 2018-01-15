'use strict';

angular.module('SLUD')
  .factory('Charlas', ['$resource', 'CONFIG', function ($resource, CONFIG) {
    return $resource(CONFIG.API_URL + /api/charlas/:id", {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
