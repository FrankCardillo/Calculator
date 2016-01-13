var app = angular.module('PyramidalCalculator', []);
app.controller('MainCtrl', function($scope, $interval) {

  $scope.screenContents = [];

  $('button').addClass("calcButtons");

  $scope.addToScreen = function(id) {
    $scope.screenContents.push(document.getElementById(id).textContent);
    $scope.display = $scope.screenContents.join('');
  };

  $scope.CE = function() {
    $scope.screenContents.pop();
    $scope.display = $scope.screenContents.join('');
  };

  $scope.AC = function() {
    $scope.screenContents = [];
    $scope.display = $scope.screenContents.join('');
  };
  
  $scope.solver = function() {
    var output = eval($scope.screenContents.join(''));
    $scope.display = output;
  };
  
});