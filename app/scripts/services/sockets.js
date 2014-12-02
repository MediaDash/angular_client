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
  var socket = io.connect('http://localhost:9393');
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

