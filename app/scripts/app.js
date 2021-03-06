'use strict';

/**
 * @ngdoc overview
 * @name newAngApp
 * @description
 * # newAngApp
 *
 * Main module of the application.
 */
angular
  .module('newAngApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mySocket'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
