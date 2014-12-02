'use strict';

/**
 * @ngdoc function
 * @name newAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngApp
 */
angular.module('newAngApp')
<<<<<<< HEAD
  .controller('MainCtrl', ['$scope', '$location', '$http', '$interval', function ($scope, $location, $http, $interval) {
=======
  .controller('MainCtrl', ['$scope', '$location', '$http', 'socket', function ($scope, $location, $http, socket) {

    console.log($scope);
    console.log(socket);
>>>>>>> socket integration 95% complete

    // Templates
    $scope.templates = {
      available: ['main', 'instas', 'tweet', 'tweet_socket'],
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
    };

    $scope.getTweets = function() {
      $http.get($scope.tweetUrl).success(function(data) {
<<<<<<< HEAD
        $scope.tweets.available = data;
        $scope.tweets.activeIndex = 0;
        $scope.tweets.active = $scope.tweets.available[0];
        startCycleThroughTweets();
=======
        console.log(data);
        $scope.tweets = data;
        console.log($scope.haha);
        $scope.tweet = data[0];
>>>>>>> socket integration 95% complete
      });
    };

    $scope.streamTweets = function() {
      console.log('tweeted!');
      $http.get($scope.streamTweetUrl).success(function(data){
        console.log(data);
      });
    };

    $scope.incomingTweets = function() {
      socket.on('tweet', function(data){
          $scope.streamedTweet = data;
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
      $scope.streamTweetUrl = 'http://localhost:9393/twitter_stream?term=' + $scope.term;
      $scope.getInstas();
      $scope.getTweets();
<<<<<<< HEAD
=======
      $scope.streamTweets();
      $scope.incomingTweets();
      $scope.changeActiveTemplate(1);
>>>>>>> socket integration 95% complete
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
        } else {
         $scope.tweets.activeIndex = 0;
         $scope.tweets.active = $scope.tweets.available[0]; 
        }
      },  8000);
    };
  }]);
