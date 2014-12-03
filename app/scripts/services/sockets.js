'use strict';

/**
 * @ngdoc service
 * @name newAngApp.sockets
 * @description
 * # sockets
 * Factory in the newAngApp.
 */
angular.module('mySocket', [])
  .factory('socket', function ($rootScope) {
  // var socket = io.connect('http://mediadashapi.herokuapp.com:5000');
  console.log('nuh uh');
  // var socket = io.connect('http://localhost:9393');
    var socket = io.connect('http://salty-journey-1875.herokuapp.com:80/');
    return {
      on: function (eventName, callback) {
          socket.on(eventName, function () {
            var args = arguments;
            $rootScope.$apply(function () {
                callback.apply(socket, args);
            });
        });
      }
    };
});

