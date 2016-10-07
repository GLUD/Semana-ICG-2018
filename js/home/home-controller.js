angular.module('SLUD')
  .controller('HomeController', ['$http','$scope', function ($http,$scope) {
    console.log("Entro");
    var f = [];
    $http.get("http://slud.pythonanywhere.com/api/charlas")
      .success(function(data) {
        // data.forEach(function(entry, index) {
          // f[index] = entry.Id;
        // });
        console.log(data);
        // $scope.PropietarioIds = f;
      })
      .error(function(err) {});

  }]);
