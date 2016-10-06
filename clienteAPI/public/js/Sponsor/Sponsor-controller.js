'use strict';

angular.module('SLUD')
  .controller('SponsorController', ['$scope', '$modal', 'resolvedSponsor', 'Sponsor',
    function ($scope, $modal, resolvedSponsor, Sponsor) {

      $scope.Sponsors = resolvedSponsor;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.Sponsor = Sponsor.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Sponsor.delete({id: id},
          function () {
            $scope.Sponsors = Sponsor.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Sponsor.update({id: id}, $scope.Sponsor,
            function () {
              $scope.Sponsors = Sponsor.query();
              $scope.clear();
            });
        } else {
          Sponsor.save($scope.Sponsor,
            function () {
              $scope.Sponsors = Sponsor.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.Sponsor = {
          
          "logo": "",
          
          "nombre": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var SponsorSave = $modal.open({
          templateUrl: 'Sponsor-save.html',
          controller: 'SponsorSaveController',
          resolve: {
            Sponsor: function () {
              return $scope.Sponsor;
            }
          }
        });

        SponsorSave.result.then(function (entity) {
          $scope.Sponsor = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('SponsorSaveController', ['$scope', '$modalInstance', 'Sponsor',
    function ($scope, $modalInstance, Sponsor) {
      $scope.Sponsor = Sponsor;

      

      $scope.ok = function () {
        $modalInstance.close($scope.Sponsor);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
