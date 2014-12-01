'use strict';

/**
 * @ngdoc function
 * @name newAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngApp
 */
angular.module('newAngApp')
  .controller('MainCtrl', ['$scope', '$location', '$http', '$interval', function ($scope, $location, $http, $interval) {

    // Templates
    $scope.templates = {
      available: ['main', 'instas', 'tweet'],
      active: 'views/main.html',
      activeIndex: 0
    };
    console.log($scope.templates);
    
    // Defaults
    $scope.term = '';
    var baseURL = 'http://mediadashapi.herokuapp.com/';

    // Models
    $scope.tweets = {
      available: [],
      activeIndex: 0,
      active: null,
    }

    $scope.getTweets = function() {
      $http.get($scope.tweetUrl).success(function(data) {
        $scope.tweets.available = data;
        $scope.tweets.activeIndex = 0;
        $scope.tweets.active = $scope.tweets.available[0]
        startCycleThroughTweets();
      });
    };

    $scope.getInstas = function() {
      $http.get($scope.instaUrl).success(function(data) {
        console.log(data);
        $scope.instas = data;
        $scope.changeActiveTemplate(1);
      });
    };

    $scope.submit = function(term) {
      $scope.term = term.replace(/\#/, '');
      console.log($scope.term);
      $scope.tweetUrl = baseURL + 'twitter?term=' + $scope.term;
      $scope.instaUrl = baseURL + 'insta?term=' + $scope.term;
      $scope.getInstas();
      $scope.getTweets();
    };

    $scope.changeActiveTemplate = function(index) {
      $scope.templates.active = 'views/' + $scope.templates.available[index] + '.html';
      $scope.templates.activeIndex = index;
    };

    $scope.previousTemplate = function(){
      if( $scope.templates.activeIndex > 0 ) {
        $scope.changeActiveTemplate( $scope.templates.activeIndex - 1) ;
      }
    };

    $scope.nextTemplate = function(){
      if( $scope.templates.activeIndex < $scope.templates.available.length - 1 ) {
        $scope.changeActiveTemplate( $scope.templates.activeIndex + 1 ) ;
      }
    };

    $scope.parseDate = function(date){
      return Date.parse(date);
    };

    var startCycleThroughTweets = function() {
      $interval(function(){
      if( $scope.tweets.activeIndex < $scope.tweets.available.length - 1 ) {
        $scope.tweets.activeIndex = $scope.tweets.activeIndex + 1;
        $scope.tweets.active = $scope.tweets.available[$scope.tweets.activeIndex];
        }
      },  1000);
    }
  }]);
