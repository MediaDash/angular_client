'use strict';

/**
 * @ngdoc function
 * @name newAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngApp
 */

angular.module('newAngApp')

  .controller('MainCtrl', ['$rootScope', '$scope', '$location', '$http', '$interval', '$timeout', function ($rootScope, $scope, $location, $http, $interval, $timeout) {

    $rootScope.colors = ['#225533',
                         '#66eeff',
                         '#eecc66',
                         '445566',
                         'FF8300'];

    $rootScope.boxChange = false;

    // Templates
    $scope.templates = {

      available: ['main', 'many_instas', 'single_insta', 'archer_tweet', 'tweet'],
    
      active: 'views/main.html',
      activeIndex: 0
    };
    
    console.log($scope.templates);

    // Defaults
    $scope.term = '';
    var baseURL = 'http://mediadashapi.herokuapp.com/';
    var testURL = 'http://localhost:9393/';

    // Models
    $scope.tweets = {
      available: [],
      activeIndex: 0,
      active: null,
    };

    $scope.instas = {
      available: [],
      activeIndex: 0,
      active: null,
    };

    var getTweets = function() {
      $http.get($scope.tweetUrl).success(function(data) {
        $scope.tweets.available = data;
        $scope.tweets.activeIndex = 0;
        $scope.tweets.active = $scope.tweets.available[0];
        startCycleThroughTweets();
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

    var getInstas = function() {
      $http.get($scope.instaUrl).success(function(data) {
        console.log(data);
        $scope.instas.available = data;
        changeActiveTemplate(1);
        instaRefresh();
      });
    };

    $scope.submit = function(term) {
      $scope.term = term.replace(/\#/, '');
      $scope.tweetUrl = baseURL + 'twitter?term=' + $scope.term;
      $scope.instaUrl = baseURL + 'insta?term=' + $scope.term;
      // $scope.streamTweetUrl = baseURL + 'twitter_stream?term=' + $scope.term;
      getInstas();
      getTweets();
      // $scope.streamTweets();
      // $scope.incomingTweets();
      changeActiveTemplate(1);
      cycleThroughInstas();
      cycleThroughViews();
    };

    var changeActiveTemplate = function(index) {
      $scope.templates.active = 'views/' + $scope.templates.available[index] + '.html';
      $scope.templates.activeIndex = index;
    };

    $scope.previousTemplate = function(){
      if( $scope.templates.activeIndex > 0 ) {
        changeActiveTemplate( $scope.templates.activeIndex - 1) ;
      }
    };

    $scope.nextTemplate = function(){
      if( $scope.templates.activeIndex < $scope.templates.available.length - 1 ) {
        changeActiveTemplate( $scope.templates.activeIndex + 1 ) ;
      }
    };

    $scope.parseDate = function(date){
      return Date.parse(date);
    };

    // Private Functions to Get and Cycle Through Data

    var startCycleThroughTweets = function() {
      $interval(function(){
      changeBackground();
      if( $scope.tweets.activeIndex < $scope.tweets.available.length - 1 ) {
        $scope.tweets.activeIndex = $scope.tweets.activeIndex + 1;
        $scope.tweets.active = $scope.tweets.available[$scope.tweets.activeIndex];
        } else {
         $scope.tweets.activeIndex = 0;
         $scope.tweets.active = $scope.tweets.available[0];
        }
      },  8000);
    };

    var rotateTemplate = function() {
      if( $scope.templates.activeIndex > 1 ) {
        changeActiveTemplate( $scope.templates.activeIndex - 1);
      } else {
        $scope.templates.activeIndex = $scope.templates.available.length - 1;
      }
    };

    var cycleThroughViews = function(){
      $interval(function(){
        rotateTemplate();
      }, 30000);
    }

    var cycleThroughInstas = function(){
      $timeout(function(){
        $scope.instas.active = sampleFromCollection($scope.instas.available);
        $rootScope.boxChange = true;
        $timeout(function(){
          $rootScope.boxChange = false;
          cycleThroughInstas();
        }, 5000);
      }, 5000);
    };

  // TRY TO USE DELAY/ COMPLETE ON ANIMATE TO START TIMER AFTER ANIMATION COMPLETE
  //   function selectInsta() {
  //     setTimeout(function() {
  //       $('.backdrop, .box').animate({'opacity':'.70'}, 300, 'linear');
  //       $('.box').animate({'opacity':'1.00'}, 300, 'linear');
  //       $('.backdrop, .box').css('display', 'block');
  //       setTimeout(function() {
  //         closeBox();
  //       }, 4000);
  //       selectInsta();
  //   }, 5000);
  // });

    // var closeBox = function() {
    //   $('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
    //   $('.backdrop, .box').css('display', 'none');
    //   })
    // };

    // Refresh Instas Every 60s
    var instaRefresh = function() {
      $timeout(function(){ 
        
        var instaUpdateUrl = baseURL + 'instaLatest?term=' + $scope.term + '&maxTimestamp=' + maxInstaTimestamp();
        console.log(instaUpdateUrl);

        $http.get(instaUpdateUrl).success(function(data) {
          for ( var i = 0; i < data.length; i++ ) {
            $scope.instas.available.push(data[i]);
          } 
          console.log(data);
          $scope.instas.activeIndex = 0;
          $scope.instas.active = $scope.instas.available[0];
          instaRefresh();
        });

      },  30000);
    };

    var maxInstaTimestamp = function() {
      var maxTimestamp = 0;
      var instas = $scope.instas.available;
      for ( var i=0; i < instas.length; i++ ) {
        if ( instas[i].timestamp > maxTimestamp ) {
          maxTimestamp = instas[i].timestamp;
        }
      }
      return maxTimestamp;
    };

    var changeBackground = function() {
      $rootScope.activeColor = sampleFromCollection($rootScope.colors);
    };

    var sampleFromCollection = function(items) {
      return items[Math.floor(Math.random()*items.length)];
    };

  }]);
