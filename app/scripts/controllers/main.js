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

    // Term entered by user
    $scope.term = 'mediadash';

    // URLs to fetch content
    var baseURL = 'http://mediadashapi.herokuapp.com/';
    $scope.tweetUrl = baseURL + 'twitter?term=' + $scope.term;
    $scope.instaUrl = baseURL + 'insta?term=' + $scope.term;
    
    // HTTP requests
    $http.get($scope.tweetUrl).success(function(data) {
          console.log(data);
          $scope.tweets = data;
    });
    $http.get($scope.instaUrl).success(function(data) {
          console.log(data);
          $scope.instas = data;
    });


    $scope.parseDate = function(date){
      return Date.parse(date);
    };

  }]);
