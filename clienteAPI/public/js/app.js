// Declare app level module which depends on filters, and services
angular.module('SLUD', ['ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'})
      .otherwise({redirectTo: '/'});
  }]);