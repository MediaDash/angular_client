'use strict';

/**
 * @ngdoc function
 * @name newAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngApp
 */
angular.module('newAngApp')
  .controller('MainCtrl', ['$scope', '$location', '$http', '$interval', 'socket', function ($scope, $location, $http, $interval, socket) {

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
    }


    $scope.getTweets = function() {
      $http.get($scope.tweetUrl).success(function(data) {
        $scope.tweets.available = data;
        $scope.tweets.activeIndex = 0;
        $scope.tweets.active = $scope.tweets.available[0]
        startCycleThroughTweets();
        console.log(data)
      });
    };

    $scope.streamTweets = function() {
      console.log('tweeted!');
      $http.get($scope.streamTweetUrl).success(function(data){
        console.log(data);
      });
    };

    $scope.incomingTweets = function() {
      var streamedTweets = [];
      var index = 0;
      socket.on('tweet', function(data){
        streamedTweets.push(data[0]);
        // $scope.streamedTweet = $scope.streamedTweets[index];
      });
      $interval(function(){
          $scope.streamedTweet = streamedTweets[index];
          var lastObjectIndex = streamedTweets.indexOf($scope.streamedTweet);
          if (lastObjectIndex + 1 === streamedTweets.length) {
            index = lastObjectIndex;
          } else {
            index = lastObjectIndex + 1;
          }
        }, 5000);
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
      $scope.streamTweetUrl = baseURL + 'twitter_stream?term=' + $scope.term;
      $scope.getInstas();
      $scope.getTweets();
      $scope.streamTweets();
      $scope.incomingTweets();
      $scope.changeActiveTemplate(1);
      cycleThroughViews();
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
    }


    //this function only cycle through insta and tweets and then stops
    //// I should create a way to have this cycle back and forth between tweets and instas and other views 
    //// we create
    var cycleThroughViews = function(){
      $interval(function(){
        $scope.nextTemplate();
      }, 8000);
    }

    //this function only cycle through insta and tweets and then stops
    //// I should create a way to have this cycle back and forth between tweets and instas and other views 
    //// we create
    var cycleThroughViews = function(){
      $interval(function(){
        $scope.nextTemplate();
      }, 8000);
    }




  }]);
