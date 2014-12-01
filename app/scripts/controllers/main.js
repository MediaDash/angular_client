'use strict';

/**
 * @ngdoc function
 * @name newAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngApp
 */
angular.module('newAngApp')
  .controller('MainCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    // Views
    $scope.views = ['main', 'instas','twitter'];
    $scope.activeView = $scope.views[0];

    // Term entered by user
    $scope.term = '';

    // URLs to fetch content
    var baseURL = 'http://mediadashapi.herokuapp.com/';
    $scope.tweetUrl = baseURL + 'twitter?term=' + $scope.term;
    $scope.instaUrl = baseURL + 'insta?term=' + $scope.term;
    
    // HTTP requests
    $http.get($scope.tweetUrl).success(function(data) {
      console.log(data);
      $scope.tweet = data[0];
      $scope.tweets = data;
    });
    $http.get($scope.instaUrl).success(function(data) {
      console.log(data);
      $scope.instas = data;
    });

    $scope.getTweets = function() {
      $http.get($scope.tweetUrl).success(function(data) {
            console.log(data);
            $scope.tweets = data;
      });
    };

    $scope.getInstas = function() {
       $http.get($scope.instaUrl).success(function(data) {
             console.log(data);
             $scope.instas = data;
       });
    };

    $scope.submit = function() {
      $scope.term = $scope.term.replace(/\#/, '');
      $scope.getInstas();
      $scope.getTweets();
      $scope.changeViews(1);
    };

    $scope.changeViews = function(index) {
      $scope.activeView = $scope.views[index];
      $location.path($scope.activeView);
    };

    $scope.parseDate = function(date){
      return Date.parse(date);
    };

  }]);
