'use strict';

/**
 * @ngdoc overview
 * @name protechApp
 * @description
 * # protechApp
 *
 * Main module of the application.
 */
angular
  .module('protechApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/client_pro_view.html',
        controller: 'clientViewTableCtrl'
      })
        .when('/projects',{
            templateUrl: '../views/project_list.html',
            controller: 'ProjectListCtrl'
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/post_project', {
        templateUrl: '../views/post_project.html',
        controller: 'PostProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

