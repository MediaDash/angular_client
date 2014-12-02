'use strict';

angular.module('newAngApp').animation('.craziness', function() {
  return {
    enter : function(element, done) {
      console.log('entering');
      element.css('opacity',0);
      $(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          $(element).stop();
        }
      };
    },
    leave : function(element, done) {
      element.css('opacity', 1);
      $(element).animate({
        opacity: 0
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          $(element).stop();
        }
      };
    },
    move : function(element, done) {
      element.css('opacity', 0);
      $(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          $(element).stop();
        }
      };
    },

    // you can also capture these animation events
    addClass : function(element, className, done) {

    },
    removeClass : function(element, className, done) {

    }
  };
});