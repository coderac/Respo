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
/*************************************************************************************************/

/*************************************************************************************************/

var option1Options = ["Java", "UI", "Mobile"];
var option2Options = [["Core","Servlet","JSP","Spring","struts","Diff. frameworks"],
  ["HTML","CSS","CANVAS","ANGULARJS","JAVASCRIPT","JQUERY"],
  ["ANDROID","IOS","BADA","SYMBIAN","ASHA","BBX"]];

ctrls.controller('postProjectCtrl', function($scope){
/*function categoryCtrl($scope){*/

      $scope.options1 = option1Options;
      $scope.options2 = []; // we'll get these later
      $scope.getOptions2 = function(){
        // just some silly stuff to get the key of what was selected since we are using simple arrays.
        var key = $scope.options1.indexOf($scope.option1);
        // Here you could actually go out and fetch the options for a server.
        var myNewOptions = option2Options[key];
        // Now set the options.
        // If you got the results from a server, this would go in the callback
        $scope.options2 = myNewOptions;
      };
  });




