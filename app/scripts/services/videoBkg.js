'use strict';

angular.module('newAngApp').directive('background_video', function() {

  return $(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://vsj.zencdn.net/v/oceans.mp4');
  });

});