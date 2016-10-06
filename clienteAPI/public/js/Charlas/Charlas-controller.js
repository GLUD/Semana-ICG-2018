'use strict';

angular.module('SLUD')
  .controller('CharlasController', ['$scope', '$uibModal', 'resolvedCharlas', 'Charlas',
    function ($scope, $modal, resolvedCharlas, Charlas) {

      $scope.Charlas = resolvedCharlas;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.Charlas = Charlas.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Charlas.delete({id: id},
          function () {
            $scope.Charlas = Charlas.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Charlas.update({id: id}, $scope.Charlas,
            function () {
              $scope.Charlas = Charlas.query();
              $scope.clear();
            });
        } else {
          Charlas.save($scope.Charlas,
            function () {
              $scope.Charlas = Charlas.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.Charlas = {

          "titulo": "",

          "descripcion": "",

          "speakers": "",

          "fecha": "",

          "hora": "",

          "id": ""
        };
      };

      $scope.open = function (id) {
        var CharlasSave = $modal.open({
          templateUrl: 'Charlas-save.html',
          controller: 'CharlasSaveController',
          resolve: {
            Charlas: function () {
              return $scope.Charlas;
            }
          }
        });

        CharlasSave.result.then(function (entity) {
          $scope.Charlas = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('CharlasSaveController', ['$scope', '$modalInstance', 'Charlas',
    function ($scope, $modalInstance, Charlas) {
      $scope.Charlas = Charlas;



      $scope.ok = function () {
        $modalInstance.close($scope.Charlas);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
