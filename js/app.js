// Declare app level module which depends on filters, and services
angular.module('SLUD', ['ngResource', 'ngRoute' ])

.config(['$routeProvider', function ($routeProvider) {
  console.log("Entro");
  $routeProvider
    .when('/', {
      templateUrl: 'views/home/home.html',
      controller: 'HomeController'})
    .otherwise({redirectTo: '/'});
    }]);
