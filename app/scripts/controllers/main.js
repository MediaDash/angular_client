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

    $scope.getTweets = function() {
      $http.get($scope.tweetUrl).success(function(data) {
        console.log(data);
        $scope.tweets = data;
        $scope.tweet = data[0];
      });
    };

    $scope.getInstas = function() {
      $http.get($scope.instaUrl).success(function(data) {
        console.log(data);
        $scope.instas = data;
      });
    };

    $scope.submit = function(term) {
      $scope.term = term.replace(/\#/, '');
      console.log($scope.term);
      $scope.tweetUrl = baseURL + 'twitter?term=' + $scope.term;
      $scope.instaUrl = baseURL + 'insta?term=' + $scope.term;
      $scope.getInstas();
      $scope.getTweets();
      $scope.changeActiveTemplate(1);
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

  }]);
