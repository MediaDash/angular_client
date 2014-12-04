"use strict";angular.module("newAngApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newAngApp").controller("MainCtrl",["$rootScope","$scope","$location","$http","$interval","$timeout",function(a,b,c,d,e,f){a.colors=["#225533","#66eeff","#eecc66","#445566","#FF8300","#51EE59","#FFB800","#EED651"],a.boxChange=!1,b.templates={available:["main","many_instas","twitter_single_card","single_insta","archer_tweet"],active:"views/main.html",activeIndex:0},console.log(b.templates),b.term="";var g="http://mediadashapi.herokuapp.com/";b.tweets={available:[],activeIndex:0,active:null,displayed:[]},b.instas={available:[],activeIndex:0,active:null,displayed:[]};var h=function(){d.get(b.tweetUrl).success(function(a){b.tweets.available=a,b.tweets.activeIndex=0,b.tweets.active=b.tweets.available[0],console.log(a),k()})};b.streamTweets=function(){console.log("tweeted!"),d.get(b.streamTweetUrl).success(function(a){console.log(a)})},b.incomingTweets=function(){var a=[],c=0;socket.on("tweet",function(b){a.push(b[0])}),e(function(){b.streamedTweet=a[c];var d=a.indexOf(b.streamedTweet);c=d+1===a.length?d:d+1},5e3)};var i=function(){d.get(b.instaUrl).success(function(a){console.log(a),b.instas.available=a,j(1),o()})};b.submit=function(a){b.term=a.replace(/\#/,""),b.tweetUrl=g+"twitter?term="+b.term,b.instaUrl=g+"insta?term="+b.term,i(),h(),j(1),n(),m()};var j=function(a){b.templates.active="views/"+b.templates.available[a]+".html",b.templates.activeIndex=a};b.previousTemplate=function(){b.templates.activeIndex>0&&j(b.templates.activeIndex-1)},b.nextTemplate=function(){b.templates.activeIndex<b.templates.available.length-1&&j(b.templates.activeIndex+1)},b.parseDate=function(a){return Date.parse(a)};var k=function(){q(),b.tweets.activeIndex=0,b.tweets.active=b.tweets.available[0],b.tweets.displayed.push(b.tweets.active),e(function(){q(),b.tweets.activeIndex<b.tweets.available.length-1?(b.tweets.displayed.pop(),b.tweets.activeIndex=b.tweets.activeIndex+1,b.tweets.active=b.tweets.available[b.tweets.activeIndex],b.tweets.displayed.push(b.tweets.active)):(b.tweets.displayed.pop(),b.tweets.activeIndex=0,b.tweets.active=b.tweets.available[0],b.tweets.displayed.push(b.tweets.active))},5e3)},l=function(){b.templates.activeIndex>1?j(b.templates.activeIndex-1):b.templates.activeIndex=b.templates.available.length-1},m=function(){e(function(){l()},3e4)},n=function(){f(function(){b.instas.active=r(b.instas.available),a.boxChange=!0,f(function(){a.boxChange=!1,n()},5e3)},5e3)},o=function(){f(function(){var a=g+"instaLatest?term="+b.term+"&maxTimestamp="+p();console.log(a),d.get(a).success(function(a){for(var c=0;c<a.length;c++)b.instas.available.push(a[c]);console.log(a),b.instas.activeIndex=0,b.instas.active=b.instas.available[0],o()})},3e4)},p=function(){for(var a=0,c=b.instas.available,d=0;d<c.length;d++)c[d].timestamp>a&&(a=c[d].timestamp);return a},q=function(){a.activeColor=r(a.colors)},r=function(a){return a[Math.floor(Math.random()*a.length)]}}]),angular.module("newAngApp").filter("timeago",function(){return function(a,b,c){if(!a)return"never";if(b||(b=Date.now()),angular.isDate(a)?a=a.getTime():"string"==typeof a&&(a=new Date(a).getTime()),angular.isDate(b)?b=b.getTime():"string"==typeof b&&(b=new Date(b).getTime()),"number"==typeof a&&"number"==typeof b){var d=Math.abs((b-a)/1e3),e=[],f=60,g=3600,h=86400,i=604800,j=31556926,k=315569260;return e=f>=d?["",c?"now":"less than a minute"]:60*f>d?[Math.round(Math.abs(d/f)),"min"]:24*g>d?[Math.round(Math.abs(d/g)),"hr"]:7*h>d?[Math.round(Math.abs(d/h)),"day"]:52*i>d?[Math.round(Math.abs(d/i)),"week"]:10*j>d?[Math.round(Math.abs(d/j)),"year"]:100*k>d?[Math.round(Math.abs(d/k)),"decade"]:["","a long time"],e[1]+=0===e[0]||e[0]>1?"s":"",e=e.join(" "),c===!0?e:b>=a?e+" ago":"in "+e}}}),angular.module("newAngApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("newAngApp").animation(".craziness",function(){return{enter:function(a,b){return console.log("entering"),a.css("opacity",0),$(a).animate({opacity:1},b),function(b){b&&$(a).stop()}},leave:function(a,b){return a.css("opacity",1),$(a).animate({opacity:0},b),function(b){b&&$(a).stop()}},move:function(a,b){return a.css("opacity",0),$(a).animate({opacity:1},b),function(b){b&&$(a).stop()}},addClass:function(){},removeClass:function(){}}});