'use strict';

/**
 * @ngdoc function
 * @name newAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngApp
 */
angular.module('newAngApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.term = "dbc";
    $scope.tweet_url = 'http://mediadashapi.herokuapp.com/twitter?term=' + $scope.term;
    $http.get($scope.tweet_url).success(function(data) {
          console.log(data);
          $scope.tweets = data;
        });

    $scope.parseDate = function(date){
      return Date.parse(date);
    }
  }]);
