angular.module('SLUD').controller('HomeController', [
    '$http',
    '$scope',
    'CONFIG',
    function($http, $scope, CONFIG) {
        console.log("Entro");
        var f = [];
        $http.get(CONFIG.API_URL + "/api/charlas").success(function(data) {
            // data.forEach(function(entry, index) {
            // f[index] = entry.Id;
            // });
            console.log(data);
            // $scope.PropietarioIds = f;
        }).error(function(err) {});

    }
]);
