'use strict';

angular.module('SLUD')
  .controller('SpeakerController', ['$scope', '$modal', 'resolvedSpeaker', 'Speaker',
    function ($scope, $modal, resolvedSpeaker, Speaker) {

      $scope.Speakers = resolvedSpeaker;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.Speaker = Speaker.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Speaker.delete({id: id},
          function () {
            $scope.Speakers = Speaker.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Speaker.update({id: id}, $scope.Speaker,
            function () {
              $scope.Speakers = Speaker.query();
              $scope.clear();
            });
        } else {
          Speaker.save($scope.Speaker,
            function () {
              $scope.Speakers = Speaker.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.Speaker = {
          
          "nombre": "",
          
          "trabajo": "",
          
          "foto": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var SpeakerSave = $modal.open({
          templateUrl: 'Speaker-save.html',
          controller: 'SpeakerSaveController',
          resolve: {
            Speaker: function () {
              return $scope.Speaker;
            }
          }
        });

        SpeakerSave.result.then(function (entity) {
          $scope.Speaker = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('SpeakerSaveController', ['$scope', '$modalInstance', 'Speaker',
    function ($scope, $modalInstance, Speaker) {
      $scope.Speaker = Speaker;

      

      $scope.ok = function () {
        $modalInstance.close($scope.Speaker);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
