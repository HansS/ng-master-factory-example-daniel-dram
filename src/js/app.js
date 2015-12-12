
var angular = require('angular');

module.exports = angular.module('App', [])

.controller('MainCtrl',  MainCtrl)
.controller('SibCtrl',   SibCtrl)

.directive('inputBox',    require('./directives/input-box.js'))
.directive('display',     require('./directives/display.js'))


.factory('ExampleChildOne', require('./factories/children/example-child-one.js'))
.factory('ExampleChildTwo', require('./factories/children/example-child-two.js'))

.factory('MasterFactory', require('./factories/master-factory.js'))

MainCtrl.$inject = ['$scope', 'MasterFactory'];
function MainCtrl ($scope, MasterFactory){
  $scope.models = MasterFactory;
  $scope.models.init();
  console.log('Main Controller Connected');

}

SibCtrl.$inject = ['$scope', 'MasterFactory'];
function SibCtrl ($scope, MasterFactory){
  $scope.models = MasterFactory;
  console.log('Sibiling Controller Connected');
}
