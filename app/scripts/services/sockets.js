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
  var socket = io.connect('http://mediadashapi.herokuapp.com');
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

