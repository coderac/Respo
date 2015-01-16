'use strict';

/**
 * @ngdoc function
 * @name protechApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the protechApp
 */
angular.module('protechApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
