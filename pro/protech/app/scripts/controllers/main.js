'use strict';

/**
 * @ngdoc function
 * @name protechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the protechApp
 */
var ctrls = angular.module('protechApp');
  ctrls.controller('clientViewTableCtrl', function ($scope, $http) {
    $scope.url='json/clientEmployeeView.json';
    $http.get($scope.url).success(function(data) {
      $scope.clientEmployeeView = data;
      });
    });

    ctrls.controller('ProjectListCtrl', function($scope){
        $scope.displayLists = [
        /*xyz*/
        ];
    });




/*
var clientViewCtrl = angular.module('clientViewCtrl', []);
    clientViewCtrl.controller('clientViewTableCtrl', function($scope){
    console.log('getting request');
*/
/*      $scope.url='../json/clientEmployeeView.json';
      $http.get($scope.url).success(function(data){}
        $scope.clientEmployeeView = data;
      });*//*

    });
*/
