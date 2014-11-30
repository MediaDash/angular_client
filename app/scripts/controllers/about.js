'use strict';

/**
 * @ngdoc function
 * @name newAngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newAngApp
 */
angular.module('newAngApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
