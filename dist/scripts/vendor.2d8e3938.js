!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(hb.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return _.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ub,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:tb.test(c)?_.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)rb.set(a[c],"globalEval",!b||rb.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&&(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sb.hasData(a)&&(h=sb.access(a),i=_.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&yb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Ob[a];return c||(c=t(a,b),"none"!==c&&c||(Nb=(Nb||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qb.test(g)&&Pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wb[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wb[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wb[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wb[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wb[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qb.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=rb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xb(d)&&(f[g]=rb.access(d,"olddisplay",u(d.nodeName)))):(e=xb(d),"none"===c&&e||rb.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wb[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xb(a),p=rb.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?rb.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=rb.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;rb.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(nb)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.1",_=function(a,b){return new _.fn.init(a,b)},ab=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,"ms-").replace(cb,db)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(ab,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var eb=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ub,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")(?:"+db+"*([*^$|!~]?=)"+db+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fb+"))|)"+db+"*\\]",hb=":("+eb+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+gb+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&mb.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=eb,_.expr=eb.selectors,_.expr[":"]=_.expr.pseudos,_.unique=eb.uniqueSort,_.text=eb.getText,_.isXMLDoc=eb.isXML,_.contains=eb.contains;var fb=_.expr.match.needsContext,gb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,hb=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0
}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fb.test(a)?_(a):a||[],!1).length}});var ib,jb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,kb=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:jb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),gb.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ib.ready?ib.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};kb.prototype=_.fn,ib=_(Z);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(mb[a]||_.unique(e),lb.test(a)&&e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};_.Callbacks=function(a){a="string"==typeof a?ob[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pb.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pb||(pb=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pb.promise(b)},_.ready.promise();var qb=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;_.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sb.get(f),1===f.nodeType&&!rb.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));rb.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sb.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=rb.get(a,b),c&&(!d||_.isArray(c)?d=rb.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return rb.get(a,c)||rb.access(a,c,{empty:_.Callbacks("once memory").add(function(){rb.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=rb.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=["Top","Right","Bottom","Left"],xb=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb="undefined";Y.focusinBubbles="onfocusin"in a;var Ab=/^key/,Bb=/^(?:mouse|pointer|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==zb&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(nb)||[""],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&&rb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(nb)||[""],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,rb.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Cb.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(rb.get(g,"events")||{})[b.type]&&rb.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Eb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fb=/<([\w:]+)/,Gb=/<|&#?\w+;/,Hb=/<(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fb.exec(e)||["",""])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[rb.expando],e&&(b=rb.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);rb.cache[e]&&delete rb.cache[e]}delete sb.cache[c[sb.expando]]}}}),_.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Hb.test(a)&&!Mb[(Fb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Eb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ib.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Jb.test(g.type||"")&&!rb.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(Lb,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp("^("+vb+")(?!px)[a-z%]+$","i"),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp("^("+vb+")(.*)$","i"),Ub=new RegExp("^([+-])=("+vb+")","i"),Vb={position:"absolute",visibility:"hidden",display:"block"},Wb={letterSpacing:"0",fontWeight:"400"},Xb=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ub.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wb&&(e=Wb[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sb.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Rb(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Rb(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp("^(?:([+-])=|)("+vb+")([a-z%]*)$","i"),ac=/queueHooks$/,bc=[G],cc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_b.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||rb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=rb.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ac.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=rb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];
_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Yb=_.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Yb=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Zb||(Zb=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Zb),Zb=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",Y.checkOn=""!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var dc,ec,fc=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qb(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===zb?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?ec:dc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(nb);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),ec={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fc[b]||_.find.attr;fc[b]=function(a,b,d){var e,f;return d||(f=fc[b],fc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fc[b]=f),e}});var gc=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qb(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gc.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hc=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(_.isFunction(a)?function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=_(this),f=a.match(nb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===zb||"boolean"===c)&&(this.className&&rb.set(this,"__className__",this.className),this.className=this.className||a===!1?"":rb.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hc," ").indexOf(b)>=0)return!0;return!1}});var ic=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ic,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(Y.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&_.nodeName(c.parentNode,"optgroup"))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jc=_.now(),kc=/\?/;_.parseJSON=function(a){return JSON.parse(a+"")},_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lc,mc,nc=/#.*$/,oc=/([?&])_=[^&]*/,pc=/^(.*?):[ \t]*([^\r\n]*)$/gm,qc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rc=/^(?:GET|HEAD)$/,sc=/^\/\//,tc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,uc={},vc={},wc="*/".concat("*");try{mc=location.href}catch(xc){mc=Z.createElement("a"),mc.href="",mc=mc.href}lc=tc.exec(mc.toLowerCase())||[],_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mc,type:"GET",isLocal:qc.test(lc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":_.parseJSON,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(uc),ajaxTransport:J(vc),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--_.active||_.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=pc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||mc)+"").replace(nc,"").replace(sc,lc[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(nb)||[""],null==l.crossDomain&&(i=tc.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lc[1]&&i[2]===lc[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(lc[3]||("http:"===lc[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),K(uc,l,b,v),2===t)return v;j=l.global,j&&0===_.active++&&_.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!rc.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kc.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=oc.test(e)?e.replace(oc,"$1_="+jc++):e+(kc.test(e)?"&":"?")+"_="+jc++)),l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+wc+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(vc,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(_.isFunction(a)?function(b){_(this).wrapInner(a.call(this,b))}:function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var yc=/%20/g,zc=/\[\]$/,Ac=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,Cc=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(yc,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!_(this).is(":disabled")&&Cc.test(this.nodeName)&&!Bc.test(a)&&(this.checked||!yb.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(Ac,"\r\n")}}):{name:b.name,value:c.replace(Ac,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=_.ajaxSettings.xhr();a.ActiveXObject&&_(a).on("unload",function(){for(var a in Ec)Ec[a]()}),Y.cors=!!Gc&&"withCredentials"in Gc,Y.ajax=Gc=!!Gc,_.ajaxTransport(function(a){var b;return Y.cors||Gc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Ec[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Ec[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),_.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hc=[],Ic=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hc.pop()||_.expando+"_"+jc++;return this[a]=!0,a}}),_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ic.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ic.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,"$1"+e):b.jsonp!==!1&&(b.url+=(kc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=gb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};var Jc=_.fn.load;_.fn.load=function(a,b,c){if("string"!=typeof a&&Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?_("<div>").append(_.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==zb&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Kc;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Kc})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qb(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qb.test(c)?_(a).position()[b]+"px":c):void 0})}),_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qb(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Lc=a.jQuery,Mc=a.$;return _.noConflict=function(b){return a.$===_&&(a.$=Mc),b&&a.jQuery===_&&(a.jQuery=Lc),_},typeof b===zb&&(a.jQuery=a.$=_),_}),function(a,b,c){"use strict";function d(a,b){return b=b||Error,function(){var c,d,e=arguments[0],f="["+(a?a+":":"")+e+"] ",g=arguments[1],h=arguments;for(c=f+g.replace(/\{\d+\}/g,function(a){var b=+a.slice(1,-1);return b+2<h.length?lb(h[b+2]):a}),c=c+"\nhttp://errors.angularjs.org/1.3.4/"+(a?a+"/":"")+e,d=2;d<arguments.length;d++)c=c+(2==d?"?":"&")+"p"+(d-2)+"="+encodeURIComponent(lb(arguments[d]));return new b(c)}}function e(a){if(null==a||z(a))return!1;var b=a.length;return a.nodeType===ke&&b?!0:u(a)||de(a)||0===b||"number"==typeof b&&b>0&&b-1 in a}function f(a,b,c){var d,g;if(a)if(x(a))for(d in a)"prototype"==d||"length"==d||"name"==d||a.hasOwnProperty&&!a.hasOwnProperty(d)||b.call(c,a[d],d,a);else if(de(a)||e(a)){var h="object"!=typeof a;for(d=0,g=a.length;g>d;d++)(h||d in a)&&b.call(c,a[d],d,a)}else if(a.forEach&&a.forEach!==f)a.forEach(b,c,a);else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d,a);return a}function g(a){return Object.keys(a).sort()}function h(a,b,c){for(var d=g(a),e=0;e<d.length;e++)b.call(c,a[d[e]],d[e]);return d}function i(a){return function(b,c){a(c,b)}}function j(){return++be}function k(a,b){b?a.$$hashKey=b:delete a.$$hashKey}function l(a){for(var b=a.$$hashKey,c=1,d=arguments.length;d>c;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;h>g;g++){var i=f[g];a[i]=e[i]}}return k(a,b),a}function m(a){return parseInt(a,10)}function n(a,b){return l(Object.create(a),b)}function o(){}function p(a){return a}function q(a){return function(){return a}}function r(a){return"undefined"==typeof a}function s(a){return"undefined"!=typeof a}function t(a){return null!==a&&"object"==typeof a}function u(a){return"string"==typeof a}function v(a){return"number"==typeof a}function w(a){return"[object Date]"===$d.call(a)}function x(a){return"function"==typeof a}function y(a){return"[object RegExp]"===$d.call(a)}function z(a){return a&&a.window===a}function A(a){return a&&a.$evalAsync&&a.$watch}function B(a){return"[object File]"===$d.call(a)}function C(a){return"[object Blob]"===$d.call(a)}function D(a){return"boolean"==typeof a}function E(a){return a&&x(a.then)}function F(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function G(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function H(a){return Od(a.nodeName||a[0]&&a[0].nodeName)}function I(a,b){var c=a.indexOf(b);return c>=0&&a.splice(c,1),b}function J(a,b,c,d){if(z(a)||A(a))throw _d("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(b){if(a===b)throw _d("cpi","Can't copy! Source and destination are identical.");if(c=c||[],d=d||[],t(a)){var e=c.indexOf(a);if(-1!==e)return d[e];c.push(a),d.push(b)}var g;if(de(a)){b.length=0;for(var h=0;h<a.length;h++)g=J(a[h],null,c,d),t(a[h])&&(c.push(a[h]),d.push(g)),b.push(g)}else{var i=b.$$hashKey;de(b)?b.length=0:f(b,function(a,c){delete b[c]});for(var j in a)a.hasOwnProperty(j)&&(g=J(a[j],null,c,d),t(a[j])&&(c.push(a[j]),d.push(g)),b[j]=g);k(b,i)}}else if(b=a,a)if(de(a))b=J(a,[],c,d);else if(w(a))b=new Date(a.getTime());else if(y(a))b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex;else if(t(a)){var l=Object.create(Object.getPrototypeOf(a));b=J(a,l,c,d)}return b}function K(a,b){if(de(a)){b=b||[];for(var c=0,d=a.length;d>c;c++)b[c]=a[c]}else if(t(a)){b=b||{};for(var e in a)("$"!==e.charAt(0)||"$"!==e.charAt(1))&&(b[e]=a[e])}return b||a}function L(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d,e,f,g=typeof a,h=typeof b;if(g==h&&"object"==g){if(!de(a)){if(w(a))return w(b)?L(a.getTime(),b.getTime()):!1;if(y(a)&&y(b))return a.toString()==b.toString();if(A(a)||A(b)||z(a)||z(b)||de(b))return!1;f={};for(e in a)if("$"!==e.charAt(0)&&!x(a[e])){if(!L(a[e],b[e]))return!1;f[e]=!0}for(e in b)if(!f.hasOwnProperty(e)&&"$"!==e.charAt(0)&&b[e]!==c&&!x(b[e]))return!1;return!0}if(!de(b))return!1;if((d=a.length)==b.length){for(e=0;d>e;e++)if(!L(a[e],b[e]))return!1;return!0}}return!1}function M(a,b,c){return a.concat(Xd.call(b,c))}function N(a,b){return Xd.call(a,b||0)}function O(a,b){var c=arguments.length>2?N(arguments,2):[];return!x(b)||b instanceof RegExp?b:c.length?function(){return arguments.length?b.apply(a,M(c,arguments,0)):b.apply(a,c)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function P(a,d){var e=d;return"string"==typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?e=c:z(d)?e="$WINDOW":d&&b===d?e="$DOCUMENT":A(d)&&(e="$SCOPE"),e}function Q(a,b){return"undefined"==typeof a?c:JSON.stringify(a,P,b?"  ":null)}function R(a){return u(a)?JSON.parse(a):a}function S(a){a=Ud(a).clone();try{a.empty()}catch(b){}var c=Ud("<div>").append(a).html();try{return a[0].nodeType===le?Od(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Od(b)})}catch(b){return Od(c)}}function T(a){try{return decodeURIComponent(a)}catch(b){}}function U(a){var b,c,d={};return f((a||"").split("&"),function(a){if(a&&(b=a.replace(/\+/g,"%20").split("="),c=T(b[0]),s(c))){var e=s(b[1])?T(b[1]):!0;Pd.call(d,c)?de(d[c])?d[c].push(e):d[c]=[d[c],e]:d[c]=e}}),d}function V(a){var b=[];return f(a,function(a,c){de(a)?f(a,function(a){b.push(X(c,!0)+(a===!0?"":"="+X(a,!0)))}):b.push(X(c,!0)+(a===!0?"":"="+X(a,!0)))}),b.length?b.join("&"):""}function W(a){return X(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function X(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function Y(a,b){var c,d,e=he.length;for(a=Ud(a),d=0;e>d;++d)if(c=he[d]+b,u(c=a.attr(c)))return c;return null}function Z(a,b){var c,d,e={};f(he,function(b){var e=b+"app";!c&&a.hasAttribute&&a.hasAttribute(e)&&(c=a,d=a.getAttribute(e))}),f(he,function(b){var e,f=b+"app";!c&&(e=a.querySelector("["+f.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(f))}),c&&(e.strictDi=null!==Y(c,"strict-di"),b(c,d?[d]:[],e))}function $(c,d,e){t(e)||(e={});var g={strictDi:!1};e=l(g,e);var h=function(){if(c=Ud(c),c.injector()){var a=c[0]===b?"document":S(c);throw _d("btstrpd","App Already Bootstrapped with this Element '{0}'",a.replace(/</,"&lt;").replace(/>/,"&gt;"))}d=d||[],d.unshift(["$provide",function(a){a.value("$rootElement",c)}]),e.debugInfoEnabled&&d.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]),d.unshift("ng");var f=Qb(d,e.strictDi);return f.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d),c(b)(a)})}]),f},i=/^NG_ENABLE_DEBUG_INFO!/,j=/^NG_DEFER_BOOTSTRAP!/;return a&&i.test(a.name)&&(e.debugInfoEnabled=!0,a.name=a.name.replace(i,"")),a&&!j.test(a.name)?h():(a.name=a.name.replace(j,""),void(ae.resumeBootstrap=function(a){f(a,function(a){d.push(a)}),h()}))}function _(){a.name="NG_ENABLE_DEBUG_INFO!"+a.name,a.location.reload()}function ab(a){return ae.element(a).injector().get("$$testability")}function bb(a,b){return b=b||"_",a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function cb(){var b;je||(Vd=a.jQuery,Vd&&Vd.fn.on?(Ud=Vd,l(Vd.fn,{scope:De.scope,isolateScope:De.isolateScope,controller:De.controller,injector:De.injector,inheritedData:De.inheritedData}),b=Vd.cleanData,Vd.cleanData=function(a){var c;if(ce)ce=!1;else for(var d,e=0;null!=(d=a[e]);e++)c=Vd._data(d,"events"),c&&c.$destroy&&Vd(d).triggerHandler("$destroy");b(a)}):Ud=tb,ae.element=Ud,je=!0)}function db(a,b,c){if(!a)throw _d("areq","Argument '{0}' is {1}",b||"?",c||"required");return a}function eb(a,b,c){return c&&de(a)&&(a=a[a.length-1]),db(x(a),b,"not a function, got "+(a&&"object"==typeof a?a.constructor.name||"Object":typeof a)),a}function fb(a,b){if("hasOwnProperty"===a)throw _d("badname","hasOwnProperty is not a valid {0} name",b)}function gb(a,b,c){if(!b)return a;for(var d,e=b.split("."),f=a,g=e.length,h=0;g>h;h++)d=e[h],a&&(a=(f=a)[d]);return!c&&x(a)?O(f,a):a}function hb(a){var b=a[0],c=a[a.length-1],d=[b];do{if(b=b.nextSibling,!b)break;d.push(b)}while(b!==c);return Ud(d)}function ib(){return Object.create(null)}function jb(a){function b(a,b,c){return a[b]||(a[b]=c())}var c=d("$injector"),e=d("ng"),f=b(a,"angular",Object);return f.$$minErr=f.$$minErr||d,b(f,"module",function(){var a={};return function(d,f,g){var h=function(a,b){if("hasOwnProperty"===a)throw e("badname","hasOwnProperty is not a valid {0} name",b)};return h(d,"module"),f&&a.hasOwnProperty(d)&&(a[d]=null),b(a,d,function(){function a(a,c,d,e){return e||(e=b),function(){return e[d||"push"]([a,c,arguments]),j}}if(!f)throw c("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",d);var b=[],e=[],h=[],i=a("$injector","invoke","push",e),j={_invokeQueue:b,_configBlocks:e,_runBlocks:h,requires:f,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:i,run:function(a){return h.push(a),this}};return g&&i(g),j})}})}function kb(a){var b=[];return JSON.stringify(a,function(a,c){if(c=P(a,c),t(c)){if(b.indexOf(c)>=0)return"<<already seen>>";b.push(c)}return c})}function lb(a){return"function"==typeof a?a.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof a?"undefined":"string"!=typeof a?kb(a):a}function mb(b){l(b,{bootstrap:$,copy:J,extend:l,equals:L,element:Ud,forEach:f,injector:Qb,noop:o,bind:O,toJson:Q,fromJson:R,identity:p,isUndefined:r,isDefined:s,isString:u,isFunction:x,isObject:t,isNumber:v,isElement:F,isArray:de,version:pe,isDate:w,lowercase:Od,uppercase:Qd,callbacks:{counter:0},getTestability:ab,$$minErr:d,$$csp:ge,reloadWithDebugInfo:_}),Wd=jb(a);try{Wd("ngLocale")}catch(c){Wd("ngLocale",[]).provider("$locale",nc)}Wd("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sc}),a.provider("$compile",Xb).directive({a:vf,input:Of,textarea:Of,form:Af,script:Fg,select:Ig,style:Kg,option:Jg,ngBind:fg,ngBindHtml:hg,ngBindTemplate:gg,ngClass:ig,ngClassEven:kg,ngClassOdd:jg,ngCloak:lg,ngController:mg,ngForm:Bf,ngHide:zg,ngIf:pg,ngInclude:qg,ngInit:sg,ngNonBindable:tg,ngPluralize:ug,ngRepeat:vg,ngShow:yg,ngStyle:Ag,ngSwitch:Bg,ngSwitchWhen:Cg,ngSwitchDefault:Dg,ngOptions:Hg,ngTransclude:Eg,ngModel:Xf,ngList:bg,ngChange:Yf,pattern:$f,ngPattern:$f,required:Zf,ngRequired:Zf,minlength:ag,ngMinlength:ag,maxlength:_f,ngMaxlength:_f,ngValue:dg,ngModelOptions:eg}).directive({ngInclude:rg}).directive(wf).directive(ng),a.provider({$anchorScroll:Rb,$animate:Ne,$browser:Ub,$cacheFactory:Vb,$controller:_b,$document:ac,$exceptionHandler:bc,$filter:cd,$interpolate:lc,$interval:mc,$http:hc,$httpBackend:jc,$location:Ac,$log:Bc,$parse:Mc,$rootScope:Rc,$q:Nc,$$q:Oc,$sce:Wc,$sceDelegate:Vc,$sniffer:Xc,$templateCache:Wb,$templateRequest:Yc,$$testability:Zc,$timeout:$c,$window:bd,$$rAF:Qc,$$asyncCallback:Sb})}])}function nb(){return++re}function ob(a){return a.replace(ue,function(a,b,c,d){return d?c.toUpperCase():c}).replace(ve,"Moz$1")}function pb(a){return!ze.test(a)}function qb(a){var b=a.nodeType;return b===ke||!b||b===ne}function rb(a,b){var c,d,e,g,h=b.createDocumentFragment(),i=[];if(pb(a))i.push(b.createTextNode(a));else{for(c=c||h.appendChild(b.createElement("div")),d=(Ae.exec(a)||["",""])[1].toLowerCase(),e=Ce[d]||Ce._default,c.innerHTML=e[1]+a.replace(Be,"<$1></$2>")+e[2],g=e[0];g--;)c=c.lastChild;i=M(i,c.childNodes),c=h.firstChild,c.textContent=""}return h.textContent="",h.innerHTML="",f(i,function(a){h.appendChild(a)}),h}function sb(a,c){c=c||b;var d;return(d=ye.exec(a))?[c.createElement(d[1])]:(d=rb(a,c))?d.childNodes:[]}function tb(a){if(a instanceof tb)return a;var b;if(u(a)&&(a=ee(a),b=!0),!(this instanceof tb)){if(b&&"<"!=a.charAt(0))throw xe("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
return new tb(a)}b?Db(this,sb(a)):Db(this,a)}function ub(a){return a.cloneNode(!0)}function vb(a,b){if(b||xb(a),a.querySelectorAll)for(var c=a.querySelectorAll("*"),d=0,e=c.length;e>d;d++)xb(c[d])}function wb(a,b,c,d){if(s(d))throw xe("offargs","jqLite#off() does not support the `selector` argument");var e=yb(a),g=e&&e.events,h=e&&e.handle;if(h)if(b)f(b.split(" "),function(b){if(s(c)){var d=g[b];if(I(d||[],c),d&&d.length>0)return}te(a,b,h),delete g[b]});else for(b in g)"$destroy"!==b&&te(a,b,h),delete g[b]}function xb(a,b){var d=a.ng339,e=d&&qe[d];if(e){if(b)return void delete e.data[b];e.handle&&(e.events.$destroy&&e.handle({},"$destroy"),wb(a)),delete qe[d],a.ng339=c}}function yb(a,b){var d=a.ng339,e=d&&qe[d];return b&&!e&&(a.ng339=d=nb(),e=qe[d]={events:{},data:{},handle:c}),e}function zb(a,b,c){if(qb(a)){var d=s(c),e=!d&&b&&!t(b),f=!b,g=yb(a,!e),h=g&&g.data;if(d)h[b]=c;else{if(f)return h;if(e)return h&&h[b];l(h,b)}}}function Ab(a,b){return a.getAttribute?(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" ")>-1:!1}function Bb(a,b){b&&a.setAttribute&&f(b.split(" "),function(b){a.setAttribute("class",ee((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ee(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var c=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");f(b.split(" "),function(a){a=ee(a),-1===c.indexOf(" "+a+" ")&&(c+=a+" ")}),a.setAttribute("class",ee(c))}}function Db(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var c=b.length;if("number"==typeof c&&b.window!==b){if(c)for(var d=0;c>d;d++)a[a.length++]=b[d]}else a[a.length++]=b}}function Eb(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){a.nodeType==ne&&(a=a.documentElement);for(var e=de(b)?b:[b];a;){for(var f=0,g=e.length;g>f;f++)if((d=Ud.data(a,e[f]))!==c)return d;a=a.parentNode||a.nodeType===oe&&a.host}}function Gb(a){for(vb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Hb(a,b){b||vb(a);var c=a.parentNode;c&&c.removeChild(a)}function Ib(b,c){c=c||a,"complete"===c.document.readyState?c.setTimeout(b):Ud(c).on("load",b)}function Jb(a,b){var c=Ee[b.toLowerCase()];return c&&Fe[H(a)]&&c}function Kb(a,b){var c=a.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Ge[b]}function Lb(a,b){var c=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],f=e?e.length:0;if(f){if(r(c.immediatePropagationStopped)){var g=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0,c.stopPropagation&&c.stopPropagation(),g&&g.call(c)}}c.isImmediatePropagationStopped=function(){return c.immediatePropagationStopped===!0},f>1&&(e=K(e));for(var h=0;f>h;h++)c.isImmediatePropagationStopped()||e[h].call(a,c)}};return c.elem=a,c}function Mb(a,b){var c=a&&a.$$hashKey;if(c)return"function"==typeof c&&(c=a.$$hashKey()),c;var d=typeof a;return c="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||j)():d+":"+a}function Nb(a,b){if(b){var c=0;this.nextUid=function(){return++c}}f(a,this.put,this)}function Ob(a){var b=a.toString().replace(Ke,""),c=b.match(He);return c?"function("+(c[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Pb(a,b,c){var d,e,g,h;if("function"==typeof a){if(!(d=a.$inject)){if(d=[],a.length){if(b)throw u(c)&&c||(c=a.name||Ob(a)),Le("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",c);e=a.toString().replace(Ke,""),g=e.match(He),f(g[1].split(Ie),function(a){a.replace(Je,function(a,b,c){d.push(c)})})}a.$inject=d}}else de(a)?(h=a.length-1,eb(a[h],"fn"),d=a.slice(0,h)):eb(a,"fn",!0);return d}function Qb(a,b){function d(a){return function(b,c){return t(b)?void f(b,i(a)):a(b,c)}}function e(a,b){if(fb(a,"service"),(x(b)||de(b))&&(b=A.instantiate(b)),!b.$get)throw Le("pget","Provider '{0}' must define $get factory method.",a);return z[a+v]=b}function g(a,b){return function(){var d=C.invoke(b,this,c,a);if(r(d))throw Le("undef","Provider '{0}' must return a value from $get factory method.",a);return d}}function h(a,b,c){return e(a,{$get:c!==!1?g(a,b):b})}function j(a,b){return h(a,["$injector",function(a){return a.instantiate(b)}])}function k(a,b){return h(a,q(b),!1)}function l(a,b){fb(a,"constant"),z[a]=b,B[a]=b}function m(a,b){var c=A.get(a+v),d=c.$get;c.$get=function(){var a=C.invoke(d,c);return C.invoke(b,null,{$delegate:a})}}function n(a){var b,c=[];return f(a,function(a){function d(a){var b,c;for(b=0,c=a.length;c>b;b++){var d=a[b],e=A.get(d[0]);e[d[1]].apply(e,d[2])}}if(!y.get(a)){y.put(a,!0);try{u(a)?(b=Wd(a),c=c.concat(n(b.requires)).concat(b._runBlocks),d(b._invokeQueue),d(b._configBlocks)):x(a)?c.push(A.invoke(a)):de(a)?c.push(A.invoke(a)):eb(a,"module")}catch(e){throw de(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Le("modulerr","Failed to instantiate module {0} due to:\n{1}",a,e.stack||e.message||e)}}}),c}function p(a,c){function d(b){if(a.hasOwnProperty(b)){if(a[b]===s)throw Le("cdep","Circular dependency found: {0}",b+" <- "+w.join(" <- "));return a[b]}try{return w.unshift(b),a[b]=s,a[b]=c(b)}catch(d){throw a[b]===s&&delete a[b],d}finally{w.shift()}}function e(a,c,e,f){"string"==typeof e&&(f=e,e=null);var g,h,i,j=[],k=Pb(a,b,f);for(h=0,g=k.length;g>h;h++){if(i=k[h],"string"!=typeof i)throw Le("itkn","Incorrect injection token! Expected service name as string, got {0}",i);j.push(e&&e.hasOwnProperty(i)?e[i]:d(i))}return de(a)&&(a=a[g]),a.apply(c,j)}function f(a,b,c){var d=Object.create((de(a)?a[a.length-1]:a).prototype),f=e(a,d,b,c);return t(f)||x(f)?f:d}return{invoke:e,instantiate:f,get:d,annotate:Pb,has:function(b){return z.hasOwnProperty(b+v)||a.hasOwnProperty(b)}}}b=b===!0;var s={},v="Provider",w=[],y=new Nb([],!0),z={$provide:{provider:d(e),factory:d(h),service:d(j),value:d(k),constant:d(l),decorator:m}},A=z.$injector=p(z,function(){throw Le("unpr","Unknown provider: {0}",w.join(" <- "))}),B={},C=B.$injector=p(B,function(a){var b=A.get(a+v);return C.invoke(b.$get,b,c,a)});return f(n(a),function(a){C.invoke(a||o)}),C}function Rb(){var a=!0;this.disableAutoScrolling=function(){a=!1},this.$get=["$window","$location","$rootScope",function(b,c,d){function e(a){var b=null;return Array.prototype.some.call(a,function(a){return"a"===H(a)?(b=a,!0):void 0}),b}function f(){var a=h.yOffset;if(x(a))a=a();else if(F(a)){var c=a[0],d=b.getComputedStyle(c);a="fixed"!==d.position?0:c.getBoundingClientRect().bottom}else v(a)||(a=0);return a}function g(a){if(a){a.scrollIntoView();var c=f();if(c){var d=a.getBoundingClientRect().top;b.scrollBy(0,d-c)}}else b.scrollTo(0,0)}function h(){var a,b=c.hash();b?(a=i.getElementById(b))?g(a):(a=e(i.getElementsByName(b)))?g(a):"top"===b&&g(null):g(null)}var i=b.document;return a&&d.$watch(function(){return c.hash()},function(a,b){(a!==b||""!==a)&&Ib(function(){d.$evalAsync(h)})}),h}]}function Sb(){this.$get=["$$rAF","$timeout",function(a,b){return a.supported?function(b){return a(b)}:function(a){return b(a,0,!1)}}]}function Tb(a,b,d,e){function g(a){try{a.apply(null,N(arguments,1))}finally{if(w--,0===w)for(;x.length;)try{x.pop()()}catch(b){d.error(b)}}}function h(a,b){!function c(){f(z,function(a){a()}),y=b(c,a)}()}function i(){j(),k()}function j(){A=a.history.state,A=r(A)?null:A,L(A,H)&&(A=H),H=A}function k(){(C!==m.url()||B!==A)&&(C=m.url(),B=A,f(F,function(a){a(m.url(),A)}))}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,n=b[0],p=a.location,q=a.history,s=a.setTimeout,t=a.clearTimeout,v={};m.isMock=!1;var w=0,x=[];m.$$completeOutstandingRequest=g,m.$$incOutstandingRequestCount=function(){w++},m.notifyWhenNoOutstandingRequests=function(a){f(z,function(a){a()}),0===w?a():x.push(a)};var y,z=[];m.addPollFn=function(a){return r(y)&&h(100,s),z.push(a),a};var A,B,C=p.href,D=b.find("base"),E=null;j(),B=A,m.url=function(b,c,d){if(r(d)&&(d=null),p!==a.location&&(p=a.location),q!==a.history&&(q=a.history),b){var f=B===d;if(C===b&&(!e.history||f))return m;var g=C&&sc(C)===sc(b);return C=b,B=d,!e.history||g&&f?(g||(E=b),c?p.replace(b):p.href=b):(q[c?"replaceState":"pushState"](d,"",b),j(),B=A),m}return E||p.href.replace(/%27/g,"'")},m.state=function(){return A};var F=[],G=!1,H=null;m.onUrlChange=function(b){return G||(e.history&&Ud(a).on("popstate",i),Ud(a).on("hashchange",i),G=!0),F.push(b),b},m.$$checkUrlChange=k,m.baseHref=function(){var a=D.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var I={},J="",K=m.baseHref();m.cookies=function(a,b){var e,f,g,h,i;if(!a){if(n.cookie!==J)for(J=n.cookie,f=J.split("; "),I={},h=0;h<f.length;h++)g=f[h],i=g.indexOf("="),i>0&&(a=l(g.substring(0,i)),I[a]===c&&(I[a]=l(g.substring(i+1))));return I}b===c?n.cookie=encodeURIComponent(a)+"=;path="+K+";expires=Thu, 01 Jan 1970 00:00:00 GMT":u(b)&&(e=(n.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+K).length+1,e>4096&&d.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+e+" > 4096 bytes)!"))},m.defer=function(a,b){var c;return w++,c=s(function(){delete v[c],g(a)},b||0),v[c]=!0,c},m.defer.cancel=function(a){return v[a]?(delete v[a],t(a),g(o),!0):!1}}function Ub(){this.$get=["$window","$log","$sniffer","$document",function(a,b,c,d){return new Tb(a,d,b,c)}]}function Vb(){this.$get=function(){function a(a,c){function e(a){a!=m&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw d("$cacheFactory")("iid","CacheId '{0}' is already taken!",a);var g=0,h=l({},c,{id:a}),i={},j=c&&c.capacity||Number.MAX_VALUE,k={},m=null,n=null;return b[a]={put:function(a,b){if(j<Number.MAX_VALUE){var c=k[a]||(k[a]={key:a});e(c)}if(!r(b))return a in i||g++,i[a]=b,g>j&&this.remove(n.key),b},get:function(a){if(j<Number.MAX_VALUE){var b=k[a];if(!b)return;e(b)}return i[a]},remove:function(a){if(j<Number.MAX_VALUE){var b=k[a];if(!b)return;b==m&&(m=b.p),b==n&&(n=b.n),f(b.n,b.p),delete k[a]}delete i[a],g--},removeAll:function(){i={},g=0,k={},m=n=null},destroy:function(){i=null,h=null,k=null,delete b[a]},info:function(){return l({},h,{size:g})}}}var b={};return a.info=function(){var a={};return f(b,function(b,c){a[c]=b.info()}),a},a.get=function(a){return b[a]},a}}function Wb(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xb(a,d){function e(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};return f(a,function(a,e){var f=a.match(c);if(!f)throw Oe("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}}),d}var g={},h="Directive",j=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,k=/(([\w\-]+)(?:\:([^;]+))?;?)/,m=G("ngSrc,ngSrcset,src,srcset"),r=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,v=/^(on[a-z]+|formaction)$/;this.directive=function y(b,c){return fb(b,"directive"),u(b)?(db(c,"directiveFactory"),g.hasOwnProperty(b)||(g[b]=[],a.factory(b+h,["$injector","$exceptionHandler",function(a,c){var d=[];return f(g[b],function(f,g){try{var h=a.invoke(f);x(h)?h={compile:q(h)}:!h.compile&&h.link&&(h.compile=q(h.link)),h.priority=h.priority||0,h.index=g,h.name=h.name||b,h.require=h.require||h.controller&&h.name,h.restrict=h.restrict||"EA",t(h.scope)&&(h.$$isolateBindings=e(h.scope,h.name)),d.push(h)}catch(i){c(i)}}),d}])),g[b].push(c)):f(b,i(y)),this},this.aHrefSanitizationWhitelist=function(a){return s(a)?(d.aHrefSanitizationWhitelist(a),this):d.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(a){return s(a)?(d.imgSrcSanitizationWhitelist(a),this):d.imgSrcSanitizationWhitelist()};var w=!0;this.debugInfoEnabled=function(a){return s(a)?(w=a,this):w},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,d,e,i,q,s,y,z,B,C,D){function E(a,b){try{a.addClass(b)}catch(c){}}function F(a,b,c,d,e){a instanceof Ud||(a=Ud(a)),f(a,function(b,c){b.nodeType==le&&b.nodeValue.match(/\S+/)&&(a[c]=Ud(b).wrap("<span></span>").parent()[0])});var g=J(a,b,a,c,d,e);F.$$addScopeClass(a);var h=null;return function(b,c,d){db(b,"scope"),d=d||{};var e=d.parentBoundTranscludeFn,f=d.transcludeControllers,i=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude),h||(h=G(i));var j;if(j="html"!==h?Ud($(h,Ud("<div>").append(a).html())):c?De.clone.call(a):a,f)for(var k in f)j.data("$"+k+"Controller",f[k].instance);return F.$$addScopeInfo(j,b),c&&c(j,b),g&&g(b,j,j,e),j}}function G(a){var b=a&&a[0];return b&&"foreignobject"!==H(b)&&b.toString().match(/SVG/)?"svg":"html"}function J(a,b,d,e,f,g){function h(a,d,e,f){var g,h,i,j,k,l,m,n,q;if(o){var r=d.length;for(q=new Array(r),k=0;k<p.length;k+=3)m=p[k],q[m]=d[m]}else q=d;for(k=0,l=p.length;l>k;)i=q[p[k++]],g=p[k++],h=p[k++],g?(g.scope?(j=a.$new(),F.$$addScopeInfo(Ud(i),j)):j=a,n=g.transcludeOnThisElement?K(a,g.transclude,f,g.elementTranscludeOnThisElement):!g.templateOnThisElement&&f?f:!f&&b?K(a,b):null,g(h,j,i,e,n)):h&&h(a,i.childNodes,c,f)}for(var i,j,k,l,m,n,o,p=[],q=0;q<a.length;q++)i=new gb,j=M(a[q],[],i,0===q?e:c,f),k=j.length?Q(j,a[q],i,b,d,null,[],[],g):null,k&&k.scope&&F.$$addScopeClass(i.$$element),m=k&&k.terminal||!(l=a[q].childNodes)||!l.length?null:J(l,k?(k.transcludeOnThisElement||!k.templateOnThisElement)&&k.transclude:b),(k||m)&&(p.push(q,k,m),n=!0,o=o||k),g=null;return n?h:null}function K(a,b,c){var d=function(d,e,f,g,h){return d||(d=a.$new(!1,h),d.$$transcluded=!0),b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})};return d}function M(a,b,c,d,e){var f,g,h=a.nodeType,i=c.$attr;switch(h){case ke:T(b,Yb(H(a)),"E",d,e);for(var l,m,n,o,p,q,r=a.attributes,s=0,t=r&&r.length;t>s;s++){var v=!1,w=!1;l=r[s],m=l.name,p=ee(l.value),o=Yb(m),(q=lb.test(o))&&(m=bb(o.substr(6),"-"));var x=o.replace(/(Start|End)$/,"");U(x)&&o===x+"Start"&&(v=m,w=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6)),n=Yb(m.toLowerCase()),i[n]=m,(q||!c.hasOwnProperty(n))&&(c[n]=p,Jb(a,n)&&(c[n]=!0)),ab(a,b,p,n,q),T(b,n,"A",d,e,v,w)}if(g=a.className,u(g)&&""!==g)for(;f=k.exec(g);)n=Yb(f[2]),T(b,n,"C",d,e)&&(c[n]=ee(f[3])),g=g.substr(f.index+f[0].length);break;case le:Z(b,a.nodeValue);break;case me:try{f=j.exec(a.nodeValue),f&&(n=Yb(f[1]),T(b,n,"M",d,e)&&(c[n]=ee(f[2])))}catch(y){}}return b.sort(X),b}function O(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw Oe("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",b,c);a.nodeType==ke&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--),d.push(a),a=a.nextSibling}while(e>0)}else d.push(a);return Ud(d)}function P(a,b,c){return function(d,e,f,g,h){return e=O(e[0],b,c),a(d,e,f,g,h)}}function Q(a,g,h,i,j,k,l,m,n){function o(a,b,c,d){a&&(c&&(a=P(a,c,d)),a.require=z.require,a.directiveName=B,(I===z||z.$$isolateScope)&&(a=eb(a,{isolateScope:!0})),l.push(a)),b&&(c&&(b=P(b,c,d)),b.require=z.require,b.directiveName=B,(I===z||z.$$isolateScope)&&(b=eb(b,{isolateScope:!0})),m.push(b))}function p(a,b,c,d){var e,g,h="data",i=!1,j=c;if(u(b)){if(g=b.match(r),b=b.substring(g[0].length),g[3]&&(g[1]?g[3]=null:g[1]=g[3]),"^"===g[1]?h="inheritedData":"^^"===g[1]&&(h="inheritedData",j=c.parent()),"?"===g[2]&&(i=!0),e=null,d&&"data"===h&&(e=d[b])&&(e=e.instance),e=e||j[h]("$"+b+"Controller"),!e&&!i)throw Oe("ctreq","Controller '{0}', required by directive '{1}', can't be found!",b,a);return e||null}return de(b)&&(e=[],f(b,function(b){e.push(p(a,b,c,d))})),e}function v(a,b,e,i,j){function k(a,b,d){var e;return A(a)||(d=b,b=a,a=c),U&&(e=v),d||(d=U?x.parent():x),j(a,b,e,d,D)}var n,o,r,t,u,v,w,x,z;if(g===e?(z=h,x=h.$$element):(x=Ud(e),z=new gb(x,h)),I&&(u=b.$new(!0)),j&&(w=k,w.$$boundTransclude=j),H&&(y={},v={},f(H,function(a){var c,d={$scope:a===I||a.$$isolateScope?u:b,$element:x,$attrs:z,$transclude:w};t=a.controller,"@"==t&&(t=z[a.name]),c=s(t,d,!0,a.controllerAs),v[a.name]=c,U||x.data("$"+a.name+"Controller",c.instance),y[a.name]=c})),I){F.$$addScopeInfo(x,u,!0,!(J&&(J===I||J===I.$$originalDirective))),F.$$addScopeClass(x,!0);var B=y&&y[I.name],C=u;B&&B.identifier&&I.bindToController===!0&&(C=B.instance),f(u.$$isolateBindings=I.$$isolateBindings,function(a,c){var e,f,g,h,i=a.attrName,j=a.optional,k=a.mode;switch(k){case"@":z.$observe(i,function(a){C[c]=a}),z.$$observers[i].$$scope=b,z[i]&&(C[c]=d(z[i])(b));break;case"=":if(j&&!z[i])return;f=q(z[i]),h=f.literal?L:function(a,b){return a===b||a!==a&&b!==b},g=f.assign||function(){throw e=C[c]=f(b),Oe("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",z[i],I.name)},e=C[c]=f(b);var l=function(a){return h(a,C[c])||(h(a,e)?g(b,a=C[c]):C[c]=a),e=a};l.$stateful=!0;var m;m=a.collection?b.$watchCollection(z[i],l):b.$watch(q(z[i],l),null,f.literal),u.$on("$destroy",m);break;case"&":f=q(z[i]),C[c]=function(a){return f(b,a)}}})}for(y&&(f(y,function(a){a()}),y=null),n=0,o=l.length;o>n;n++)r=l[n],fb(r,r.isolateScope?u:b,x,z,r.require&&p(r.directiveName,r.require,x,v),w);var D=b;for(I&&(I.template||null===I.templateUrl)&&(D=u),a&&a(D,e.childNodes,c,j),n=m.length-1;n>=0;n--)r=m[n],fb(r,r.isolateScope?u:b,x,z,r.require&&p(r.directiveName,r.require,x,v),w)}n=n||{};for(var w,y,z,B,C,D,E,G=-Number.MAX_VALUE,H=n.controllerDirectives,I=n.newIsolateScopeDirective,J=n.templateDirective,K=n.nonTlbTranscludeDirective,Q=!1,T=!1,U=n.hasElementTranscludeDirective,X=h.$$element=Ud(g),Z=k,_=i,ab=0,bb=a.length;bb>ab;ab++){z=a[ab];var db=z.$$start,hb=z.$$end;if(db&&(X=O(g,db,hb)),C=c,G>z.priority)break;if((E=z.scope)&&(z.templateUrl||(t(E)?(Y("new/isolated scope",I||w,z,X),I=z):Y("new/isolated scope",I,z,X)),w=w||z),B=z.name,!z.templateUrl&&z.controller&&(E=z.controller,H=H||{},Y("'"+B+"' controller",H[B],z,X),H[B]=z),(E=z.transclude)&&(Q=!0,z.$$tlb||(Y("transclusion",K,z,X),K=z),"element"==E?(U=!0,G=z.priority,C=X,X=h.$$element=Ud(b.createComment(" "+B+": "+h[B]+" ")),g=X[0],cb(j,N(C),g),_=F(C,i,G,Z&&Z.name,{nonTlbTranscludeDirective:K})):(C=Ud(ub(g)).contents(),X.empty(),_=F(C,i))),z.template)if(T=!0,Y("template",J,z,X),J=z,E=x(z.template)?z.template(X,h):z.template,E=kb(E),z.replace){if(Z=z,C=pb(E)?[]:$b($(z.templateNamespace,ee(E))),g=C[0],1!=C.length||g.nodeType!==ke)throw Oe("tplrt","Template for directive '{0}' must have exactly one root element. {1}",B,"");cb(j,X,g);var ib={$attr:{}},jb=M(g,[],ib),lb=a.splice(ab+1,a.length-(ab+1));I&&R(jb),a=a.concat(jb).concat(lb),V(h,ib),bb=a.length}else X.html(E);if(z.templateUrl)T=!0,Y("template",J,z,X),J=z,z.replace&&(Z=z),v=W(a.splice(ab,a.length-ab),X,h,j,Q&&_,l,m,{controllerDirectives:H,newIsolateScopeDirective:I,templateDirective:J,nonTlbTranscludeDirective:K}),bb=a.length;else if(z.compile)try{D=z.compile(X,h,_),x(D)?o(null,D,db,hb):D&&o(D.pre,D.post,db,hb)}catch(mb){e(mb,S(X))}z.terminal&&(v.terminal=!0,G=Math.max(G,z.priority))}return v.scope=w&&w.scope===!0,v.transcludeOnThisElement=Q,v.elementTranscludeOnThisElement=U,v.templateOnThisElement=T,v.transclude=_,n.hasElementTranscludeDirective=U,v}function R(a){for(var b=0,c=a.length;c>b;b++)a[b]=n(a[b],{$$isolateScope:!0})}function T(b,d,f,i,j,k,l){if(d===j)return null;var m=null;if(g.hasOwnProperty(d))for(var o,p=a.get(d+h),q=0,r=p.length;r>q;q++)try{o=p[q],(i===c||i>o.priority)&&-1!=o.restrict.indexOf(f)&&(k&&(o=n(o,{$$start:k,$$end:l})),b.push(o),m=o)}catch(s){e(s)}return m}function U(b){if(g.hasOwnProperty(b))for(var c,d=a.get(b+h),e=0,f=d.length;f>e;e++)if(c=d[e],c.multiElement)return!0;return!1}function V(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;f(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))}),f(b,function(b,f){"class"==f?(E(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function W(a,b,c,d,e,g,h,j){var k,m,n=[],o=b[0],p=a.shift(),q=l({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),r=x(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,s=p.templateNamespace;return b.empty(),i(B.getTrustedResourceUrl(r)).then(function(i){var l,u,v,w;if(i=kb(i),p.replace){if(v=pb(i)?[]:$b($(s,ee(i))),l=v[0],1!=v.length||l.nodeType!==ke)throw Oe("tplrt","Template for directive '{0}' must have exactly one root element. {1}",p.name,r);u={$attr:{}},cb(d,b,l);var x=M(l,[],u);t(p.scope)&&R(x),a=x.concat(a),V(c,u)}else l=o,b.html(i);for(a.unshift(q),k=Q(a,l,c,e,b,p,g,h,j),f(d,function(a,c){a==l&&(d[c]=b[0])}),m=J(b[0].childNodes,e);n.length;){var y=n.shift(),z=n.shift(),A=n.shift(),B=n.shift(),C=b[0];if(!y.$$destroyed){if(z!==o){var D=z.className;j.hasElementTranscludeDirective&&p.replace||(C=ub(l)),cb(A,Ud(z),C),E(Ud(C),D)}w=k.transcludeOnThisElement?K(y,k.transclude,B):B,k(m,y,C,d,w)}}n=null}),function(a,b,c,d,e){var f=e;b.$$destroyed||(n?n.push(b,c,d,f):(k.transcludeOnThisElement&&(f=K(b,k.transclude,e)),k(m,b,c,d,f)))}}function X(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Y(a,b,c,d){if(b)throw Oe("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",b.name,c.name,a,S(d))}function Z(a,b){var c=d(b,!0);c&&a.push({priority:0,compile:function(a){var b=a.parent(),d=!!b.length;return d&&F.$$addBindingClass(b),function(a,b){var e=b.parent();d||F.$$addBindingClass(e),F.$$addBindingInfo(e,c.expressions),a.$watch(c,function(a){b[0].nodeValue=a})}}})}function $(a,c){switch(a=Od(a||"html")){case"svg":case"math":var d=b.createElement("div");return d.innerHTML="<"+a+">"+c+"</"+a+">",d.childNodes[0].childNodes;default:return c}}function _(a,b){if("srcdoc"==b)return B.HTML;var c=H(a);return"xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b)?B.RESOURCE_URL:void 0}function ab(a,b,c,e,f){var g=d(c,!0);if(g){if("multiple"===e&&"select"===H(a))throw Oe("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",S(a));b.push({priority:100,compile:function(){return{pre:function(b,c,h){var i=h.$$observers||(h.$$observers={});if(v.test(e))throw Oe("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");h[e]&&(g=d(h[e],!0,_(a,e),m[e]||f),g&&(h[e]=g(b),(i[e]||(i[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||b).$watch(g,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)})))}}}})}}function cb(a,c,d){var e,f,g=c[0],h=c.length,i=g.parentNode;if(a)for(e=0,f=a.length;f>e;e++)if(a[e]==g){a[e++]=d;for(var j=e,k=j+h-1,l=a.length;l>j;j++,k++)l>k?a[j]=a[k]:delete a[j];a.length-=h-1,a.context===g&&(a.context=d);break}i&&i.replaceChild(d,g);var m=b.createDocumentFragment();m.appendChild(g),Ud(d).data(Ud(g).data()),Vd?(ce=!0,Vd.cleanData([g])):delete Ud.cache[g[Ud.expando]];for(var n=1,o=c.length;o>n;n++){var p=c[n];Ud(p).remove(),m.appendChild(p),delete c[n]}c[0]=d,c.length=1}function eb(a,b){return l(function(){return a.apply(null,arguments)},a,b)}function fb(a,b,c,d,f,g){try{a(b,c,d,f,g)}catch(h){e(h,S(c))}}var gb=function(a,b){if(b){var c,d,e,f=Object.keys(b);for(c=0,d=f.length;d>c;c++)e=f[c],this[e]=b[e]}else this.$attr={};this.$$element=a};gb.prototype={$normalize:Yb,$addClass:function(a){a&&a.length>0&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&a.length>0&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Zb(a,b);c&&c.length&&C.addClass(this.$$element,c);var d=Zb(b,a);d&&d.length&&C.removeClass(this.$$element,d)},$set:function(a,b,d,g){var h,i=this.$$element[0],j=Jb(i,a),k=Kb(i,a),l=a;if(j?(this.$$element.prop(a,b),g=j):k&&(this[k]=b,l=k),this[a]=b,g?this.$attr[a]=g:(g=this.$attr[a],g||(this.$attr[a]=g=bb(a,"-"))),h=H(this.$$element),"a"===h&&"href"===a||"img"===h&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===h&&"srcset"===a){for(var m="",n=ee(b),o=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,p=/\s/.test(n)?o:/(,)/,q=n.split(p),r=Math.floor(q.length/2),s=0;r>s;s++){var t=2*s;m+=D(ee(q[t]),!0),m+=" "+ee(q[t+1])}var u=ee(q[2*s]).split(/\s/);m+=D(ee(u[0]),!0),2===u.length&&(m+=" "+ee(u[1])),this[a]=b=m}d!==!1&&(null===b||b===c?this.$$element.removeAttr(g):this.$$element.attr(g,b));var v=this.$$observers;v&&f(v[l],function(a){try{a(b)}catch(c){e(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ib()),e=d[a]||(d[a]=[]);return e.push(b),y.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])}),function(){I(e,b)}}};var hb=d.startSymbol(),jb=d.endSymbol(),kb="{{"==hb||"}}"==jb?p:function(a){return a.replace(/\{\{/g,hb).replace(/}}/g,jb)},lb=/^ngAttr[A-Z]/;return F.$$addBindingInfo=w?function(a,b){var c=a.data("$binding")||[];de(b)?c=c.concat(b):c.push(b),a.data("$binding",c)}:o,F.$$addBindingClass=w?function(a){E(a,"ng-binding")}:o,F.$$addScopeInfo=w?function(a,b,c,d){var e=c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope";a.data(e,b)}:o,F.$$addScopeClass=w?function(a,b){E(a,b?"ng-isolate-scope":"ng-scope")}:o,F}]}function Yb(a){return ob(a.replace(Pe,""))}function Zb(a,b){var c="",d=a.split(/\s+/),e=b.split(/\s+/);a:for(var f=0;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(c.length>0?" ":"")+g}return c}function $b(a){a=Ud(a);var b=a.length;if(1>=b)return a;for(;b--;){var c=a[b];c.nodeType===me&&Yd.call(a,b,1)}return a}function _b(){var a={},b=!1,e=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(b,c){fb(b,"controller"),t(b)?l(a,b):a[b]=c},this.allowGlobals=function(){b=!0},this.$get=["$injector","$window",function(f,g){function h(a,b,c,e){if(!a||!t(a.$scope))throw d("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",e,b);a.$scope[b]=c}return function(d,i,j,k){var m,n,o,p;if(j=j===!0,k&&u(k)&&(p=k),u(d)&&(n=d.match(e),o=n[1],p=p||n[3],d=a.hasOwnProperty(o)?a[o]:gb(i.$scope,o,!0)||(b?gb(g,o,!0):c),eb(d,o,!0)),j){var q=(de(d)?d[d.length-1]:d).prototype;return m=Object.create(q),p&&h(i,p,m,o||d.name),l(function(){return f.invoke(d,m,i,o),m},{instance:m,identifier:p})}return m=f.instantiate(d,i,o),p&&h(i,p,m,o||d.name),m}}]}function ac(){this.$get=["$window",function(a){return Ud(a.document)}]}function bc(){this.$get=["$log",function(a){return function(){a.error.apply(a,arguments)}}]}function cc(a,b){if(u(a)){a=a.replace(Ue,"");var c=b("Content-Type");(c&&0===c.indexOf(Qe)&&a.trim()||Se.test(a)&&Te.test(a))&&(a=R(a))}return a}function dc(a){var b,c,d,e=ib();return a?(f(a.split("\n"),function(a){d=a.indexOf(":"),b=Od(ee(a.substr(0,d))),c=ee(a.substr(d+1)),b&&(e[b]=e[b]?e[b]+", "+c:c)}),e):e}function ec(a){var b=t(a)?a:c;return function(c){if(b||(b=dc(a)),c){var d=b[Od(c)];return void 0===d&&(d=null),d}return b}}function fc(a,b,c){return x(c)?c(a,b):(f(c,function(c){a=c(a,b)}),a)}function gc(a){return a>=200&&300>a}function hc(){var a=this.defaults={transformResponse:[cc],transformRequest:[function(a){return!t(a)||B(a)||C(a)?a:Q(a)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:K(Re),put:K(Re),patch:K(Re)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},b=!1;this.useApplyAsync=function(a){return s(a)?(b=!!a,this):b};var e=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(g,i,j,k,m,n){function o(b){function e(a){var b=l({},a);return b.data=a.data?fc(a.data,a.headers,h.transformResponse):a.data,gc(a.status)?b:m.reject(b)}function g(b){function c(a){var b;f(a,function(c,d){x(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})}var d,e,g,h=a.headers,i=l({},b.headers);h=l({},h.common,h[Od(b.method)]);a:for(d in h){e=Od(d);for(g in i)if(Od(g)===e)continue a;i[d]=h[d]}return c(i),i}var h={method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse},i=g(b);if(!ae.isObject(b))throw d("$http")("badreq","Http request configuration must be an object.  Received: {0}",b);l(h,b),h.headers=i,h.method=Qd(h.method);var j=function(b){i=b.headers;var c=fc(b.data,ec(i),b.transformRequest);return r(c)&&f(i,function(a,b){"content-type"===Od(b)&&delete i[b]}),r(b.withCredentials)&&!r(a.withCredentials)&&(b.withCredentials=a.withCredentials),v(b,c,i).then(e,e)},k=[j,c],n=m.when(h);for(f(A,function(a){(a.request||a.requestError)&&k.unshift(a.request,a.requestError),(a.response||a.responseError)&&k.push(a.response,a.responseError)});k.length;){var o=k.shift(),p=k.shift();n=n.then(o,p)}return n.success=function(a){return n.then(function(b){a(b.data,b.status,b.headers,h)}),n},n.error=function(a){return n.then(null,function(b){a(b.data,b.status,b.headers,h)}),n},n}function p(){f(arguments,function(a){o[a]=function(b,c){return o(l(c||{},{method:a,url:b}))}})}function q(){f(arguments,function(a){o[a]=function(b,c,d){return o(l(d||{},{method:a,url:b,data:c}))}})}function v(d,e,f){function h(a,c,d,e){function f(){j(c,a,d,e)}n&&(gc(a)?n.put(v,[a,c,dc(d),e]):n.remove(v)),b?k.$applyAsync(f):(f(),k.$$phase||k.$apply())}function j(a,b,c,e){b=Math.max(b,0),(gc(b)?q.resolve:q.reject)({data:a,status:b,headers:ec(c),config:d,statusText:e})}function l(){var a=o.pendingRequests.indexOf(d);-1!==a&&o.pendingRequests.splice(a,1)}var n,p,q=m.defer(),u=q.promise,v=y(d.url,d.params);if(o.pendingRequests.push(d),u.then(l,l),!d.cache&&!a.cache||d.cache===!1||"GET"!==d.method&&"JSONP"!==d.method||(n=t(d.cache)?d.cache:t(a.cache)?a.cache:z),n)if(p=n.get(v),s(p)){if(E(p))return p.then(l,l),p;de(p)?j(p[1],p[0],K(p[2]),p[3]):j(p,200,{},"OK")}else n.put(v,u);if(r(p)){var w=ad(d.url)?i.cookies()[d.xsrfCookieName||a.xsrfCookieName]:c;w&&(f[d.xsrfHeaderName||a.xsrfHeaderName]=w),g(d.method,v,e,h,f,d.timeout,d.withCredentials,d.responseType)}return u}function y(a,b){if(!b)return a;var c=[];return h(b,function(a,b){null===a||r(a)||(de(a)||(a=[a]),f(a,function(a){t(a)&&(a=w(a)?a.toISOString():Q(a)),c.push(X(b)+"="+X(a))}))}),c.length>0&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&")),a}var z=j("$http"),A=[];return f(e,function(a){A.unshift(u(a)?n.get(a):n.invoke(a))}),o.pendingRequests=[],p("get","delete","head","jsonp"),q("post","put","patch"),o.defaults=a,o}]}function ic(){return new a.XMLHttpRequest}function jc(){this.$get=["$browser","$window","$document",function(a,b,c){return kc(a,ic,a.defer,b.angular.callbacks,c[0])}]}function kc(a,b,c,d,e){function g(a,b,c){var f=e.createElement("script"),g=null;return f.type="text/javascript",f.src=a,f.async=!0,g=function(a){te(f,"load",g),te(f,"error",g),e.body.removeChild(f),f=null;var h=-1,i="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),i=a.type,h="error"===a.type?404:200),c&&c(h,i)},se(f,"load",g),se(f,"error",g),e.body.appendChild(f),g}return function(e,h,i,j,k,l,m,n){function p(){t&&t(),u&&u.abort()}function q(b,d,e,f,g){x&&c.cancel(x),t=u=null,b(d,e,f,g),a.$$completeOutstandingRequest(o)}if(a.$$incOutstandingRequestCount(),h=h||a.url(),"jsonp"==Od(e)){var r="_"+(d.counter++).toString(36);d[r]=function(a){d[r].data=a,d[r].called=!0};var t=g(h.replace("JSON_CALLBACK","angular.callbacks."+r),r,function(a,b){q(j,a,d[r].data,"",b),d[r]=o})}else{var u=b();u.open(e,h,!0),f(k,function(a,b){s(a)&&u.setRequestHeader(b,a)}),u.onload=function(){var a=u.statusText||"",b="response"in u?u.response:u.responseText,c=1223===u.status?204:u.status;0===c&&(c=b?200:"file"==_c(h).protocol?404:0),q(j,c,b,u.getAllResponseHeaders(),a)};var v=function(){q(j,-1,null,null,"")};if(u.onerror=v,u.onabort=v,m&&(u.withCredentials=!0),n)try{u.responseType=n}catch(w){if("json"!==n)throw w}u.send(i||null)}if(l>0)var x=c(p,l);else E(l)&&l.then(p)}}function lc(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a},this.endSymbol=function(a){return a?(b=a,this):b},this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,m,n){function o(c){return c.replace(j,a).replace(k,b)}function p(a){try{return a=D(a),n&&!s(a)?a:E(a)}catch(b){var c=Ve("interr","Can't interpolate: {0}\n{1}",f,b.toString());d(c)}}n=!!n;for(var q,t,u,v=0,w=[],y=[],z=f.length,A=[],B=[];z>v;){if(-1==(q=f.indexOf(a,v))||-1==(t=f.indexOf(b,q+h))){v!==z&&A.push(o(f.substring(v)));break}v!==q&&A.push(o(f.substring(v,q))),u=f.substring(q+h,t),w.push(u),y.push(c(u,p)),v=t+i,B.push(A.length),A.push("")
}if(m&&A.length>1)throw Ve("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",f);if(!g||w.length){var C=function(a){for(var b=0,c=w.length;c>b;b++){if(n&&r(a[b]))return;A[B[b]]=a[b]}return A.join("")},D=function(a){return m?e.getTrusted(m,a):e.valueOf(a)},E=function(a){if(null==a)return"";switch(typeof a){case"string":break;case"number":a=""+a;break;default:a=Q(a)}return a};return l(function(a){var b=0,c=w.length,e=new Array(c);try{for(;c>b;b++)e[b]=y[b](a);return C(e)}catch(g){var h=Ve("interr","Can't interpolate: {0}\n{1}",f,g.toString());d(h)}},{exp:f,expressions:w,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(y,function(c,e){var f=C(c);x(b)&&b.call(this,f,c!==e?d:f,a),d=f},c)}})}}var h=a.length,i=b.length,j=new RegExp(a.replace(/./g,f),"g"),k=new RegExp(b.replace(/./g,f),"g");return g.startSymbol=function(){return a},g.endSymbol=function(){return b},g}]}function mc(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,c,d){function e(e,g,h,i){var j=b.setInterval,k=b.clearInterval,l=0,m=s(i)&&!i,n=(m?d:c).defer(),o=n.promise;return h=s(h)?h:0,o.then(null,null,e),o.$$intervalId=j(function(){n.notify(l++),h>0&&l>=h&&(n.resolve(l),k(o.$$intervalId),delete f[o.$$intervalId]),m||a.$apply()},g),f[o.$$intervalId]=n,o}var f={};return e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1},e}]}function nc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(a){return 1===a?"one":"other"}}}}function oc(a){for(var b=a.split("/"),c=b.length;c--;)b[c]=W(b[c]);return b.join("/")}function pc(a,b){var c=_c(a);b.$$protocol=c.protocol,b.$$host=c.hostname,b.$$port=m(c.port)||Xe[c.protocol]||null}function qc(a,b){var c="/"!==a.charAt(0);c&&(a="/"+a);var d=_c(a);b.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname),b.$$search=U(d.search),b.$$hash=decodeURIComponent(d.hash),b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function rc(a,b){return 0===b.indexOf(a)?b.substr(a.length):void 0}function sc(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function tc(a){return a.substr(0,sc(a).lastIndexOf("/")+1)}function uc(a){return a.substring(0,a.indexOf("/",a.indexOf("//")+2))}function vc(a,b){this.$$html5=!0,b=b||"";var d=tc(a);pc(a,this),this.$$parse=function(a){var b=rc(d,a);if(!u(b))throw Ye("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',a,d);qc(b,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var a=V(this.$$search),b=this.$$hash?"#"+W(this.$$hash):"";this.$$url=oc(this.$$path)+(a?"?"+a:"")+b,this.$$absUrl=d+this.$$url.substr(1)},this.$$parseLinkUrl=function(e,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var g,h,i;return(g=rc(a,e))!==c?(h=g,i=(g=rc(b,g))!==c?d+(rc("/",g)||g):a+h):(g=rc(d,e))!==c?i=d+g:d==e+"/"&&(i=d),i&&this.$$parse(i),!!i}}function wc(a,b){var c=tc(a);pc(a,this),this.$$parse=function(d){function e(a,b,c){var d,e=/^\/[A-Z]:(\/.*)/;return 0===b.indexOf(c)&&(b=b.replace(c,"")),e.exec(b)?a:(d=e.exec(a),d?d[1]:a)}var f=rc(a,d)||rc(c,d),g="#"==f.charAt(0)?rc(b,f):this.$$html5?f:"";if(!u(g))throw Ye("ihshprfx",'Invalid url "{0}", missing hash prefix "{1}".',d,b);qc(g,this),this.$$path=e(this.$$path,g,a),this.$$compose()},this.$$compose=function(){var c=V(this.$$search),d=this.$$hash?"#"+W(this.$$hash):"";this.$$url=oc(this.$$path)+(c?"?"+c:"")+d,this.$$absUrl=a+(this.$$url?b+this.$$url:"")},this.$$parseLinkUrl=function(b){return sc(a)==sc(b)?(this.$$parse(b),!0):!1}}function xc(a,b){this.$$html5=!0,wc.apply(this,arguments);var c=tc(a);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;return a==sc(d)?f=d:(g=rc(c,d))?f=a+b+g:c===d+"/"&&(f=c),f&&this.$$parse(f),!!f},this.$$compose=function(){var c=V(this.$$search),d=this.$$hash?"#"+W(this.$$hash):"";this.$$url=oc(this.$$path)+(c?"?"+c:"")+d,this.$$absUrl=a+b+this.$$url}}function yc(a){return function(){return this[a]}}function zc(a,b){return function(c){return r(c)?this[a]:(this[a]=b(c),this.$$compose(),this)}}function Ac(){var b="",c={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return s(a)?(b=a,this):b},this.html5Mode=function(a){return D(a)?(c.enabled=a,this):t(a)?(D(a.enabled)&&(c.enabled=a.enabled),D(a.requireBase)&&(c.requireBase=a.requireBase),D(a.rewriteLinks)&&(c.rewriteLinks=a.rewriteLinks),this):c},this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(d,e,f,g){function h(a,b,c){var d=j.url(),f=j.$$state;try{e.url(a,b,c),j.$$state=e.state()}catch(g){throw j.url(d),j.$$state=f,g}}function i(a,b){d.$broadcast("$locationChangeSuccess",j.absUrl(),a,j.$$state,b)}var j,k,l,m=e.baseHref(),n=e.url();if(c.enabled){if(!m&&c.requireBase)throw Ye("nobase","$location in HTML5 mode requires a <base> tag to be present!");l=uc(n)+(m||"/"),k=f.history?vc:xc}else l=sc(n),k=wc;j=new k(l,"#"+b),j.$$parseLinkUrl(n,n),j.$$state=e.state();var o=/^\s*(javascript|mailto):/i;g.on("click",function(b){if(c.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var f=Ud(b.target);"a"!==H(f[0]);)if(f[0]===g[0]||!(f=f.parent())[0])return;var h=f.prop("href"),i=f.attr("href")||f.attr("xlink:href");t(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=_c(h.animVal).href),o.test(h)||!h||f.attr("target")||b.isDefaultPrevented()||j.$$parseLinkUrl(h,i)&&(b.preventDefault(),j.absUrl()!=e.url()&&(d.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),j.absUrl()!=n&&e.url(j.absUrl(),!0);var p=!0;return e.onUrlChange(function(a,b){d.$evalAsync(function(){var c,e=j.absUrl(),f=j.$$state;j.$$parse(a),j.$$state=b,c=d.$broadcast("$locationChangeStart",a,e,b,f).defaultPrevented,j.absUrl()===a&&(c?(j.$$parse(e),j.$$state=f,h(e,!1,f)):(p=!1,i(e,f)))}),d.$$phase||d.$digest()}),d.$watch(function(){var a=e.url(),b=e.state(),c=j.$$replace,g=a!==j.absUrl()||j.$$html5&&f.history&&b!==j.$$state;(p||g)&&(p=!1,d.$evalAsync(function(){var e=j.absUrl(),f=d.$broadcast("$locationChangeStart",e,a,j.$$state,b).defaultPrevented;j.absUrl()===e&&(f?(j.$$parse(a),j.$$state=b):(g&&h(e,c,b===j.$$state?null:j.$$state),i(a,b)))})),j.$$replace=!1}),j}]}function Bc(){var a=!0,b=this;this.debugEnabled=function(b){return s(b)?(a=b,this):a},this.$get=["$window",function(c){function d(a){return a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line)),a}function e(a){var b=c.console||{},e=b[a]||b.log||o,g=!1;try{g=!!e.apply}catch(h){}return g?function(){var a=[];return f(arguments,function(b){a.push(d(b))}),e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Cc(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw $e("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",b);return a}function Dc(a,b){if(a){if(a.constructor===a)throw $e("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",b);if(a.window===a)throw $e("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw $e("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",b);if(a===Object)throw $e("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",b)}return a}function Ec(a,b){if(a){if(a.constructor===a)throw $e("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",b);if(a===_e||a===af||a===bf)throw $e("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",b)}}function Fc(a){return a.constant}function Gc(a,b,c,d){Dc(a,d);for(var e,f=b.split("."),g=0;f.length>1;g++){e=Cc(f.shift(),d);var h=Dc(a[e],d);h||(h={},a[e]=h),a=h}return e=Cc(f.shift(),d),Dc(a[e],d),a[e]=c,c}function Hc(a){return"constructor"==a}function Ic(a,b,d,e,f,g,h){Cc(a,g),Cc(b,g),Cc(d,g),Cc(e,g),Cc(f,g);var i=function(a){return Dc(a,g)},j=h||Hc(a)?i:p,k=h||Hc(b)?i:p,l=h||Hc(d)?i:p,m=h||Hc(e)?i:p,n=h||Hc(f)?i:p;return function(g,h){var i=h&&h.hasOwnProperty(a)?h:g;return null==i?i:(i=j(i[a]),b?null==i?c:(i=k(i[b]),d?null==i?c:(i=l(i[d]),e?null==i?c:(i=m(i[e]),f?null==i?c:i=n(i[f]):i):i):i):i)}}function Jc(a,b){return function(c,d){return a(c,d,Dc,b)}}function Kc(a,b,d){var e=b.expensiveChecks,g=e?jf:hf,h=g[a];if(h)return h;var i=a.split("."),j=i.length;if(b.csp)h=6>j?Ic(i[0],i[1],i[2],i[3],i[4],d,e):function(a,b){var f,g=0;do f=Ic(i[g++],i[g++],i[g++],i[g++],i[g++],d,e)(a,b),b=c,a=f;while(j>g);return f};else{var k="";e&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=e;f(i,function(a,b){Cc(a,d);var c=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;(e||Hc(a))&&(c="eso("+c+", fe)",l=!0),k+="if(s == null) return undefined;\ns="+c+";\n"}),k+="return s;";var m=new Function("s","l","eso","fe",k);m.toString=q(k),l&&(m=Jc(m,d)),h=m}return h.sharedGetter=!0,h.assign=function(b,c){return Gc(b,a,c,a)},g[a]=h,h}function Lc(a){return x(a.valueOf)?a.valueOf():kf.call(a)}function Mc(){var a=ib(),b=ib();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;return a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign),b}function g(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];e.constant||(e.inputs?g(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function h(a,b){return null==a||null==b?a===b:"object"==typeof a&&(a=Lc(a),"object"==typeof a)?!1:a===b||a!==a&&b!==b}function i(a,b,c,d){var e,f=d.$$inputs||(d.$$inputs=g(d.inputs,[]));if(1===f.length){var i=h;return f=f[0],a.$watch(function(a){var b=f(a);return h(b,i)||(e=d(a),i=b&&Lc(b)),e},b,c)}for(var j=[],k=0,l=f.length;l>k;k++)j[k]=h;return a.$watch(function(a){for(var b=!1,c=0,g=f.length;g>c;c++){var i=f[c](a);(b||(b=!h(i,j[c])))&&(j[c]=i&&Lc(i))}return b&&(e=d(a)),e},b,c)}function j(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a,x(b)&&b.apply(this,arguments),s(a)&&d.$$postDigest(function(){s(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;return f(a,function(a){s(a)||(b=!1)}),b}var g,h;return g=a.$watch(function(a){return d(a)},function(a,c,d){h=a,x(b)&&b.call(this,a,c,d),e(a)&&d.$$postDigest(function(){e(h)&&g()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(){x(b)&&b.apply(this,arguments),e()},c)}function m(a,b){if(!b)return a;var c=a.$$watchDelegate,d=c!==k&&c!==j,e=d?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return s(e)?f:e};return a.$$watchDelegate&&a.$$watchDelegate!==i?e.$$watchDelegate=a.$$watchDelegate:b.$stateful||(e.$$watchDelegate=i,e.inputs=[a]),e}var n={csp:d.csp,expensiveChecks:!1},p={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var h,q,r;switch(typeof d){case"string":r=d=d.trim();var s=g?b:a;if(h=s[r],!h){":"===d.charAt(0)&&":"===d.charAt(1)&&(q=!0,d=d.substring(2));var t=g?p:n,u=new ff(t),v=new gf(u,c,t);h=v.parse(d),h.constant?h.$$watchDelegate=l:q?(h=e(h),h.$$watchDelegate=h.literal?k:j):h.inputs&&(h.$$watchDelegate=i),s[r]=h}return m(h,f);case"function":return m(d,f);default:return m(o,f)}}}]}function Nc(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return Pc(function(b){a.$evalAsync(b)},b)}]}function Oc(){this.$get=["$browser","$exceptionHandler",function(a,b){return Pc(function(b){a.defer(b)},b)}]}function Pc(a,b){function e(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function g(){this.$$state={status:0}}function h(a,b){return function(c){b.call(a,c)}}function i(a){var d,e,f;f=a.pending,a.processScheduled=!1,a.pending=c;for(var g=0,h=f.length;h>g;++g){e=f[g][0],d=f[g][a.status];try{x(d)?e.resolve(d(a.value)):1===a.status?e.resolve(a.value):e.reject(a.value)}catch(i){e.reject(i),b(i)}}}function j(b){!b.processScheduled&&b.pending&&(b.processScheduled=!0,a(function(){i(b)}))}function k(){this.promise=new g,this.resolve=h(this,this.resolve),this.reject=h(this,this.reject),this.notify=h(this,this.notify)}function l(a){var b=new k,c=0,d=de(a)?[]:{};return f(a,function(a,e){c++,r(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})}),0===c&&b.resolve(d),b.promise}var m=d("$q",TypeError),n=function(){return new k};g.prototype={then:function(a,b,c){var d=new k;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([d,a,b,c]),this.$$state.status>0&&j(this.$$state),d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return q(b,!0,a)},function(b){return q(b,!1,a)},b)}},k.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(m("qcycle","Expected promise to be resolved with value other than itself '{0}'",a)):this.$$resolve(a))},$$resolve:function(a){var c,d;d=e(this,this.$$resolve,this.$$reject);try{(t(a)||x(a))&&(c=a&&a.then),x(c)?(this.promise.$$state.status=-1,c.call(a,d[0],d[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,j(this.promise.$$state))}catch(f){d[1](f),b(f)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a,this.promise.$$state.status=2,j(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;this.promise.$$state.status<=0&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;g>f;f++){e=d[f][0],a=d[f][3];try{e.notify(x(a)?a(c):c)}catch(h){b(h)}}})}};var o=function(a){var b=new k;return b.reject(a),b.promise},p=function(a,b){var c=new k;return b?c.resolve(a):c.reject(a),c.promise},q=function(a,b,c){var d=null;try{x(c)&&(d=c())}catch(e){return p(e,!1)}return E(d)?d.then(function(){return p(a,b)},function(a){return p(a,!1)}):p(a,b)},r=function(a,b,c,d){var e=new k;return e.resolve(a),e.promise.then(b,c,d)},s=function u(a){function b(a){d.resolve(a)}function c(a){d.reject(a)}if(!x(a))throw m("norslvr","Expected resolverFn, got '{0}'",a);if(!(this instanceof u))return new u(a);var d=new k;return a(b,c),d.promise};return s.defer=n,s.reject=o,s.when=r,s.all=l,s}function Qc(){this.$get=["$window","$timeout",function(a,b){var c=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};return f.supported=e,f}]}function Rc(){var a=10,b=d("$rootScope"),c=null,g=null;this.digestTtl=function(b){return arguments.length&&(a=b),a},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,h,i,k){function l(){this.$id=j(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings=null}function m(a){if(v.$$phase)throw b("inprog","{0} already in progress",v.$$phase);v.$$phase=a}function n(){v.$$phase=null}function p(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function s(){for(;z.length;)try{z.shift()()}catch(a){h(a)}g=null}function u(){null===g&&(g=k.defer(function(){v.$apply(s)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;return b=b||this,a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$id=j(),this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope),d.$parent=b,d.$$prevSibling=b.$$childTail,b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d,(a||b!=this)&&d.$on("$destroy",c),d},$watch:function(a,b,d){var e=i(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this,g=f.$$watchers,h={fn:b,last:q,get:e,exp:a,eq:!!d};return c=null,x(b)||(h.fn=o),g||(g=f.$$watchers=[]),g.unshift(h),function(){I(g,h),c=null}},$watchGroup:function(a,b){function c(){i=!1,j?(j=!1,b(e,e,h)):b(e,d,h)}var d=new Array(a.length),e=new Array(a.length),g=[],h=this,i=!1,j=!0;if(!a.length){var k=!0;return h.$evalAsync(function(){k&&b(e,e,h)}),function(){k=!1}}return 1===a.length?this.$watch(a[0],function(a,c,f){e[0]=a,d[0]=c,b(e,a===c?e:d,f)}):(f(a,function(a,b){var f=h.$watch(a,function(a,f){e[b]=a,d[b]=f,i||(i=!0,h.$evalAsync(c))});g.push(f)}),function(){for(;g.length;)g.shift()()})},$watchCollection:function(a,b){function c(a){f=a;var b,c,d,h,i;if(!r(f)){if(t(f))if(e(f)){g!==n&&(g=n,q=g.length=0,l++),b=f.length,q!==b&&(l++,g.length=q=b);for(var j=0;b>j;j++)i=g[j],h=f[j],d=i!==i&&h!==h,d||i===h||(l++,g[j]=h)}else{g!==o&&(g=o={},q=0,l++),b=0;for(c in f)f.hasOwnProperty(c)&&(b++,h=f[c],i=g[c],c in g?(d=i!==i&&h!==h,d||i===h||(l++,g[c]=h)):(q++,g[c]=h,l++));if(q>b){l++;for(c in g)f.hasOwnProperty(c)||(q--,delete g[c])}}else g!==f&&(g=f,l++);return l}}function d(){if(p?(p=!1,b(f,f,j)):b(f,h,j),k)if(t(f))if(e(f)){h=new Array(f.length);for(var a=0;a<f.length;a++)h[a]=f[a]}else{h={};for(var c in f)Pd.call(f,c)&&(h[c]=f[c])}else h=f}c.$stateful=!0;var f,g,h,j=this,k=b.length>1,l=0,m=i(a,c),n=[],o={},p=!0,q=0;return this.$watch(m,d)},$digest:function(){var d,e,f,i,j,l,o,p,r,t,u=a,z=this,A=[];m("$digest"),k.$$checkUrlChange(),this===v&&null!==g&&(k.defer.cancel(g),s()),c=null;do{for(l=!1,p=z;w.length;){try{t=w.shift(),t.scope.$eval(t.expression)}catch(B){h(B)}c=null}a:do{if(i=p.$$watchers)for(j=i.length;j--;)try{if(d=i[j])if((e=d.get(p))===(f=d.last)||(d.eq?L(e,f):"number"==typeof e&&"number"==typeof f&&isNaN(e)&&isNaN(f))){if(d===c){l=!1;break a}}else l=!0,c=d,d.last=d.eq?J(e,null):e,d.fn(e,f===q?e:f,p),5>u&&(r=4-u,A[r]||(A[r]=[]),A[r].push({msg:x(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,newVal:e,oldVal:f}))}catch(B){h(B)}if(!(o=p.$$childHead||p!==z&&p.$$nextSibling))for(;p!==z&&!(o=p.$$nextSibling);)p=p.$parent}while(p=o);if((l||w.length)&&!u--)throw n(),b("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",a,A)}while(l||w.length);for(n();y.length;)try{y.shift()()}catch(B){h(B)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;if(this.$broadcast("$destroy"),this.$$destroyed=!0,this!==v){for(var b in this.$$listenerCount)p(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=o,this.$on=this.$watch=this.$watchGroup=function(){return o},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return i(a)(this,b)},$evalAsync:function(a){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()}),w.push({scope:this,expression:a})},$$postDigest:function(a){y.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){h(b)}finally{n();try{v.$digest()}catch(b){throw h(b),b}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&z.push(b),u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]),c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,p(e,1,a))}},$emit:function(a){var b,c,d,e=[],f=this,g=!1,i={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},j=M([i],arguments,1);do{for(b=f.$$listeners[a]||e,i.currentScope=f,c=0,d=b.length;d>c;c++)if(b[c])try{b[c].apply(null,j)}catch(k){h(k)}else b.splice(c,1),c--,d--;if(g)return i.currentScope=null,i;f=f.$parent}while(f);return i.currentScope=null,i},$broadcast:function(a){var b=this,c=b,d=b,e={name:a,targetScope:b,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!b.$$listenerCount[a])return e;for(var f,g,i,j=M([e],arguments,1);c=d;){for(e.currentScope=c,f=c.$$listeners[a]||[],g=0,i=f.length;i>g;g++)if(f[g])try{f[g].apply(null,j)}catch(k){h(k)}else f.splice(g,1),g--,i--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==b&&c.$$nextSibling))for(;c!==b&&!(d=c.$$nextSibling);)c=c.$parent}return e.currentScope=null,e}};var v=new l,w=v.$$asyncQueue=[],y=v.$$postDigestQueue=[],z=v.$$applyAsyncQueue=[];return v}]}function Sc(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return s(b)?(a=b,this):a},this.imgSrcSanitizationWhitelist=function(a){return s(a)?(b=a,this):b},this.$get=function(){return function(c,d){var e,f=d?b:a;return e=_c(c).href,""===e||e.match(f)?c:"unsafe:"+e}}}function Tc(a){if("self"===a)return a;if(u(a)){if(a.indexOf("***")>-1)throw lf("iwcard","Illegal sequence *** in string matcher.  String: {0}",a);return a=fe(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+a+"$")}if(y(a))return new RegExp("^"+a.source+"$");throw lf("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function Uc(a){var b=[];return s(a)&&f(a,function(a){b.push(Tc(a))}),b}function Vc(){this.SCE_CONTEXTS=mf;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){return arguments.length&&(a=Uc(b)),a},this.resourceUrlBlacklist=function(a){return arguments.length&&(b=Uc(a)),b},this.$get=["$injector",function(d){function e(a,b){return"self"===a?ad(b):!!a.exec(b.href)}function f(c){var d,f,g=_c(c.toString()),h=!1;for(d=0,f=a.length;f>d;d++)if(e(a[d],g)){h=!0;break}if(h)for(d=0,f=b.length;f>d;d++)if(e(b[d],g)){h=!1;break}return h}function g(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};return a&&(b.prototype=new a),b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},b}function h(a,b){var d=m.hasOwnProperty(a)?m[a]:null;if(!d)throw lf("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",a,b);if(null===b||b===c||""===b)return b;if("string"!=typeof b)throw lf("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",a);return new d(b)}function i(a){return a instanceof l?a.$$unwrapTrustedValue():a}function j(a,b){if(null===b||b===c||""===b)return b;var d=m.hasOwnProperty(a)?m[a]:null;if(d&&b instanceof d)return b.$$unwrapTrustedValue();if(a===mf.RESOURCE_URL){if(f(b))return b;throw lf("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",b.toString())}if(a===mf.HTML)return k(b);throw lf("unsafe","Attempting to use an unsafe value in a safe context.")}var k=function(){throw lf("unsafe","Attempting to use an unsafe value in a safe context.")};d.has("$sanitize")&&(k=d.get("$sanitize"));var l=g(),m={};return m[mf.HTML]=g(l),m[mf.CSS]=g(l),m[mf.URL]=g(l),m[mf.JS]=g(l),m[mf.RESOURCE_URL]=g(m[mf.URL]),{trustAs:h,getTrusted:j,valueOf:i}}]}function Wc(){var a=!0;this.enabled=function(b){return arguments.length&&(a=!!b),a},this.$get=["$parse","$sceDelegate",function(b,c){if(a&&8>Td)throw lf("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var d=K(mf);d.isEnabled=function(){return a},d.trustAs=c.trustAs,d.getTrusted=c.getTrusted,d.valueOf=c.valueOf,a||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=p),d.parseAs=function(a,c){var e=b(c);return e.literal&&e.constant?e:b(c,function(b){return d.getTrusted(a,b)})};var e=d.parseAs,g=d.getTrusted,h=d.trustAs;return f(mf,function(a,b){var c=Od(b);d[ob("parse_as_"+c)]=function(b){return e(a,b)},d[ob("get_trusted_"+c)]=function(b){return g(a,b)},d[ob("trust_as_"+c)]=function(b){return h(a,b)}}),d}]}function Xc(){this.$get=["$window","$document",function(a,b){var c,d,e={},f=m((/android (\d+)/.exec(Od((a.navigator||{}).userAgent))||[])[1]),g=/Boxee/i.test((a.navigator||{}).userAgent),h=b[0]||{},i=/^(Moz|webkit|ms)(?=[A-Z])/,j=h.body&&h.body.style,k=!1,l=!1;if(j){for(var n in j)if(d=i.exec(n)){c=d[0],c=c.substr(0,1).toUpperCase()+c.substr(1);break}c||(c="WebkitOpacity"in j&&"webkit"),k=!!("transition"in j||c+"Transition"in j),l=!!("animation"in j||c+"Animation"in j),!f||k&&l||(k=u(h.body.style.webkitTransition),l=u(h.body.style.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>f||g),hasEvent:function(a){if("input"==a&&9==Td)return!1;if(r(e[a])){var b=h.createElement("div");e[a]="on"+a in b}return e[a]},csp:ge(),vendorPrefix:c,transitions:k,animations:l,android:f}}]}function Yc(){this.$get=["$templateCache","$http","$q",function(a,b,c){function d(e,f){function g(){if(h.totalPendingRequests--,!f)throw Oe("tpload","Failed to load template: {0}",e);return c.reject()}var h=d;h.totalPendingRequests++;var i=b.defaults&&b.defaults.transformResponse;if(de(i)){var j=i;i=[];for(var k=0;k<j.length;++k){var l=j[k];l!==cc&&i.push(l)}}else i===cc&&(i=null);var m={cache:a,transformResponse:i};return b.get(e,m).then(function(b){var c=b.data;return h.totalPendingRequests--,a.put(e,c),c},g)}return d.totalPendingRequests=0,d}]}function Zc(){this.$get=["$rootScope","$browser","$location",function(a,b,c){var d={};return d.findBindings=function(a,b,c){var d=a.getElementsByClassName("ng-binding"),e=[];return f(d,function(a){var d=ae.element(a).data("$binding");d&&f(d,function(d){if(c){var f=new RegExp("(^|\\s)"+fe(b)+"(\\s|\\||$)");f.test(d)&&e.push(a)}else-1!=d.indexOf(b)&&e.push(a)})}),e},d.findModels=function(a,b,c){for(var d=["ng-","data-ng-","ng\\:"],e=0;e<d.length;++e){var f=c?"=":"*=",g="["+d[e]+"model"+f+'"'+b+'"]',h=a.querySelectorAll(g);if(h.length)return h}},d.getLocation=function(){return c.url()},d.setLocation=function(b){b!==c.url()&&(c.url(b),a.$digest())},d.whenStable=function(a){b.notifyWhenNoOutstandingRequests(a)},d}]}function $c(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,c,d,e){function f(f,h,i){var j,k=s(i)&&!i,l=(k?d:c).defer(),m=l.promise;return j=b.defer(function(){try{l.resolve(f())}catch(b){l.reject(b),e(b)}finally{delete g[m.$$timeoutId]}k||a.$apply()},h),m.$$timeoutId=j,g[j]=l,m}var g={};return f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1},f}]}function _c(a){var b=a;return Td&&(nf.setAttribute("href",b),b=nf.href),nf.setAttribute("href",b),{href:nf.href,protocol:nf.protocol?nf.protocol.replace(/:$/,""):"",host:nf.host,search:nf.search?nf.search.replace(/^\?/,""):"",hash:nf.hash?nf.hash.replace(/^#/,""):"",hostname:nf.hostname,port:nf.port,pathname:"/"===nf.pathname.charAt(0)?nf.pathname:"/"+nf.pathname}}function ad(a){var b=u(a)?_c(a):a;return b.protocol===of.protocol&&b.host===of.host}function bd(){this.$get=q(a)}function cd(a){function b(d,e){if(t(d)){var g={};return f(d,function(a,c){g[c]=b(c,a)}),g}return a.factory(d+c,e)}var c="Filter";this.register=b,this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}],b("currency",ed),b("date",pd),b("filter",dd),b("json",qd),b("limitTo",rd),b("lowercase",tf),b("number",fd),b("orderBy",sd),b("uppercase",uf)}function dd(){return function(a,b,c){if(!de(a))return a;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0},"function"!==d&&(c="boolean"===d&&c?function(a,b){return ae.equals(a,b)}:function(a,b){if(a&&b&&"object"==typeof a&&"object"==typeof b){for(var d in a)if("$"!==d.charAt(0)&&Pd.call(a,d)&&c(a[d],b[d]))return!0;return!1}return b=(""+b).toLowerCase(),(""+a).toLowerCase().indexOf(b)>-1});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case"boolean":case"number":case"string":return c(a,b);case"object":switch(typeof b){case"object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case"array":for(var e=0;e<a.length;e++)if(f(a[e],b))return!0;return!1;default:return!1}};switch(typeof b){case"boolean":case"number":case"string":b={$:b};case"object":for(var g in b)!function(a){"undefined"!=typeof b[a]&&e.push(function(c){return f("$"==a?c:c&&c[a],b[a])})}(g);break;case"function":e.push(b);break;default:return a}for(var h=[],i=0;i<a.length;i++){var j=a[i];e.check(j,i)&&h.push(j)}return h}}function ed(a){var b=a.NUMBER_FORMATS;return function(a,c,d){return r(c)&&(c=b.CURRENCY_SYM),r(d)&&(d=b.PATTERNS[1].maxFrac),null==a?a:gd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,d).replace(/\u00A4/g,c)}}function fd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:gd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function gd(a,b,c,d,e){if(!isFinite(a)||t(a))return"";var f=0>a;a=Math.abs(a);var g=a+"",h="",i=[],j=!1;if(-1!==g.indexOf("e")){var k=g.match(/([\d\.]+)e(-?)(\d+)/);k&&"-"==k[2]&&k[3]>e+1?(g="0",a=0):(h=g,j=!0)}if(j)e>0&&a>-1&&1>a&&(h=a.toFixed(e));else{var l=(g.split(pf)[1]||"").length;r(e)&&(e=Math.min(Math.max(b.minFrac,l),b.maxFrac)),a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e),0===a&&(f=!1);var m=(""+a).split(pf),n=m[0];m=m[1]||"";var o,p=0,q=b.lgSize,s=b.gSize;if(n.length>=q+s)for(p=n.length-q,o=0;p>o;o++)(p-o)%s===0&&0!==o&&(h+=c),h+=n.charAt(o);for(o=p;o<n.length;o++)(n.length-o)%q===0&&0!==o&&(h+=c),h+=n.charAt(o);for(;m.length<e;)m+="0";e&&"0"!==e&&(h+=d+m.substr(0,e))}return i.push(f?b.negPre:b.posPre,h,f?b.negSuf:b.posSuf),i.join("")}function hd(a,b,c){var d="";for(0>a&&(d="-",a=-a),a=""+a;a.length<b;)a="0"+a;return c&&(a=a.substr(a.length-b)),d+a}function id(a,b,c,d){return c=c||0,function(e){var f=e["get"+a]();return(c>0||f>-c)&&(f+=c),0===f&&-12==c&&(f=12),hd(f,b,d)}}function jd(a,b){return function(c,d){var e=c["get"+a](),f=Qd(b?"SHORT"+a:a);return d[f][e]}}function kd(a){var b=-1*a.getTimezoneOffset(),c=b>=0?"+":"";return c+=hd(Math[b>0?"floor":"ceil"](b/60),2)+hd(Math.abs(b%60),2)}function ld(a){var b=new Date(a,0,1).getDay();return new Date(a,0,(4>=b?5:12)-b)}function md(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))}function nd(a){return function(b){var c=ld(b.getFullYear()),d=md(b),e=+d-+c,f=1+Math.round(e/6048e5);return hd(f,a)}}function od(a,b){return a.getHours()<12?b.AMPMS[0]:b.AMPMS[1]}function pd(a){function b(a){var b;if(b=a.match(c)){var d=new Date(0),e=0,f=0,g=b[8]?d.setUTCFullYear:d.setFullYear,h=b[8]?d.setUTCHours:d.setHours;
b[9]&&(e=m(b[9]+b[10]),f=m(b[9]+b[11])),g.call(d,m(b[1]),m(b[2])-1,m(b[3]));var i=m(b[4]||0)-e,j=m(b[5]||0)-f,k=m(b[6]||0),l=Math.round(1e3*parseFloat("0."+(b[7]||0)));return h.call(d,i,j,k,l),d}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g,h,i="",j=[];if(d=d||"mediumDate",d=a.DATETIME_FORMATS[d]||d,u(c)&&(c=sf.test(c)?m(c):b(c)),v(c)&&(c=new Date(c)),!w(c))return c;for(;d;)h=rf.exec(d),h?(j=M(j,h,1),d=j.pop()):(j.push(d),d=null);return e&&"UTC"===e&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset())),f(j,function(b){g=qf[b],i+=g?g(c,a.DATETIME_FORMATS):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),i}}function qd(){return function(a){return Q(a,!0)}}function rd(){return function(a,b){if(v(a)&&(a=a.toString()),!de(a)&&!u(a))return a;if(b=1/0===Math.abs(Number(b))?Number(b):m(b),u(a))return b?b>=0?a.slice(0,b):a.slice(b,a.length):"";var c,d,e=[];for(b>a.length?b=a.length:b<-a.length&&(b=-a.length),b>0?(c=0,d=b):(c=a.length+b,d=a.length);d>c;c++)e.push(a[c]);return e}}function sd(a){return function(b,c,d){function f(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0}function g(a,b){return b?function(b,c){return a(c,b)}:a}function h(a,b){var c=typeof a,d=typeof b;return c==d?(w(a)&&w(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:b>a?-1:1):d>c?-1:1}return e(b)?(c=de(c)?c:[c],0===c.length&&(c=["+"]),c=c.map(function(b){var c=!1,d=b||p;if(u(b)){if(("+"==b.charAt(0)||"-"==b.charAt(0))&&(c="-"==b.charAt(0),b=b.substring(1)),""===b)return g(function(a,b){return h(a,b)},c);if(d=a(b),d.constant){var e=d();return g(function(a,b){return h(a[e],b[e])},c)}}return g(function(a,b){return h(d(a),d(b))},c)}),Xd.call(b).sort(g(f,d))):b}}function td(a){return x(a)&&(a={link:a}),a.restrict=a.restrict||"AC",q(a)}function ud(a,b){a.$name=b}function vd(a,b,d,e,g){var h=this,i=[],j=h.$$parentForm=a.parent().controller("form")||xf;h.$error={},h.$$success={},h.$pending=c,h.$name=g(b.name||b.ngForm||"")(d),h.$dirty=!1,h.$pristine=!0,h.$valid=!0,h.$invalid=!1,h.$submitted=!1,j.$addControl(h),h.$rollbackViewValue=function(){f(i,function(a){a.$rollbackViewValue()})},h.$commitViewValue=function(){f(i,function(a){a.$commitViewValue()})},h.$addControl=function(a){fb(a.$name,"input"),i.push(a),a.$name&&(h[a.$name]=a)},h.$$renameControl=function(a,b){var c=a.$name;h[c]===a&&delete h[c],h[b]=a,a.$name=b},h.$removeControl=function(a){a.$name&&h[a.$name]===a&&delete h[a.$name],f(h.$pending,function(b,c){h.$setValidity(c,null,a)}),f(h.$error,function(b,c){h.$setValidity(c,null,a)}),I(i,a)},Jd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];if(d){var e=d.indexOf(c);-1===e&&d.push(c)}else a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(I(d,c),0===d.length&&delete a[b])},parentForm:j,$animate:e}),h.$setDirty=function(){e.removeClass(a,Rf),e.addClass(a,Sf),h.$dirty=!0,h.$pristine=!1,j.$setDirty()},h.$setPristine=function(){e.setClass(a,Rf,Sf+" "+yf),h.$dirty=!1,h.$pristine=!0,h.$submitted=!1,f(i,function(a){a.$setPristine()})},h.$setUntouched=function(){f(i,function(a){a.$setUntouched()})},h.$setSubmitted=function(){e.addClass(a,yf),h.$submitted=!0,j.$setSubmitted()}}function wd(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function xd(a,b,c,d,e,f){yd(a,b,c,d,e,f),wd(d)}function yd(a,b,c,d,e,f){var g=b[0].placeholder,h={},i=Od(b[0].type);if(!e.android){var j=!1;b.on("compositionstart",function(){j=!0}),b.on("compositionend",function(){j=!1,k()})}var k=function(a){if(!j){var e=b.val(),f=a&&a.type;if(Td&&"input"===(a||h).type&&b[0].placeholder!==g)return void(g=b[0].placeholder);"password"===i||c.ngTrim&&"false"===c.ngTrim||(e=ee(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a){l||(l=f.defer(function(){k(a),l=null}))};b.on("keydown",function(a){var b=a.keyCode;91===b||b>15&&19>b||b>=37&&40>=b||m(a)}),e.hasEvent("paste")&&b.on("paste cut",m)}b.on("change",k),d.$render=function(){b.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function zd(a,b){if(w(a))return a;if(u(a)){If.lastIndex=0;var c=If.exec(a);if(c){var d=+c[1],e=+c[2],f=0,g=0,h=0,i=0,j=ld(d),k=7*(e-1);return b&&(f=b.getHours(),g=b.getMinutes(),h=b.getSeconds(),i=b.getMilliseconds()),new Date(d,0,j.getDate()+k,f,g,h,i)}}return 0/0}function Ad(a,b){return function(c,d){var e,g;if(w(c))return c;if(u(c)){if('"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1)),Cf.test(c))return new Date(c);if(a.lastIndex=0,e=a.exec(c))return e.shift(),g=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},f(e,function(a,c){c<b.length&&(g[b[c]]=+a)}),new Date(g.yyyy,g.MM-1,g.dd,g.HH,g.mm,g.ss||0,1e3*g.sss||0)}return 0/0}}function Bd(a,b,d,e){return function(f,g,h,i,j,k,l){function m(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return s(a)?w(a)?a:d(a):c}Cd(f,g,h,i),yd(f,g,h,i,j,k);var o,p=i&&i.$options&&i.$options.timezone;if(i.$$parserName=a,i.$parsers.push(function(a){if(i.$isEmpty(a))return null;if(b.test(a)){var e=d(a,o);return"UTC"===p&&e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e}return c}),i.$formatters.push(function(a){if(a&&!w(a))throw Mf("datefmt","Expected `{0}` to be a date",a);if(m(a)){if(o=a,o&&"UTC"===p){var b=6e4*o.getTimezoneOffset();o=new Date(o.getTime()+b)}return l("date")(a,e,p)}return o=null,""}),s(h.min)||h.ngMin){var q;i.$validators.min=function(a){return!m(a)||r(q)||d(a)>=q},h.$observe("min",function(a){q=n(a),i.$validate()})}if(s(h.max)||h.ngMax){var t;i.$validators.max=function(a){return!m(a)||r(t)||d(a)<=t},h.$observe("max",function(a){t=n(a),i.$validate()})}}}function Cd(a,b,d,e){var f=b[0],g=e.$$hasNativeValidators=t(f.validity);g&&e.$parsers.push(function(a){var d=b.prop(Nd)||{};return d.badInput&&!d.typeMismatch?c:a})}function Dd(a,b,d,e,f,g){if(Cd(a,b,d,e),yd(a,b,d,e,f,g),e.$$parserName="number",e.$parsers.push(function(a){return e.$isEmpty(a)?null:Ff.test(a)?parseFloat(a):c}),e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!v(a))throw Mf("numfmt","Expected `{0}` to be a number",a);a=a.toString()}return a}),d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||r(h)||a>=h},d.$observe("min",function(a){s(a)&&!v(a)&&(a=parseFloat(a,10)),h=v(a)&&!isNaN(a)?a:c,e.$validate()})}if(d.max||d.ngMax){var i;e.$validators.max=function(a){return e.$isEmpty(a)||r(i)||i>=a},d.$observe("max",function(a){s(a)&&!v(a)&&(a=parseFloat(a,10)),i=v(a)&&!isNaN(a)?a:c,e.$validate()})}}function Ed(a,b,c,d,e,f){yd(a,b,c,d,e,f),wd(d),d.$$parserName="url",d.$validators.url=function(a,b){var c=a||b;return d.$isEmpty(c)||Df.test(c)}}function Fd(a,b,c,d,e,f){yd(a,b,c,d,e,f),wd(d),d.$$parserName="email",d.$validators.email=function(a,b){var c=a||b;return d.$isEmpty(c)||Ef.test(c)}}function Gd(a,b,c,d){r(c.name)&&b.attr("name",j());var e=function(a){b[0].checked&&d.$setViewValue(c.value,a&&a.type)};b.on("click",e),d.$render=function(){var a=c.value;b[0].checked=a==d.$viewValue},c.$observe("value",d.$render)}function Hd(a,b,c,e,f){var g;if(s(e)){if(g=a(e),!g.constant)throw d("ngModel")("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",c,e);return g(b)}return f}function Id(a,b,c,d,e,f,g,h){var i=Hd(h,a,"ngTrueValue",c.ngTrueValue,!0),j=Hd(h,a,"ngFalseValue",c.ngFalseValue,!1),k=function(a){d.$setViewValue(b[0].checked,a&&a.type)};b.on("click",k),d.$render=function(){b[0].checked=d.$viewValue},d.$isEmpty=function(a){return a===!1},d.$formatters.push(function(a){return L(a,i)}),d.$parsers.push(function(a){return a?i:j})}function Jd(a){function b(a,b,i){b===c?d("$pending",a,i):e("$pending",a,i),D(b)?b?(l(h.$error,a,i),k(h.$$success,a,i)):(k(h.$error,a,i),l(h.$$success,a,i)):(l(h.$error,a,i),l(h.$$success,a,i)),h.$pending?(f(Vf,!0),h.$valid=h.$invalid=c,g("",null)):(f(Vf,!1),h.$valid=Kd(h.$error),h.$invalid=!h.$valid,g("",h.$valid));var j;j=h.$pending&&h.$pending[a]?c:h.$error[a]?!1:h.$$success[a]?!0:null,g(a,j),m.$setValidity(a,j,h)}function d(a,b,c){h[a]||(h[a]={}),k(h[a],b,c)}function e(a,b,d){h[a]&&l(h[a],b,d),Kd(h[a])&&(h[a]=c)}function f(a,b){b&&!j[a]?(n.addClass(i,a),j[a]=!0):!b&&j[a]&&(n.removeClass(i,a),j[a]=!1)}function g(a,b){a=a?"-"+bb(a,"-"):"",f(Pf+a,b===!0),f(Qf+a,b===!1)}var h=a.ctrl,i=a.$element,j={},k=a.set,l=a.unset,m=a.parentForm,n=a.$animate;j[Qf]=!(j[Pf]=i.hasClass(Pf)),h.$setValidity=b}function Kd(a){if(a)for(var b in a)return!1;return!0}function Ld(a,b){return a="ngClass"+a,["$animate",function(c){function d(a,b){var c=[];a:for(var d=0;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e==b[f])continue a;c.push(e)}return c}function e(a){if(de(a))return a;if(u(a))return a.split(" ");if(t(a)){var b=[];return f(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b}return a}return{restrict:"AC",link:function(g,h,i){function j(a){var b=l(a,1);i.$addClass(b)}function k(a){var b=l(a,-1);i.$removeClass(b)}function l(a,b){var c=h.data("$classCounts")||{},d=[];return f(a,function(a){(b>0||c[a])&&(c[a]=(c[a]||0)+b,c[a]===+(b>0)&&d.push(a))}),h.data("$classCounts",c),d.join(" ")}function m(a,b){var e=d(b,a),f=d(a,b);e=l(e,1),f=l(f,-1),e&&e.length&&c.addClass(h,e),f&&f.length&&c.removeClass(h,f)}function n(a){if(b===!0||g.$index%2===b){var c=e(a||[]);if(o){if(!L(a,o)){var d=e(o);m(d,c)}}else j(c)}o=K(a)}var o;g.$watch(i[a],n,!0),i.$observe("class",function(){n(g.$eval(i[a]))}),"ngClass"!==a&&g.$watch("$index",function(c,d){var f=1&c;if(f!==(1&d)){var h=e(g.$eval(i[a]));f===b?j(h):k(h)}})}}}]}var Md=/^\/(.+)\/([a-z]*)$/,Nd="validity",Od=function(a){return u(a)?a.toLowerCase():a},Pd=Object.prototype.hasOwnProperty,Qd=function(a){return u(a)?a.toUpperCase():a},Rd=function(a){return u(a)?a.replace(/[A-Z]/g,function(a){return String.fromCharCode(32|a.charCodeAt(0))}):a},Sd=function(a){return u(a)?a.replace(/[a-z]/g,function(a){return String.fromCharCode(-33&a.charCodeAt(0))}):a};"i"!=="I".toLowerCase()&&(Od=Rd,Qd=Sd);var Td,Ud,Vd,Wd,Xd=[].slice,Yd=[].splice,Zd=[].push,$d=Object.prototype.toString,_d=d("ng"),ae=a.angular||(a.angular={}),be=0;Td=b.documentMode,o.$inject=[],p.$inject=[];var ce,de=Array.isArray,ee=function(a){return u(a)?a.trim():a},fe=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ge=function(){if(s(ge.isActive_))return ge.isActive_;var a=!(!b.querySelector("[ng-csp]")&&!b.querySelector("[data-ng-csp]"));if(!a)try{new Function("")}catch(c){a=!0}return ge.isActive_=a},he=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,je=!1,ke=1,le=3,me=8,ne=9,oe=11,pe={full:"1.3.4",major:1,minor:3,dot:4,codeName:"highfalutin-petroglyph"};tb.expando="ng339";var qe=tb.cache={},re=1,se=function(a,b,c){a.addEventListener(b,c,!1)},te=function(a,b,c){a.removeEventListener(b,c,!1)};tb._data=function(a){return this.cache[a[this.expando]]||{}};var ue=/([\:\-\_]+(.))/g,ve=/^moz([A-Z])/,we={mouseleave:"mouseout",mouseenter:"mouseover"},xe=d("jqLite"),ye=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ze=/<|&#?\w+;/,Ae=/<([\w:]+)/,Be=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ce={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ce.optgroup=Ce.option,Ce.tbody=Ce.tfoot=Ce.colgroup=Ce.caption=Ce.thead,Ce.th=Ce.td;var De=tb.prototype={ready:function(c){function d(){e||(e=!0,c())}var e=!1;"complete"===b.readyState?setTimeout(d):(this.on("DOMContentLoaded",d),tb(a).on("load",d))},toString:function(){var a=[];return f(this,function(b){a.push(""+b)}),"["+a.join(", ")+"]"},eq:function(a){return Ud(a>=0?this[a]:this[this.length+a])},length:0,push:Zd,sort:[].sort,splice:[].splice},Ee={};f("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(a){Ee[Od(a)]=a});var Fe={};f("input,select,option,textarea,button,form,details".split(","),function(a){Fe[a]=!0});var Ge={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};f({data:zb,removeData:xb},function(a,b){tb[b]=a}),f({data:zb,inheritedData:Fb,scope:function(a){return Ud.data(a,"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return Ud.data(a,"$isolateScope")||Ud.data(a,"$isolateScopeNoTemplate")},controller:Eb,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,c){return b=ob(b),s(c)?void(a.style[b]=c):a.style[b]},attr:function(a,b,d){var e=Od(b);if(Ee[e]){if(!s(d))return a[b]||(a.attributes.getNamedItem(b)||o).specified?e:c;d?(a[b]=!0,a.setAttribute(b,e)):(a[b]=!1,a.removeAttribute(e))}else if(s(d))a.setAttribute(b,d);else if(a.getAttribute){var f=a.getAttribute(b,2);return null===f?c:f}},prop:function(a,b,c){return s(c)?void(a[b]=c):a[b]},text:function(){function a(a,b){if(r(b)){var c=a.nodeType;return c===ke||c===le?a.textContent:""}a.textContent=b}return a.$dv="",a}(),val:function(a,b){if(r(b)){if(a.multiple&&"select"===H(a)){var c=[];return f(a.options,function(a){a.selected&&c.push(a.value||a.text)}),0===c.length?null:c}return a.value}a.value=b},html:function(a,b){return r(b)?a.innerHTML:(vb(a,!0),void(a.innerHTML=b))},empty:Gb},function(a,b){tb.prototype[b]=function(b,d){var e,f,g=this.length;if(a!==Gb&&(2==a.length&&a!==Ab&&a!==Eb?b:d)===c){if(t(b)){for(e=0;g>e;e++)if(a===zb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}for(var h=a.$dv,i=h===c?Math.min(g,1):g,j=0;i>j;j++){var k=a(this[j],b,d);h=h?h+k:k}return h}for(e=0;g>e;e++)a(this[e],b,d);return this}}),f({removeData:xb,on:function Lg(a,b,c,d){if(s(d))throw xe("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");if(qb(a)){var e=yb(a,!0),f=e.events,g=e.handle;g||(g=e.handle=Lb(a,f));for(var h=b.indexOf(" ")>=0?b.split(" "):[b],i=h.length;i--;){b=h[i];var j=f[b];j||(f[b]=[],"mouseenter"===b||"mouseleave"===b?Lg(a,we[b],function(a){var c=this,d=a.relatedTarget;(!d||d!==c&&!c.contains(d))&&g(a,b)}):"$destroy"!==b&&se(a,b,g),j=f[b]),j.push(c)}}},off:wb,one:function(a,b,c){a=Ud(a),a.on(b,function d(){a.off(b,c),a.off(b,d)}),a.on(b,c)},replaceWith:function(a,b){var c,d=a.parentNode;vb(a),f(new tb(b),function(b){c?d.insertBefore(b,c.nextSibling):d.replaceChild(b,a),c=b})},children:function(a){var b=[];return f(a.childNodes,function(a){a.nodeType===ke&&b.push(a)}),b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var c=a.nodeType;if(c===ke||c===oe){b=new tb(b);for(var d=0,e=b.length;e>d;d++){var f=b[d];a.appendChild(f)}}},prepend:function(a,b){if(a.nodeType===ke){var c=a.firstChild;f(new tb(b),function(b){a.insertBefore(b,c)})}},wrap:function(a,b){b=Ud(b).eq(0).clone()[0];var c=a.parentNode;c&&c.replaceChild(b,a),b.appendChild(a)},remove:Hb,detach:function(a){Hb(a,!0)},after:function(a,b){var c=a,d=a.parentNode;b=new tb(b);for(var e=0,f=b.length;f>e;e++){var g=b[e];d.insertBefore(g,c.nextSibling),c=g}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,c){b&&f(b.split(" "),function(b){var d=c;r(d)&&(d=!Ab(a,b)),(d?Cb:Bb)(a,b)})},parent:function(a){var b=a.parentNode;return b&&b.nodeType!==oe?b:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:ub,triggerHandler:function(a,b,c){var d,e,g,h=b.type||b,i=yb(a),j=i&&i.events,k=j&&j[h];k&&(d={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:o,type:h,target:a},b.type&&(d=l(d,b)),e=K(k),g=c?[d].concat(c):[d],f(e,function(b){d.isImmediatePropagationStopped()||b.apply(a,g)}))}},function(a,b){tb.prototype[b]=function(b,c,d){for(var e,f=0,g=this.length;g>f;f++)r(e)?(e=a(this[f],b,c,d),s(e)&&(e=Ud(e))):Db(e,a(this[f],b,c,d));return s(e)?e:this},tb.prototype.bind=tb.prototype.on,tb.prototype.unbind=tb.prototype.off}),Nb.prototype={put:function(a,b){this[Mb(a,this.nextUid)]=b},get:function(a){return this[Mb(a,this.nextUid)]},remove:function(a){var b=this[a=Mb(a,this.nextUid)];return delete this[a],b}};var He=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ie=/,/,Je=/^\s*(_?)(\S+?)\1\s*$/,Ke=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Le=d("$injector");Qb.$$annotate=Pb;var Me=d("$animate"),Ne=["$provide",function(a){this.$$selectors={},this.register=function(b,c){var d=b+"-animation";if(b&&"."!=b.charAt(0))throw Me("notcsel","Expecting class selector starting with '.' got '{0}'.",b);this.$$selectors[b.substr(1)]=d,a.factory(d,c)},this.classNameFilter=function(a){return 1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null),this.$$classNameFilter},this.$get=["$$q","$$asyncCallback","$rootScope",function(a,b,c){function d(b){var d,e=a.defer();return e.promise.$$cancelFn=function(){d&&d()},c.$$postDigest(function(){d=b(function(){e.resolve()})}),e.promise}function e(a,b){var c=[],d=[],e=ib();return f((a.attr("class")||"").split(/\s+/),function(a){e[a]=!0}),f(b,function(a,b){var f=e[b];a===!1&&f?d.push(b):a!==!0||f||c.push(b)}),c.length+d.length>0&&[c.length?c:null,d.length?d:null]}function g(a,b,c){for(var d=0,e=b.length;e>d;++d){var f=b[d];a[f]=c}}function h(){return j||(j=a.defer(),b(function(){j.resolve(),j=null})),j.promise}function i(a,b){if(ae.isObject(b)){var c=l(b.from||{},b.to||{});a.css(c)}}var j;return{animate:function(a,b,c){return i(a,{from:b,to:c}),h()},enter:function(a,b,c,d){return i(a,d),c?c.after(a):b.prepend(a),h()},leave:function(a){return a.remove(),h()},move:function(a,b,c,d){return this.enter(a,b,c,d)},addClass:function(a,b,c){return this.setClass(a,b,[],c)},$$addClassImmediately:function(a,b,c){return a=Ud(a),b=u(b)?b:de(b)?b.join(" "):"",f(a,function(a){Cb(a,b)}),i(a,c),h()},removeClass:function(a,b,c){return this.setClass(a,[],b,c)},$$removeClassImmediately:function(a,b,c){return a=Ud(a),b=u(b)?b:de(b)?b.join(" "):"",f(a,function(a){Bb(a,b)}),i(a,c),h()},setClass:function(a,b,c,f){var h=this,i="$$animateClasses",j=!1;a=Ud(a);var k=a.data(i);k?f&&k.options&&(k.options=ae.extend(k.options||{},f)):(k={classes:{},options:f},j=!0);var l=k.classes;return b=de(b)?b:b.split(" "),c=de(c)?c:c.split(" "),g(l,b,!0),g(l,c,!1),j&&(k.promise=d(function(b){var c=a.data(i);if(a.removeData(i),c){var d=e(a,c.classes);d&&h.$$setClassImmediately(a,d[0],d[1],c.options)}b()}),a.data(i,k)),k.promise},$$setClassImmediately:function(a,b,c,d){return b&&this.$$addClassImmediately(a,b),c&&this.$$removeClassImmediately(a,c),i(a,d),h()},enabled:o,cancel:o}}]}],Oe=d("$compile");Xb.$inject=["$provide","$$sanitizeUriProvider"];var Pe=/^((?:x|data)[\:\-_])/i,Qe="application/json",Re={"Content-Type":Qe+";charset=utf-8"},Se=/^\s*(\[|\{[^\{])/,Te=/[\}\]]\s*$/,Ue=/^\)\]\}',?\n/,Ve=d("$interpolate"),We=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Xe={http:80,https:443,ftp:21},Ye=d("$location"),Ze={$$html5:!1,$$replace:!1,absUrl:yc("$$absUrl"),url:function(a){if(r(a))return this.$$url;var b=We.exec(a);return(b[1]||""===a)&&this.path(decodeURIComponent(b[1])),(b[2]||b[1]||""===a)&&this.search(b[3]||""),this.hash(b[5]||""),this},protocol:yc("$$protocol"),host:yc("$$host"),port:yc("$$port"),path:zc("$$path",function(a){return a=null!==a?a.toString():"","/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(u(a)||v(a))a=a.toString(),this.$$search=U(a);else{if(!t(a))throw Ye("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");a=J(a,{}),f(a,function(b,c){null==b&&delete a[c]}),this.$$search=a}break;default:r(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}return this.$$compose(),this},hash:zc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){return this.$$replace=!0,this}};f([xc,wc,vc],function(a){a.prototype=Object.create(Ze),a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==vc||!this.$$html5)throw Ye("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");return this.$$state=r(b)?null:b,this}});var $e=d("$parse"),_e=Function.prototype.call,af=Function.prototype.apply,bf=Function.prototype.bind,cf=ib();f({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,b){a.constant=a.literal=a.sharedGetter=!0,cf[b]=a}),cf["this"]=function(a){return a},cf["this"].sharedGetter=!0;var df=l(ib(),{"+":function(a,b,d,e){return d=d(a,b),e=e(a,b),s(d)?s(e)?d+e:d:s(e)?e:c},"-":function(a,b,c,d){return c=c(a,b),d=d(a,b),(s(c)?c:0)-(s(d)?d:0)},"*":function(a,b,c,d){return c(a,b)*d(a,b)},"/":function(a,b,c,d){return c(a,b)/d(a,b)},"%":function(a,b,c,d){return c(a,b)%d(a,b)},"===":function(a,b,c,d){return c(a,b)===d(a,b)},"!==":function(a,b,c,d){return c(a,b)!==d(a,b)},"==":function(a,b,c,d){return c(a,b)==d(a,b)},"!=":function(a,b,c,d){return c(a,b)!=d(a,b)},"<":function(a,b,c,d){return c(a,b)<d(a,b)},">":function(a,b,c,d){return c(a,b)>d(a,b)},"<=":function(a,b,c,d){return c(a,b)<=d(a,b)},">=":function(a,b,c,d){return c(a,b)>=d(a,b)},"&&":function(a,b,c,d){return c(a,b)&&d(a,b)},"||":function(a,b,c,d){return c(a,b)||d(a,b)},"!":function(a,b,c){return!c(a,b)},"=":!0,"|":!0}),ef={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},ff=function(a){this.options=a};ff.prototype={constructor:ff,lex:function(a){for(this.text=a,this.index=0,this.tokens=[];this.index<this.text.length;){var b=this.text.charAt(this.index);if('"'===b||"'"===b)this.readString(b);else if(this.isNumber(b)||"."===b&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(b))this.readIdent();else if(this.is(b,"(){}[].,;:?"))this.tokens.push({index:this.index,text:b}),this.index++;else if(this.isWhitespace(b))this.index++;else{var c=b+this.peek(),d=c+this.peek(2),e=df[b],f=df[c],g=df[d];if(e||f||g){var h=g?d:f?c:b;this.tokens.push({index:this.index,text:h,operator:!0}),this.index+=h.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){var b=a||1;return this.index+b<this.text.length?this.text.charAt(this.index+b):!1},isNumber:function(a){return a>="0"&&"9">=a&&"string"==typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"	"===a||"\n"===a||""===a||" "===a},isIdent:function(a){return a>="a"&&"z">=a||a>="A"&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,c){c=c||this.index;var d=s(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,c)+"]":" "+c;throw $e("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",a,d,this.text)},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var c=Od(this.text.charAt(this.index));if("."==c||this.isNumber(c))a+=c;else{var d=this.peek();if("e"==c&&this.isExpOperator(d))a+=c;else if(this.isExpOperator(c)&&d&&this.isNumber(d)&&"e"==a.charAt(a.length-1))a+=c;else{if(!this.isExpOperator(c)||d&&this.isNumber(d)||"e"!=a.charAt(a.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var c="",d=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index);if(d+=f,e){if("u"===f){var g=this.text.substring(this.index+1,this.index+5);g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,c+=String.fromCharCode(parseInt(g,16))}else{var h=ef[f];c+=h||f}e=!1}else if("\\"===f)e=!0;else{if(f===a)return this.index++,void this.tokens.push({index:b,text:d,constant:!0,value:c});c+=f}this.index++}this.throwError("Unterminated quote",b)}};var gf=function(a,b,c){this.lexer=a,this.$filter=b,this.options=c};gf.ZERO=l(function(){return 0},{sharedGetter:!0,constant:!0}),gf.prototype={constructor:gf,parse:function(a){this.text=a,this.tokens=this.lexer.lex(a);var b=this.statements();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),b.literal=!!b.literal,b.constant=!!b.constant,b},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b,c;b=this.expect("(","[",".");)"("===b.text?(a=this.functionCall(a,c),c=null):"["===b.text?(c=a,a=this.objectIndex(a)):"."===b.text?(c=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,b){throw $e("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",b.text,a,b.index+1,this.text,this.text.substring(b.index))},peekToken:function(){if(0===this.tokens.length)throw $e("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(a,b,c,d){return this.peekAhead(0,a,b,c,d)},peekAhead:function(a,b,c,d,e){if(this.tokens.length>a){var f=this.tokens[a],g=f.text;if(g===b||g===c||g===d||g===e||!b&&!c&&!d&&!e)return f}return!1},expect:function(a,b,c,d){var e=this.peek(a,b,c,d);return e?(this.tokens.shift(),e):!1},consume:function(a){if(0===this.tokens.length)throw $e("ueoe","Unexpected end of expression: {0}",this.text);var b=this.expect(a);return b||this.throwError("is unexpected, expecting ["+a+"]",this.peek()),b},unaryFn:function(a,b){var c=df[a];return l(function(a,d){return c(a,d,b)},{constant:b.constant,inputs:[b]})},binaryFn:function(a,b,c,d){var e=df[b];return l(function(b,d){return e(b,d,a,c)},{constant:a.constant&&c.constant,inputs:!d&&[a,c]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return cf[a]||Kc(a,this.options,this.text)},constant:function(){var a=this.consume().value;return l(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(b,c){for(var d,e=0,f=a.length;f>e;e++)d=a[e](b,c);return d}},filterChain:function(){for(var a,b=this.expression();a=this.expect("|");)b=this.filter(b);return b},filter:function(a){var b,d,e=this.$filter(this.consume().text);if(this.peek(":"))for(b=[],d=[];this.expect(":");)b.push(this.expression());var f=[a].concat(b||[]);return l(function(f,g){var h=a(f,g);if(d){d[0]=h;for(var i=b.length;i--;)d[i+1]=b[i](f,g);return e.apply(c,d)}return e(h)},{constant:!e.$stateful&&f.every(Fc),inputs:!e.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a,b,c=this.ternary();return(b=this.expect("="))?(c.assign||this.throwError("implies assignment but ["+this.text.substring(0,b.index)+"] can not be assigned to",b),a=this.ternary(),l(function(b,d){return c.assign(b,a(b,d),d)},{inputs:[c,a]})):c},ternary:function(){var a,b,c=this.logicalOR();if((b=this.expect("?"))&&(a=this.assignment(),this.consume(":"))){var d=this.assignment();return l(function(b,e){return c(b,e)?a(b,e):d(b,e)},{constant:c.constant&&a.constant&&d.constant})}return c},logicalOR:function(){for(var a,b=this.logicalAND();a=this.expect("||");)b=this.binaryFn(b,a.text,this.logicalAND(),!0);return b},logicalAND:function(){var a,b=this.equality();return(a=this.expect("&&"))&&(b=this.binaryFn(b,a.text,this.logicalAND(),!0)),b},equality:function(){var a,b=this.relational();return(a=this.expect("==","!=","===","!=="))&&(b=this.binaryFn(b,a.text,this.equality())),b},relational:function(){var a,b=this.additive();return(a=this.expect("<",">","<=",">="))&&(b=this.binaryFn(b,a.text,this.relational())),b},additive:function(){for(var a,b=this.multiplicative();a=this.expect("+","-");)b=this.binaryFn(b,a.text,this.multiplicative());return b},multiplicative:function(){for(var a,b=this.unary();a=this.expect("*","/","%");)b=this.binaryFn(b,a.text,this.unary());return b},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(gf.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var b=this.text,c=this.consume().text,d=Kc(c,this.options,b);return l(function(b,c,e){return d(e||a(b,c))},{assign:function(d,e,f){var g=a(d,f);return g||a.assign(d,g={}),Gc(g,c,e,b)}})},objectIndex:function(a){var b=this.text,d=this.expression();return this.consume("]"),l(function(e,f){var g,h=a(e,f),i=d(e,f);return Cc(i,b),h?g=Dc(h[i],b):c},{assign:function(c,e,f){var g=Cc(d(c,f),b),h=Dc(a(c,f),b);return h||a.assign(c,h={}),h[g]=e}})},functionCall:function(a,b){var c=[];if(")"!==this.peekToken().text)do c.push(this.expression());while(this.expect(","));this.consume(")");var d=this.text,e=c.length?[]:null;return function(f,g){var h=b?b(f,g):f,i=a(f,g,h)||o;if(e)for(var j=c.length;j--;)e[j]=Dc(c[j](f,g),d);Dc(h,d),Ec(i,d);var k=i.apply?i.apply(h,e):i(e[0],e[1],e[2],e[3],e[4]);return Dc(k,d)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","));return this.consume("]"),l(function(b,c){for(var d=[],e=0,f=a.length;f>e;e++)d.push(a[e](b,c));return d},{literal:!0,constant:a.every(Fc),inputs:a})},object:function(){var a=[],b=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;var c=this.consume();c.constant?a.push(c.value):c.identifier?a.push(c.text):this.throwError("invalid key",c),this.consume(":"),b.push(this.expression())}while(this.expect(","));return this.consume("}"),l(function(c,d){for(var e={},f=0,g=b.length;g>f;f++)e[a[f]]=b[f](c,d);return e},{literal:!0,constant:b.every(Fc),inputs:b})}};var hf=ib(),jf=ib(),kf=Object.prototype.valueOf,lf=d("$sce"),mf={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Oe=d("$compile"),nf=b.createElement("a"),of=_c(a.location.href);cd.$inject=["$provide"],ed.$inject=["$locale"],fd.$inject=["$locale"];var pf=".",qf={yyyy:id("FullYear",4),yy:id("FullYear",2,0,!0),y:id("FullYear",1),MMMM:jd("Month"),MMM:jd("Month",!0),MM:id("Month",2,1),M:id("Month",1,1),dd:id("Date",2),d:id("Date",1),HH:id("Hours",2),H:id("Hours",1),hh:id("Hours",2,-12),h:id("Hours",1,-12),mm:id("Minutes",2),m:id("Minutes",1),ss:id("Seconds",2),s:id("Seconds",1),sss:id("Milliseconds",3),EEEE:jd("Day"),EEE:jd("Day",!0),a:od,Z:kd,ww:nd(2),w:nd(1)},rf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,sf=/^\-?\d+$/;pd.$inject=["$locale"];var tf=q(Od),uf=q(Qd);sd.$inject=["$parse"];var vf=q({restrict:"E",compile:function(a,b){return b.href||b.xlinkHref||b.name?void 0:function(a,b){var c="[object SVGAnimatedString]"===$d.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(c)||a.preventDefault()})}}}),wf={};f(Ee,function(a,b){if("multiple"!=a){var c=Yb("ng-"+b);wf[c]=function(){return{restrict:"A",priority:100,link:function(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}}}}}),f(Ge,function(a,b){wf[b]=function(){return{priority:100,link:function(a,c,d){if("ngPattern"===b&&"/"==d.ngPattern.charAt(0)){var e=d.ngPattern.match(Md);if(e)return void d.$set("ngPattern",new RegExp(e[1],e[2]))}a.$watch(d[b],function(a){d.$set(b,a)})}}}}),f(["src","srcset","href"],function(a){var b=Yb("ng-"+a);wf[b]=function(){return{priority:99,link:function(c,d,e){var f=a,g=a;
"href"===a&&"[object SVGAnimatedString]"===$d.call(d.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null),e.$observe(b,function(b){return b?(e.$set(g,b),void(Td&&f&&d.prop(f,e[g]))):void("href"===a&&e.$set(g,null))})}}}});var xf={$addControl:o,$$renameControl:ud,$removeControl:o,$setValidity:o,$setDirty:o,$setPristine:o,$setSubmitted:o},yf="ng-submitted";vd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var zf=function(a){return["$timeout",function(b){var d={name:"form",restrict:a?"EAC":"E",controller:vd,compile:function(a){return a.addClass(Rf).addClass(Pf),{pre:function(a,d,e,f){if(!("action"in e)){var g=function(b){a.$apply(function(){f.$commitViewValue(),f.$setSubmitted()}),b.preventDefault()};se(d[0],"submit",g),d.on("$destroy",function(){b(function(){te(d[0],"submit",g)},0,!1)})}var h=f.$$parentForm,i=f.$name;i&&(Gc(a,i,f,i),e.$observe(e.name?"name":"ngForm",function(b){i!==b&&(Gc(a,i,c,i),i=b,Gc(a,i,f,i),h.$$renameControl(f,i))})),d.on("$destroy",function(){h.$removeControl(f),i&&Gc(a,i,c,i),l(f,xf)})}}}};return d}]},Af=zf(),Bf=zf(!0),Cf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Df=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Ef=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ff=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Gf=/^(\d{4})-(\d{2})-(\d{2})$/,Hf=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,If=/^(\d{4})-W(\d\d)$/,Jf=/^(\d{4})-(\d\d)$/,Kf=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Lf=/(\s+|^)default(\s+|$)/,Mf=new d("ngModel"),Nf={text:xd,date:Bd("date",Gf,Ad(Gf,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":Bd("datetimelocal",Hf,Ad(Hf,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:Bd("time",Kf,Ad(Kf,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:Bd("week",If,zd,"yyyy-Www"),month:Bd("month",Jf,Ad(Jf,["yyyy","MM"]),"yyyy-MM"),number:Dd,url:Ed,email:Fd,radio:Gd,checkbox:Id,hidden:o,button:o,submit:o,reset:o,file:o},Of=["$browser","$sniffer","$filter","$parse",function(a,b,c,d){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Nf[Od(g.type)]||Nf.text)(e,f,g,h[0],b,a,c,d)}}}}],Pf="ng-valid",Qf="ng-invalid",Rf="ng-pristine",Sf="ng-dirty",Tf="ng-untouched",Uf="ng-touched",Vf="ng-pending",Wf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,e,g,h,i,j,k,l){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=c,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=c,this.$name=l(d.name||"",!1)(a);var m=g(d.ngModel),n=m.assign,p=m,q=n,t=null,u=this;this.$$setOptions=function(a){if(u.$options=a,a&&a.getterSetter){var b=g(d.ngModel+"()"),c=g(d.ngModel+"($$$p)");p=function(a){var c=m(a);return x(c)&&(c=b(a)),c},q=function(a){x(m(a))?c(a,{$$$p:u.$modelValue}):n(a,u.$modelValue)}}else if(!m.assign)throw Mf("nonassign","Expression '{0}' is non-assignable. Element: {1}",d.ngModel,S(e))},this.$render=o,this.$isEmpty=function(a){return r(a)||""===a||null===a||a!==a};var w=e.inheritedData("$formController")||xf,y=0;Jd({ctrl:this,$element:e,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},parentForm:w,$animate:h}),this.$setPristine=function(){u.$dirty=!1,u.$pristine=!0,h.removeClass(e,Sf),h.addClass(e,Rf)},this.$setDirty=function(){u.$dirty=!0,u.$pristine=!1,h.removeClass(e,Rf),h.addClass(e,Sf),w.$setDirty()},this.$setUntouched=function(){u.$touched=!1,u.$untouched=!0,h.setClass(e,Tf,Uf)},this.$setTouched=function(){u.$touched=!0,u.$untouched=!1,h.setClass(e,Uf,Tf)},this.$rollbackViewValue=function(){i.cancel(t),u.$viewValue=u.$$lastCommittedViewValue,u.$render()},this.$validate=function(){if(!v(u.$modelValue)||!isNaN(u.$modelValue)){var a=u.$$lastCommittedViewValue,b=u.$$rawModelValue,d=u.$$parserName||"parse",e=u.$error[d]?!1:c,f=u.$valid,g=u.$modelValue,h=u.$options&&u.$options.allowInvalid;u.$$runValidators(e,b,a,function(a){h||f===a||(u.$modelValue=a?b:c,u.$modelValue!==g&&u.$$writeModelToScope())})}},this.$$runValidators=function(a,b,d,e){function g(a){var b=u.$$parserName||"parse";if(a===c)j(b,null);else if(j(b,a),!a)return f(u.$validators,function(a,b){j(b,null)}),f(u.$asyncValidators,function(a,b){j(b,null)}),!1;return!0}function h(){var a=!0;return f(u.$validators,function(c,e){var f=c(b,d);a=a&&f,j(e,f)}),a?!0:(f(u.$asyncValidators,function(a,b){j(b,null)}),!1)}function i(){var a=[],e=!0;f(u.$asyncValidators,function(f,g){var h=f(b,d);if(!E(h))throw Mf("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",h);j(g,c),a.push(h.then(function(){j(g,!0)},function(){e=!1,j(g,!1)}))}),a.length?k.all(a).then(function(){l(e)},o):l(!0)}function j(a,b){m===y&&u.$setValidity(a,b)}function l(a){m===y&&e(a)}y++;var m=y;return g(a)&&h()?void i():void l(!1)},this.$commitViewValue=function(){var a=u.$viewValue;i.cancel(t),(u.$$lastCommittedViewValue!==a||""===a&&u.$$hasNativeValidators)&&(u.$$lastCommittedViewValue=a,u.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function b(){u.$modelValue!==h&&u.$$writeModelToScope()}var d=u.$$lastCommittedViewValue,e=d,f=r(e)?c:!0;if(f)for(var g=0;g<u.$parsers.length;g++)if(e=u.$parsers[g](e),r(e)){f=!1;break}v(u.$modelValue)&&isNaN(u.$modelValue)&&(u.$modelValue=p(a));var h=u.$modelValue,i=u.$options&&u.$options.allowInvalid;u.$$rawModelValue=e,i&&(u.$modelValue=e,b()),u.$$runValidators(f,e,d,function(a){i||(u.$modelValue=a?e:c,b())})},this.$$writeModelToScope=function(){q(a,u.$modelValue),f(u.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})},this.$setViewValue=function(a,b){u.$viewValue=a,(!u.$options||u.$options.updateOnDefault)&&u.$$debounceViewValueCommit(b)},this.$$debounceViewValueCommit=function(b){var c,d=0,e=u.$options;e&&s(e.debounce)&&(c=e.debounce,v(c)?d=c:v(c[b])?d=c[b]:v(c["default"])&&(d=c["default"])),i.cancel(t),d?t=i(function(){u.$commitViewValue()},d):j.$$phase?u.$commitViewValue():a.$apply(function(){u.$commitViewValue()})},a.$watch(function(){var b=p(a);if(b!==u.$modelValue){u.$modelValue=u.$$rawModelValue=b;for(var d=u.$formatters,e=d.length,f=b;e--;)f=d[e](f);u.$viewValue!==f&&(u.$viewValue=u.$$lastCommittedViewValue=f,u.$render(),u.$$runValidators(c,b,f,o))}return b})}],Xf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Wf,priority:1,compile:function(b){return b.addClass(Rf).addClass(Tf).addClass(Pf),{pre:function(a,b,c,d){var e=d[0],f=d[1]||xf;e.$$setOptions(d[2]&&d[2].$options),f.$addControl(e),c.$observe("name",function(a){e.$name!==a&&f.$$renameControl(e,a)}),a.$on("$destroy",function(){f.$removeControl(e)})},post:function(b,c,d,e){var f=e[0];f.$options&&f.$options.updateOn&&c.on(f.$options.updateOn,function(a){f.$$debounceViewValueCommit(a&&a.type)}),c.on("blur",function(){f.$touched||(a.$$phase?b.$evalAsync(f.$setTouched):b.$apply(f.$setTouched))})}}}}}],Yf=q({restrict:"A",require:"ngModel",link:function(a,b,c,d){d.$viewChangeListeners.push(function(){a.$eval(c.ngChange)})}}),Zf=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){d&&(c.required=!0,d.$validators.required=function(a,b){return!c.required||!d.$isEmpty(b)},c.$observe("required",function(){d.$validate()}))}}},$f=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,e,f){if(f){var g,h=e.ngPattern||e.pattern;e.$observe("pattern",function(a){if(u(a)&&a.length>0&&(a=new RegExp("^"+a+"$")),a&&!a.test)throw d("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",h,a,S(b));g=a||c,f.$validate()}),f.$validators.pattern=function(a){return f.$isEmpty(a)||r(g)||g.test(a)}}}}},_f=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){if(d){var e=-1;c.$observe("maxlength",function(a){var b=m(a);e=isNaN(b)?-1:b,d.$validate()}),d.$validators.maxlength=function(a,b){return 0>e||d.$isEmpty(a)||b.length<=e}}}}},ag=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){if(d){var e=0;c.$observe("minlength",function(a){e=m(a)||0,d.$validate()}),d.$validators.minlength=function(a,b){return d.$isEmpty(b)||b.length>=e}}}}},bg=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,e){var g=b.attr(d.$attr.ngList)||", ",h="false"!==d.ngTrim,i=h?ee(g):g,j=function(a){if(!r(a)){var b=[];return a&&f(a.split(i),function(a){a&&b.push(h?ee(a):a)}),b}};e.$parsers.push(j),e.$formatters.push(function(a){return de(a)?a.join(g):c}),e.$isEmpty=function(a){return!a||!a.length}}}},cg=/^(true|false|\d+)$/,dg=function(){return{restrict:"A",priority:100,compile:function(a,b){return cg.test(b.ngValue)?function(a,b,c){c.$set("value",a.$eval(c.ngValue))}:function(a,b,c){a.$watch(c.ngValue,function(a){c.$set("value",a)})}}}},eg=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=a.$eval(b.ngModelOptions),this.$options.updateOn!==c?(this.$options.updateOnDefault=!1,this.$options.updateOn=ee(this.$options.updateOn.replace(Lf,function(){return d.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},fg=["$compile",function(a){return{restrict:"AC",compile:function(b){return a.$$addBindingClass(b),function(b,d,e){a.$$addBindingInfo(d,e.ngBind),d=d[0],b.$watch(e.ngBind,function(a){d.textContent=a===c?"":a})}}}}],gg=["$interpolate","$compile",function(a,b){return{compile:function(d){return b.$$addBindingClass(d),function(d,e,f){var g=a(e.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(e,g.expressions),e=e[0],f.$observe("ngBindTemplate",function(a){e.textContent=a===c?"":a})}}}}],hg=["$sce","$parse","$compile",function(a,b,c){return{restrict:"A",compile:function(d,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});return c.$$addBindingClass(d),function(b,d,e){c.$$addBindingInfo(d,e.ngBindHtml),b.$watch(g,function(){d.html(a.getTrustedHtml(f(b))||"")})}}}}],ig=Ld("",!0),jg=Ld("Odd",0),kg=Ld("Even",1),lg=td({compile:function(a,b){b.$set("ngCloak",c),a.removeClass("ng-cloak")}}),mg=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],ng={},og={blur:!0,focus:!0};f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Yb("ng-"+a);ng[b]=["$parse","$rootScope",function(c,d){return{restrict:"A",compile:function(e,f){var g=c(f[b],null,!0);return function(b,c){c.on(a,function(c){var e=function(){g(b,{$event:c})};og[a]&&d.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var pg=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,i,j;c.$watch(e.ngIf,function(c){c?i||g(function(c,f){i=f,c[c.length++]=b.createComment(" end ngIf: "+e.ngIf+" "),h={clone:c},a.enter(c,d.parent(),d)}):(j&&(j.remove(),j=null),i&&(i.$destroy(),i=null),h&&(j=hb(h.clone),a.leave(j).then(function(){j=null}),h=null))})}}}],qg=["$templateRequest","$anchorScroll","$animate","$sce",function(a,b,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ae.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",i=f.autoscroll;return function(e,f,j,k,l){var m,n,o,p=0,q=function(){n&&(n.remove(),n=null),m&&(m.$destroy(),m=null),o&&(c.leave(o).then(function(){n=null}),n=o,o=null)};e.$watch(d.parseAsResourceUrl(g),function(d){var g=function(){!s(i)||i&&!e.$eval(i)||b()},j=++p;d?(a(d,!0).then(function(a){if(j===p){var b=e.$new();k.template=a;var i=l(b,function(a){q(),c.enter(a,null,f).then(g)});m=b,o=i,m.$emit("$includeContentLoaded",d),e.$eval(h)}},function(){j===p&&(q(),e.$emit("$includeContentError",d))}),e.$emit("$includeContentRequested",d)):(q(),k.template=null)})}}}}],rg=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){return/SVG/.test(d[0].toString())?(d.empty(),void a(rb(f.template,b).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),void a(d.contents())(c))}}}],sg=td({priority:450,compile:function(){return{pre:function(a,b,c){a.$eval(c.ngInit)}}}}),tg=td({terminal:!0,priority:1e3}),ug=["$locale","$interpolate",function(a,b){var c=/{}/g,d=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(e,g,h){function i(a){g.text(a||"")}var j,k=h.count,l=h.$attr.when&&g.attr(h.$attr.when),m=h.offset||0,n=e.$eval(l)||{},o={},p=b.startSymbol(),q=b.endSymbol(),r=p+k+"-"+m+q,s=ae.noop;f(h,function(a,b){var c=d.exec(b);if(c){var e=(c[1]?"-":"")+Od(c[2]);n[e]=g.attr(h.$attr[b])}}),f(n,function(a,d){o[d]=b(a.replace(c,r))}),e.$watch(k,function(b){var c=parseFloat(b),d=isNaN(c);d||c in n||(c=a.pluralCat(c-m)),c===j||d&&isNaN(j)||(s(),s=e.$watch(o[c],i),j=c)})}}}],vg=["$parse","$animate",function(a,g){var h="$$NG_REMOVED",i=d("ngRepeat"),j=function(a,b,c,d,e,f,g){a[c]=d,e&&(a[e]=f),a.$index=b,a.$first=0===b,a.$last=b===g-1,a.$middle=!(a.$first||a.$last),a.$odd=!(a.$even=0===(1&b))},k=function(a){return a.clone[0]},l=function(a){return a.clone[a.clone.length-1]};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(d,m){var n=m.ngRepeat,o=b.createComment(" end ngRepeat: "+n+" "),p=n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw i("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",n);var q=p[1],r=p[2],s=p[3],t=p[4];if(p=q.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/),!p)throw i("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",q);var u=p[3]||p[1],v=p[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(s)))throw i("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",s);var w,x,y,z,A={$id:Mb};return t?w=a(t):(y=function(a,b){return Mb(b)},z=function(a){return a}),function(a,b,d,m,p){w&&(x=function(b,c,d){return v&&(A[v]=b),A[u]=c,A.$index=d,w(a,A)});var q=ib();a.$watchCollection(r,function(d){var m,r,t,w,A,B,C,D,E,F,G,H,I=b[0],J=ib();if(s&&(a[s]=d),e(d))E=d,D=x||y;else{D=x||z,E=[];for(var K in d)d.hasOwnProperty(K)&&"$"!=K.charAt(0)&&E.push(K);E.sort()}for(w=E.length,G=new Array(w),m=0;w>m;m++)if(A=d===E?m:E[m],B=d[A],C=D(A,B,m),q[C])F=q[C],delete q[C],J[C]=F,G[m]=F;else{if(J[C])throw f(G,function(a){a&&a.scope&&(q[a.id]=a)}),i("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",n,C,B);G[m]={id:C,scope:c,clone:c},J[C]=!0}for(var L in q){if(F=q[L],H=hb(F.clone),g.leave(H),H[0].parentNode)for(m=0,r=H.length;r>m;m++)H[m][h]=!0;F.scope.$destroy()}for(m=0;w>m;m++)if(A=d===E?m:E[m],B=d[A],F=G[m],F.scope){t=I;do t=t.nextSibling;while(t&&t[h]);k(F)!=t&&g.move(hb(F.clone),null,Ud(I)),I=l(F),j(F.scope,m,u,B,v,A,w)}else p(function(a,b){F.scope=b;var c=o.cloneNode(!1);a[a.length++]=c,g.enter(a,null,Ud(I)),I=c,F.clone=a,J[F.id]=F,j(F.scope,m,u,B,v,A,w)});q=J})}}}}],wg="ng-hide",xg="ng-hide-animate",yg=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,c,d){b.$watch(d.ngShow,function(b){a[b?"removeClass":"addClass"](c,wg,{tempClasses:xg})})}}}],zg=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,c,d){b.$watch(d.ngHide,function(b){a[b?"addClass":"removeClass"](c,wg,{tempClasses:xg})})}}}],Ag=td(function(a,b,c){a.$watch(c.ngStyle,function(a,c){c&&a!==c&&f(c,function(a,c){b.css(c,"")}),a&&b.css(a)},!0)}),Bg=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var h=e.ngSwitch||e.on,i=[],j=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};c.$watch(h,function(c){var d,e;for(d=0,e=k.length;e>d;++d)a.cancel(k[d]);for(k.length=0,d=0,e=l.length;e>d;++d){var h=hb(j[d].clone);l[d].$destroy();var n=k[d]=a.leave(h);n.then(m(k,d))}j.length=0,l.length=0,(i=g.cases["!"+c]||g.cases["?"])&&f(i,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.createComment(" end ngSwitchWhen: ");var g={clone:d};j.push(g),a.enter(d,f.parent(),f)})})})}}}],Cg=td({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,c,d,e){d.cases["!"+c.ngSwitchWhen]=d.cases["!"+c.ngSwitchWhen]||[],d.cases["!"+c.ngSwitchWhen].push({transclude:e,element:b})}}),Dg=td({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,c,d,e){d.cases["?"]=d.cases["?"]||[],d.cases["?"].push({transclude:e,element:b})}}),Eg=td({restrict:"EAC",link:function(a,b,c,e,f){if(!f)throw d("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",S(b));f(function(a){b.empty(),b.append(a)})}}),Fg=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,c){if("text/ng-template"==c.type){var d=c.id,e=b[0].text;a.put(d,e)}}}}],Gg=d("ngOptions"),Hg=q({restrict:"A",terminal:!0}),Ig=["$compile","$parse",function(a,d){var e=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,h={$setViewValue:o};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,b,c){var d,e,f=this,g={},i=h;f.databound=c.ngModel,f.init=function(a,b,c){i=a,d=b,e=c},f.addOption=function(b,c){fb(b,'"option value"'),g[b]=!0,i.$viewValue==b&&(a.val(b),e.parent()&&e.remove()),c&&c[0].hasAttribute("selected")&&(c[0].selected=!0)},f.removeOption=function(a){this.hasOption(a)&&(delete g[a],i.$viewValue==a&&this.renderUnknownOption(a))},f.renderUnknownOption=function(b){var c="? "+Mb(b)+" ?";e.val(c),a.prepend(e),a.val(c),e.prop("selected",!0)},f.hasOption=function(a){return g.hasOwnProperty(a)},b.$on("$destroy",function(){f.renderUnknownOption=o})}],link:function(h,i,j,k){function l(a,b,c,d){c.$render=function(){var a=c.$viewValue;d.hasOption(a)?(z.parent()&&z.remove(),b.val(a),""===a&&o.prop("selected",!0)):r(a)&&o?b.val(""):d.renderUnknownOption(a)},b.on("change",function(){a.$apply(function(){z.parent()&&z.remove(),c.$setViewValue(b.val())})})}function m(a,b,c){var d;c.$render=function(){var a=new Nb(c.$viewValue);f(b.find("option"),function(b){b.selected=s(a.get(b.value))})},a.$watch(function(){L(d,c.$viewValue)||(d=K(c.$viewValue),c.$render())}),b.on("change",function(){a.$apply(function(){var a=[];f(b.find("option"),function(b){b.selected&&a.push(b.value)}),c.$setViewValue(a)})})}function n(b,h,i){function j(a,c,d){return M[B]=d,E&&(M[E]=c),a(b,M)}function k(){b.$apply(function(){var a,c=H(b)||[];if(t)a=[],f(h.val(),function(b){b=J?K[b]:b,a.push(l(b,c[b]))});else{var d=J?K[h.val()]:h.val();a=l(d,c[d])}i.$setViewValue(a),r()})}function l(a,b){if("?"===a)return c;if(""===a)return null;var d=D?D:G;return j(d,a,b)}function m(){var a,c=H(b);if(c&&de(c)){a=new Array(c.length);for(var d=0,e=c.length;e>d;d++)a[d]=j(A,d,c[d]);return a}if(c){a={};for(var f in c)c.hasOwnProperty(f)&&(a[f]=j(A,f,c[f]))}return a}function n(a){var b;if(t)if(J&&de(a)){b=new Nb([]);for(var c=0;c<a.length;c++)b.put(j(J,null,a[c]),!0)}else b=new Nb(a);else J&&(a=j(J,null,a));return function(c,d){var e;return e=J?J:D?D:G,t?s(b.remove(j(e,c,d))):a===j(e,c,d)}}function o(){w||(b.$$postDigest(r),w=!0)}function q(a,b,c){a[b]=a[b]||0,a[b]+=c?1:-1}function r(){w=!1;var a,c,d,e,k,l,m,o,r,u,z,B,C,D,G,I,N,O={"":[]},P=[""],Q=i.$viewValue,R=H(b)||[],S=E?g(R):R,T={},U=n(Q),V=!1;for(K={},B=0;u=S.length,u>B;B++)m=B,E&&(m=S[B],"$"===m.charAt(0))||(o=R[m],a=j(F,m,o)||"",(c=O[a])||(c=O[a]=[],P.push(a)),C=U(m,o),V=V||C,I=j(A,m,o),I=s(I)?I:"",N=J?J(b,M):E?S[B]:B,J&&(K[N]=m),c.push({id:N,label:I,selected:C}));for(t||(v||null===Q?O[""].unshift({id:"",label:"",selected:!V}):V||O[""].unshift({id:"?",label:"",selected:!0})),z=0,r=P.length;r>z;z++){for(a=P[z],c=O[a],L.length<=z?(e={element:y.clone().attr("label",a),label:c.label},k=[e],L.push(k),h.append(e.element)):(k=L[z],e=k[0],e.label!=a&&e.element.attr("label",e.label=a)),D=null,B=0,u=c.length;u>B;B++)d=c[B],(l=k[B+1])?(D=l.element,l.label!==d.label&&(q(T,l.label,!1),q(T,d.label,!0),D.text(l.label=d.label),D.prop("label",l.label)),l.id!==d.id&&D.val(l.id=d.id),D[0].selected!==d.selected&&(D.prop("selected",l.selected=d.selected),Td&&D.prop("selected",l.selected))):(""===d.id&&v?G=v:(G=x.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),k.push(l={element:G,label:d.label,id:d.id,selected:d.selected}),q(T,d.label,!0),D?D.after(G):e.element.append(G),D=G);for(B++;k.length>B;)d=k.pop(),q(T,d.label,!1),d.element.remove();f(T,function(a,b){a>0?p.addOption(b):0>a&&p.removeOption(b)})}for(;L.length>z;)L.pop()[0].element.remove()}var z;if(!(z=u.match(e)))throw Gg("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",u,S(h));var A=d(z[2]||z[1]),B=z[4]||z[6],C=/ as /.test(z[0])&&z[1],D=C?d(C):null,E=z[5],F=d(z[3]||""),G=d(z[2]?z[1]:B),H=d(z[7]),I=z[8],J=I?d(z[8]):null,K={},L=[[{element:h,label:""}]],M={};v&&(a(v)(b),v.removeClass("ng-scope"),v.remove()),h.empty(),h.on("change",k),i.$render=r,b.$watchCollection(H,o),b.$watchCollection(m,o),t&&b.$watchCollection(function(){return i.$modelValue},o)}if(k[1]){for(var o,p=k[0],q=k[1],t=j.multiple,u=j.ngOptions,v=!1,w=!1,x=Ud(b.createElement("option")),y=Ud(b.createElement("optgroup")),z=x.clone(),A=0,B=i.children(),C=B.length;C>A;A++)if(""===B[A].value){o=v=B.eq(A);break}p.init(q,v,z),t&&(q.$isEmpty=function(a){return!a||0===a.length}),u?n(h,i,q):t?m(h,i,q):l(h,i,q,p)}}}}],Jg=["$interpolate",function(a){var b={addOption:o,removeOption:o};return{restrict:"E",priority:100,compile:function(c,d){if(r(d.value)){var e=a(c.text(),!0);e||d.$set("value",c.text())}return function(a,c,d){var f="$selectController",g=c.parent(),h=g.data(f)||g.parent().data(f);h&&h.databound||(h=b),e?a.$watch(e,function(a,b){d.$set("value",a),b!==a&&h.removeOption(b),h.addOption(a,c)}):h.addOption(d.value,c),c.on("$destroy",function(){h.removeOption(d.value)})}}}}],Kg=q({restrict:"E",terminal:!1});return a.angular.bootstrap?void console.log("WARNING: Tried to load angular more than once."):(cb(),mb(ae),void Ud(b).ready(function(){Z(b,$)}))}(window,document),!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),function(a,b,c){"use strict";b.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){var a="$$ngAnimateChildren";return function(c,d,e){var f=e.ngAnimateChildren;b.isString(f)&&0===f.length?d.data(a,!0):c.$watch(f,function(b){d.data(a,!!b)})}}).factory("$$animateReflow",["$$rAF","$document",function(a,b){var c=b[0].body;return function(b){return a(function(){c.offsetWidth+1;b()})}}]).config(["$provide","$animateProvider",function(d,e){function f(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType==p)return c}}function g(a){return a&&b.element(a)}function h(a){return b.element(f(a))}function i(a,b){return f(a)==f(b)}var j=b.noop,k=b.forEach,l=e.$$selectors,m=b.isArray,n=b.isString,o=b.isObject,p=1,q="$$ngAnimateState",r="$$ngAnimateChildren",s="ng-animate",t={running:!0};d.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest",function(a,c,d,p,u,v,w,x,y){function z(a,b){var c=a.data(q)||{};return b&&(c.running=!0,c.structural=!0,a.data(q,c)),c.disabled||c.running&&c.structural}function A(a){var b,d=c.defer();return d.promise.$$cancelFn=function(){b&&b()},w.$$postDigest(function(){b=a(function(){d.resolve()})}),d.promise}function B(a){return o(a)?(a.tempClasses&&n(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a):void 0}function C(a,b,c){c=c||{};var d={};k(c,function(a,b){k(b.split(" "),function(b){d[b]=a})});var e=Object.create(null);k((a.attr("class")||"").split(/\s+/),function(a){e[a]=!0});var f=[],g=[];return k(b&&b.classes||[],function(a,b){var c=e[b],h=d[b]||{};a===!1?(c||"addClass"==h.event)&&g.push(b):a===!0&&(c&&"removeClass"!=h.event||f.push(b))}),f.length+g.length>0&&[f.join(" "),g.join(" ")]}function D(a){if(a){var b=[],c={},e=a.substr(1).split(".");(p.transitions||p.animations)&&b.push(d.get(l[""]));for(var f=0;f<e.length;f++){var g=e[f],h=l[g];h&&!c[g]&&(b.push(d.get(h)),c[g]=!0)}return b}}function E(a,c,d,e){function f(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];return c||d?("leave"==b&&(d=c,c=null),w.push({event:b,fn:c}),t.push({event:b,fn:d}),!0):void 0}function g(b,c,f){function g(a){if(c){if((c[a]||j)(),++m<h.length)return;c=null}f()}var h=[];k(b,function(a){a.fn&&h.push(a)});var m=0;k(h,function(b,f){var h=function(){g(f)};switch(b.event){case"setClass":c.push(b.fn(a,i,l,h,e));break;case"animate":c.push(b.fn(a,d,e.from,e.to,h));break;case"addClass":c.push(b.fn(a,i||d,h,e));break;case"removeClass":c.push(b.fn(a,l||d,h,e));break;default:c.push(b.fn(a,h,e))}}),c&&0===c.length&&f()}var h=a[0];if(h){e&&(e.to=e.to||{},e.from=e.from||{});var i,l;m(d)&&(i=d[0],l=d[1],i?l?d=i+" "+l:(d=i,c="addClass"):(d=l,c="removeClass"));var n="setClass"==c,o=n||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class"),q=p+" "+d;if(M(q)){var r=j,s=[],t=[],u=j,v=[],w=[],x=(" "+q).replace(/\s+/g,".");return k(D(x),function(a){var b=f(a,c);!b&&n&&(f(a,"addClass"),f(a,"removeClass"))}),{node:h,event:c,className:d,isClassBased:o,isSetClassOperation:n,applyStyles:function(){e&&a.css(b.extend(e.from||{},e.to||{}))},before:function(a){r=a,g(t,s,function(){r=j,a()})},after:function(a){u=a,g(w,v,function(){u=j,a()})},cancel:function(){s&&(k(s,function(a){(a||j)(!0)}),r(!0)),v&&(k(v,function(a){(a||j)(!0)}),u(!0))}}}}}function F(a,c,d,e,f,g,h,i){function l(b){var e="$animate:"+b;w&&w[e]&&w[e].length>0&&v(function(){d.triggerHandler(e,{event:a,className:c})})}function m(){l("before")}function n(){l("after")}function o(){l("close"),i()}function p(){p.hasBeenRun||(p.hasBeenRun=!0,g())}function r(){if(!r.hasBeenRun){u&&u.applyStyles(),r.hasBeenRun=!0,h&&h.tempClasses&&k(h.tempClasses,function(a){d.removeClass(a)});var b=d.data(q);b&&(u&&u.isClassBased?H(d,c):(v(function(){var b=d.data(q)||{};G==b.index&&H(d,c,a)}),d.data(q,b))),o()}}var t=j,u=E(d,a,c,h);if(!u)return p(),m(),n(),r(),t;a=u.event,c=u.className;var w=b.element._data(u.node);if(w=w&&w.events,e||(e=f?f.parent():d.parent()),I(d,e))return p(),m(),n(),r(),t;var x=d.data(q)||{},y=x.active||{},z=x.totalActive||0,A=x.last,B=!1;if(z>0){var C=[];if(u.isClassBased){if("setClass"==A.event)C.push(A),H(d,c);else if(y[c]){var D=y[c];D.event==a?B=!0:(C.push(D),H(d,c))}}else if("leave"==a&&y["ng-leave"])B=!0;else{for(var F in y)C.push(y[F]);x={},H(d,!0)}C.length>0&&k(C,function(a){a.cancel()})}if(!u.isClassBased||u.isSetClassOperation||"animate"==a||B||(B="addClass"==a==d.hasClass(c)),B)return p(),m(),n(),o(),t;y=x.active||{},z=x.totalActive||0,"leave"==a&&d.one("$destroy",function(){var a=b.element(this),c=a.data(q);if(c){var d=c.active["ng-leave"];d&&(d.cancel(),H(a,"ng-leave"))}}),d.addClass(s),h&&h.tempClasses&&k(h.tempClasses,function(a){d.addClass(a)});var G=K++;return z++,y[c]=u,d.data(q,{last:u,active:y,index:G,totalActive:z}),m(),u.before(function(b){var e=d.data(q);b=b||!e||!e.active[c]||u.isClassBased&&e.active[c].event!=a,p(),b===!0?r():(n(),u.after(r))}),u.cancel}function G(a){var c=f(a);if(c){var d=b.isFunction(c.getElementsByClassName)?c.getElementsByClassName(s):c.querySelectorAll("."+s);k(d,function(a){a=b.element(a);var c=a.data(q);c&&c.active&&k(c.active,function(a){a.cancel()})})}}function H(a,b){if(i(a,u))t.disabled||(t.running=!1,t.structural=!1);else if(b){var c=a.data(q)||{},d=b===!0;!d&&c.active&&c.active[b]&&(c.totalActive--,delete c.active[b]),(d||!c.totalActive)&&(a.removeClass(s),a.removeData(q))}}function I(a,c){if(t.disabled)return!0;if(i(a,u))return t.running;var d,e,f;do{if(0===c.length)break;var g=i(c,u),h=g?t:c.data(q)||{};if(h.disabled)return!0;if(g&&(f=!0),d!==!1){var j=c.data(r);b.isDefined(j)&&(d=j)}e=e||h.running||h.last&&!h.last.isClassBased}while(c=c.parent());return!f||!d&&e}u.data(q,t);var J=w.$watch(function(){return y.totalPendingRequests},function(a){0===a&&(J(),w.$$postDigest(function(){w.$$postDigest(function(){t.running=!1})}))}),K=0,L=e.classNameFilter(),M=L?function(a){return L.test(a)}:function(){return!0};return{animate:function(a,b,c,d,e){return d=d||"ng-inline-animate",e=B(e)||{},e.from=c?b:null,e.to=c?c:b,A(function(b){return F("animate",d,h(a),null,null,j,e,b)})},enter:function(c,d,e,f){return f=B(f),c=b.element(c),d=g(d),e=g(e),z(c,!0),a.enter(c,d,e),A(function(a){return F("enter","ng-enter",h(c),d,e,j,f,a)})},leave:function(c,d){return d=B(d),c=b.element(c),G(c),z(c,!0),A(function(b){return F("leave","ng-leave",h(c),null,null,function(){a.leave(c)},d,b)})},move:function(c,d,e,f){return f=B(f),c=b.element(c),d=g(d),e=g(e),G(c),z(c,!0),a.move(c,d,e),A(function(a){return F("move","ng-move",h(c),d,e,j,f,a)})},addClass:function(a,b,c){return this.setClass(a,b,[],c)},removeClass:function(a,b,c){return this.setClass(a,[],b,c)},setClass:function(c,d,e,g){g=B(g);var i="$$animateClasses";if(c=b.element(c),c=h(c),z(c))return a.$$setClassImmediately(c,d,e,g);var j,l=c.data(i),n=!!l;return l||(l={},l.classes={}),j=l.classes,d=m(d)?d:d.split(" "),k(d,function(a){a&&a.length&&(j[a]=!0)}),e=m(e)?e:e.split(" "),k(e,function(a){a&&a.length&&(j[a]=!1)}),n?(g&&l.options&&(l.options=b.extend(l.options||{},g)),l.promise):(c.data(i,l={classes:j,options:g}),l.promise=A(function(b){var d=c.parent(),e=f(c),g=e.parentNode;if(!g||g.$$NG_REMOVED||e.$$NG_REMOVED)return void b();var h=c.data(i);c.removeData(i);var j=c.data(q)||{},k=C(c,h,j.active);return k?F("setClass",k,c,d,null,function(){k[0]&&a.$$addClassImmediately(c,k[0]),k[1]&&a.$$removeClassImmediately(c,k[1])},h.options,b):b()}))},cancel:function(a){a.$$cancelFn()},enabled:function(a,b){switch(arguments.length){case 2:if(a)H(b);else{var c=b.data(q)||{};c.disabled=!0,b.data(q,c)}break;case 1:t.disabled=!a;break;default:a=!t.disabled}return!!a}}}]),e.register("",["$window","$sniffer","$timeout","$$animateReflow",function(d,e,g,h){function i(){I||(I=h(function(){V=[],I=null,T={}}))}function l(a,b){I&&I(),V.push(b),I=h(function(){k(V,function(a){a()}),V=[],I=null,T={}})}function o(a,c){var d=f(a);a=b.element(d),Y.push(a);var e=Date.now()+c;X>=e||(g.cancel(W),X=e,W=g(function(){q(Y),Y=[]},c,!1))}function q(a){k(a,function(a){var b=a.data(P);b&&k(b.closeAnimationFns,function(a){a()})})}function r(a,b){var c=b?T[b]:null;if(!c){var e=0,f=0,g=0,h=0;k(a,function(a){if(a.nodeType==p){var b=d.getComputedStyle(a)||{},c=b[D+J];e=Math.max(s(c),e);var i=b[D+L];f=Math.max(s(i),f);{b[F+L]}h=Math.max(s(b[F+L]),h);var j=s(b[F+J]);j>0&&(j*=parseInt(b[F+M],10)||1),g=Math.max(j,g)}}),c={total:0,transitionDelay:f,transitionDuration:e,animationDelay:h,animationDuration:g},b&&(T[b]=c)}return c}function s(a){var b=0,c=n(a)?a.split(/\s*,\s*/):[];return k(c,function(a){b=Math.max(parseFloat(a)||0,b)}),b}function t(a){var b=a.parent(),c=b.data(O);return c||(b.data(O,++U),c=U),c+"-"+f(a).getAttribute("class")}function u(a,b,c,d){var e=["ng-enter","ng-leave","ng-move"].indexOf(c)>=0,g=t(b),h=g+" "+c,i=T[h]?++T[h].total:0,j={};if(i>0){var k=c+"-stagger",l=g+" "+k,m=!T[l];m&&b.addClass(k),j=r(b,l),m&&b.removeClass(k)
}b.addClass(c);var n=b.data(P)||{},o=r(b,h),p=o.transitionDuration,q=o.animationDuration;if(e&&0===p&&0===q)return b.removeClass(c),!1;var s=d||e&&p>0,u=q>0&&j.animationDelay>0&&0===j.animationDuration,v=n.closeAnimationFns||[];b.data(P,{stagger:j,cacheKey:h,running:n.running||0,itemIndex:i,blockTransition:s,closeAnimationFns:v});var y=f(b);return s&&(w(y,!0),d&&b.css(d)),u&&x(y,!0),!0}function v(a,b,c,d,e){function h(){b.off(L,i),b.removeClass(m),b.removeClass(n),J&&g.cancel(J),B(b,c);var a=f(b);for(var d in q)a.style.removeProperty(q[d])}function i(a){a.stopPropagation();var b=a.originalEvent||a,c=b.$manualTimeStamp||b.timeStamp||Date.now(),e=parseFloat(b.elapsedTime.toFixed(Q));Math.max(c-K,0)>=F&&e>=C&&d()}var j=f(b),l=b.data(P);if(-1==j.getAttribute("class").indexOf(c)||!l)return void d();var m="",n="";k(c.split(" "),function(a,b){var c=(b>0?" ":"")+a;m+=c+"-active",n+=c+"-pending"});var p="",q=[],s=l.itemIndex,t=l.stagger,u=0;if(s>0){var v=0;t.transitionDelay>0&&0===t.transitionDuration&&(v=t.transitionDelay*s);var y=0;t.animationDelay>0&&0===t.animationDuration&&(y=t.animationDelay*s,q.push(H+"animation-play-state")),u=Math.round(100*Math.max(v,y))/100}u||(b.addClass(m),l.blockTransition&&w(j,!1));var z=l.cacheKey+" "+m,A=r(b,z),C=Math.max(A.transitionDuration,A.animationDuration);if(0===C)return b.removeClass(m),B(b,c),void d();!u&&e&&(A.transitionDuration||(b.css("transition",A.animationDuration+"s linear all"),q.push("transition")),b.css(e));var D=Math.max(A.transitionDelay,A.animationDelay),F=D*S;if(q.length>0){var I=j.getAttribute("style")||"";";"!==I.charAt(I.length-1)&&(I+=";"),j.setAttribute("style",I+" "+p)}var J,K=Date.now(),L=G+" "+E,M=(D+C)*R,N=(u+M)*S;return u>0&&(b.addClass(n),J=g(function(){J=null,A.transitionDuration>0&&w(j,!1),A.animationDuration>0&&x(j,!1),b.addClass(m),b.removeClass(n),e&&(0===A.transitionDuration&&b.css("transition",A.animationDuration+"s linear all"),b.css(e),q.push("transition"))},u*S,!1)),b.on(L,i),l.closeAnimationFns.push(function(){h(),d()}),l.running++,o(b,N),h}function w(a,b){a.style[D+K]=b?"none":""}function x(a,b){a.style[F+N]=b?"paused":""}function y(a,b,c,d){return u(a,b,c,d)?function(a){a&&B(b,c)}:void 0}function z(a,b,c,d,e){return b.data(P)?v(a,b,c,d,e):(B(b,c),void d())}function A(a,b,c,d,e){var f=y(a,b,c,e.from);if(!f)return i(),void d();var g=f;return l(b,function(){g=z(a,b,c,d,e.to)}),function(a){(g||j)(a)}}function B(a,b){a.removeClass(b);var c=a.data(P);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(P))}function C(a,b){var c="";return a=m(a)?a:a.split(/\s+/),k(a,function(a,d){a&&a.length>0&&(c+=(d>0?" ":"")+a+b)}),c}var D,E,F,G,H="";a.ontransitionend===c&&a.onwebkittransitionend!==c?(H="-webkit-",D="WebkitTransition",E="webkitTransitionEnd transitionend"):(D="transition",E="transitionend"),a.onanimationend===c&&a.onwebkitanimationend!==c?(H="-webkit-",F="WebkitAnimation",G="webkitAnimationEnd animationend"):(F="animation",G="animationend");var I,J="Duration",K="Property",L="Delay",M="IterationCount",N="PlayState",O="$$ngAnimateKey",P="$$ngAnimateCSS3Data",Q=3,R=1.5,S=1e3,T={},U=0,V=[],W=null,X=0,Y=[];return{animate:function(a,b,c,d,e,f){return f=f||{},f.from=c,f.to=d,A("animate",a,b,e,f)},enter:function(a,b,c){return c=c||{},A("enter",a,"ng-enter",b,c)},leave:function(a,b,c){return c=c||{},A("leave",a,"ng-leave",b,c)},move:function(a,b,c){return c=c||{},A("move",a,"ng-move",b,c)},beforeSetClass:function(a,b,c,d,e){e=e||{};var f=C(c,"-remove")+" "+C(b,"-add"),g=y("setClass",a,f,e.from);return g?(l(a,d),g):(i(),void d())},beforeAddClass:function(a,b,c,d){d=d||{};var e=y("addClass",a,C(b,"-add"),d.from);return e?(l(a,c),e):(i(),void c())},beforeRemoveClass:function(a,b,c,d){d=d||{};var e=y("removeClass",a,C(b,"-remove"),d.from);return e?(l(a,c),e):(i(),void c())},setClass:function(a,b,c,d,e){e=e||{},c=C(c,"-remove"),b=C(b,"-add");var f=c+" "+b;return z("setClass",a,f,d,e.to)},addClass:function(a,b,c,d){return d=d||{},z("addClass",a,C(b,"-add"),c,d.to)},removeClass:function(a,b,c,d){return d=d||{},z("removeClass",a,C(b,"-remove"),c,d.to)}}}])}])}(window,window.angular),function(a,b,c){"use strict";b.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(a,d){function e(){var a,e,f,i;for(a in h)k(g[a])&&d.cookies(a,c);for(a in g)e=g[a],b.isString(e)||(e=""+e,g[a]=e),e!==h[a]&&(d.cookies(a,e),i=!0);if(i){i=!1,f=d.cookies();for(a in g)g[a]!==f[a]&&(k(f[a])?delete g[a]:g[a]=f[a],i=!0)}}var f,g={},h={},i=!1,j=b.copy,k=b.isUndefined;return d.addPollFn(function(){var b=d.cookies();f!=b&&(f=b,j(b,h),j(b,g),i&&a.$apply())})(),i=!0,a.$watch(e),g}]).factory("$cookieStore",["$cookies",function(a){return{get:function(c){var d=a[c];return d?b.fromJson(d):d},put:function(c,d){a[c]=b.toJson(d)},remove:function(b){delete a[b]}}}])}(window,window.angular),function(a,b,c){"use strict";function d(a){return null!=a&&""!==a&&"hasOwnProperty"!==a&&h.test("."+a)}function e(a,b){if(!d(b))throw g("badmember",'Dotted member path "@{0}" is invalid.',b);for(var e=b.split("."),f=0,h=e.length;h>f&&a!==c;f++){var i=e[f];a=null!==a?a[i]:c}return a}function f(a,c){c=c||{},b.forEach(c,function(a,b){delete c[b]});for(var d in a)!a.hasOwnProperty(d)||"$"===d.charAt(0)&&"$"===d.charAt(1)||(c[d]=a[d]);return c}var g=b.$$minErr("$resource"),h=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;b.module("ngResource",["ng"]).provider("$resource",function(){var a=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}},this.$get=["$http","$q",function(d,h){function i(a){return j(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function j(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function k(b,c){this.template=b,this.defaults=o({},a.defaults,c),this.urlParams={}}function l(i,j,r,s){function t(a,b){var c={};return b=o({},j,b),n(b,function(b,d){q(b)&&(b=b()),c[d]=b&&b.charAt&&"@"==b.charAt(0)?e(a,b.substr(1)):b}),c}function u(a){return a.resource}function v(a){f(a||{},this)}var w=new k(i,s);return r=o({},a.defaults.actions,r),v.prototype.toJSON=function(){var a=o({},this);return delete a.$promise,delete a.$resolved,a},n(r,function(a,e){var i=/^(POST|PUT|PATCH)$/i.test(a.method);v[e]=function(j,k,l,r){var s,x,y,z={};switch(arguments.length){case 4:y=r,x=l;case 3:case 2:if(!q(k)){z=j,s=k,x=l;break}if(q(j)){x=j,y=k;break}x=k,y=l;case 1:q(j)?x=j:i?s=j:z=j;break;case 0:break;default:throw g("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var A=this instanceof v,B=A?s:a.isArray?[]:new v(s),C={},D=a.interceptor&&a.interceptor.response||u,E=a.interceptor&&a.interceptor.responseError||c;n(a,function(a,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(C[b]=p(a))}),i&&(C.data=s),w.setUrlParams(C,o({},t(s,a.params||{}),z),a.url);var F=d(C).then(function(c){var d=c.data,h=B.$promise;if(d){if(b.isArray(d)!==!!a.isArray)throw g("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}",e,a.isArray?"array":"object",b.isArray(d)?"array":"object");a.isArray?(B.length=0,n(d,function(a){B.push("object"==typeof a?new v(a):a)})):(f(d,B),B.$promise=h)}return B.$resolved=!0,c.resource=B,c},function(a){return B.$resolved=!0,(y||m)(a),h.reject(a)});return F=F.then(function(a){var b=D(a);return(x||m)(b,a.headers),b},E),A?F:(B.$promise=F,B.$resolved=!1,B)},v.prototype["$"+e]=function(a,b,c){q(a)&&(c=b,b=a,a={});var d=v[e].call(this,a,this,b,c);return d.$promise||d}}),v.bind=function(a){return l(i,o({},j,a),r)},v}var m=b.noop,n=b.forEach,o=b.extend,p=b.copy,q=b.isFunction;return k.prototype={setUrlParams:function(a,c,d){var e,f,h=this,j=d||h.template,k=h.urlParams={};n(j.split(/\W/),function(a){if("hasOwnProperty"===a)throw g("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(a)&&a&&new RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(j)&&(k[a]=!0)}),j=j.replace(/\\:/g,":"),c=c||{},n(h.urlParams,function(a,d){e=c.hasOwnProperty(d)?c[d]:h.defaults[d],b.isDefined(e)&&null!==e?(f=i(e),j=j.replace(new RegExp(":"+d+"(\\W|$)","g"),function(a,b){return f+b})):j=j.replace(new RegExp("(/?):"+d+"(\\W|$)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),h.defaults.stripTrailingSlashes&&(j=j.replace(/\/+$/,"")||"/"),j=j.replace(/\/\.(?=\w+($|\?))/,"."),a.url=j.replace(/\/\\\./,"/."),n(c,function(b,c){h.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}},l}]})}(window,window.angular),function(a,b){"use strict";function c(){function a(a,c){return b.extend(Object.create(a),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){var f=b.copy(e);if(b.isUndefined(f.reloadOnSearch)&&(f.reloadOnSearch=!0),b.isUndefined(f.caseInsensitiveMatch)&&(f.caseInsensitiveMatch=this.caseInsensitiveMatch),d[a]=b.extend(f,a&&c(a,f)),a){var g="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[g]=b.extend({redirectTo:a},c(g,f))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(a){return"string"==typeof a&&(a={redirectTo:a}),this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(c,e,f,g,i,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i=e[f];h&&i&&(d[h.name]=i)}return d}function m(a){var d=t.current;q=o(),r=q&&d&&q.$$route===d.$$route&&b.equals(q.pathParams,d.pathParams)&&!q.reloadOnSearch&&!s,r||!d&&!q||c.$broadcast("$routeChangeStart",q,d).defaultPrevented&&a&&a.preventDefault()}function n(){var a=t.current,d=q;r?(a.params=d.params,b.copy(a.params,f),c.$broadcast("$routeUpdate",a)):(d||a)&&(s=!1,t.current=d,d&&d.redirectTo&&(b.isString(d.redirectTo)?e.path(p(d.redirectTo,d.params)).search(d.params).replace():e.url(d.redirectTo(d.pathParams,e.path(),e.search())).replace()),g.when(d).then(function(){if(d){var a,c,e=b.extend({},d.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?i.get(a):i.invoke(a,null,null,c)}),b.isDefined(a=d.template)?b.isFunction(a)&&(a=a(d.params)):b.isDefined(c=d.templateUrl)&&(b.isFunction(c)&&(c=c(d.params)),c=k.getTrustedResourceUrl(c),b.isDefined(c)&&(d.loadedTemplateUrl=c,a=j(c))),b.isDefined(a)&&(e.$template=a),g.all(e)}}).then(function(e){d==t.current&&(d&&(d.locals=e,b.copy(d.params,f)),c.$broadcast("$routeChangeSuccess",d,a))},function(b){d==t.current&&c.$broadcast("$routeChangeError",d,a,b)}))}function o(){var c,f;return b.forEach(d,function(d){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function p(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var q,r,s=!1,t={routes:d,reload:function(){s=!0,c.$evalAsync(function(){m(),n()})},updateParams:function(a){if(!this.current||!this.current.$$route)throw h("norout","Tried updating route when with no current route");var c={},d=this;b.forEach(Object.keys(a),function(b){d.current.pathParams[b]||(c[b]=a[b])}),a=b.extend({},this.current.params,a),e.path(p(this.current.$$route.originalPath,a)),e.search(b.extend({},e.search(),c))}};return c.$on("$locationChangeStart",m),c.$on("$locationChangeSuccess",n),t}]}function d(){this.$get=function(){return{}}}function e(a,c,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(e,f,g,h,i){function j(){n&&(d.cancel(n),n=null),l&&(l.$destroy(),l=null),m&&(n=d.leave(m),n.then(function(){n=null}),m=null)}function k(){var g=a.current&&a.current.locals,h=g&&g.$template;if(b.isDefined(h)){var k=e.$new(),n=a.current,q=i(k,function(a){d.enter(a,null,m||f).then(function(){!b.isDefined(o)||o&&!e.$eval(o)||c()}),j()});m=q,l=n.scope=k,l.$emit("$viewContentLoaded"),l.$eval(p)}else j()}var l,m,n,o=g.autoscroll,p=g.onload||"";e.$on("$routeChangeSuccess",k),k()}}}function f(a,b,c){return{restrict:"ECA",priority:-400,link:function(d,e){var f=c.current,g=f.locals;e.html(g.$template);var h=a(e.contents());if(f.controller){g.$scope=d;var i=b(f.controller,g);f.controllerAs&&(d[f.controllerAs]=i),e.data("$ngControllerController",i),e.children().data("$ngControllerController",i)}h(d)}}}var g=b.module("ngRoute",["ng"]).provider("$route",c),h=b.$$minErr("ngRoute");g.provider("$routeParams",d),g.directive("ngView",e),g.directive("ngView",f),e.$inject=["$route","$anchorScroll","$animate"],f.$inject=["$compile","$controller","$route"]}(window,window.angular),function(a,b){"use strict";function c(){this.$get=["$$sanitizeUri",function(a){return function(b){var c=[];return f(b,i(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function d(a){var c=[],d=i(c,b.noop);return d.chars(a),c.join("")}function e(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function f(a,c){function d(a,d,f,h){if(d=b.lowercase(d),y[d])for(;t.last()&&z[t.last()];)e("",t.last());x[d]&&t.last()==d&&e("",d),h=u[d]||!!h,h||t.push(d);var i={};f.replace(m,function(a,b,c,d,e){var f=c||d||e||"";i[b]=g(f)}),c.start&&c.start(d,i,h)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=t.length-1;f>=0&&t[f]!=d;f--);if(f>=0){for(e=t.length-1;e>=f;e--)c.end&&c.end(t[e]);t.length=f}}"string"!=typeof a&&(a=null===a||"undefined"==typeof a?"":""+a);var f,h,i,s,t=[],v=a;for(t.last=function(){return t[t.length-1]};a;){if(s="",h=!0,t.last()&&B[t.last()]?(a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+t.last()+"[^>]*>","i"),function(a,b){return b=b.replace(p,"$1").replace(r,"$1"),c.chars&&c.chars(g(b)),""}),e("",t.last())):(0===a.indexOf("<!--")?(f=a.indexOf("--",4),f>=0&&a.lastIndexOf("-->",f)===f&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),h=!1)):q.test(a)?(i=a.match(q),i&&(a=a.replace(i[0],""),h=!1)):o.test(a)?(i=a.match(l),i&&(a=a.substring(i[0].length),i[0].replace(l,e),h=!1)):n.test(a)&&(i=a.match(k),i?(i[4]&&(a=a.substring(i[0].length),i[0].replace(k,d)),h=!1):(s+="<",a=a.substring(1))),h&&(f=a.indexOf("<"),s+=0>f?a:a.substring(0,f),a=0>f?"":a.substring(f),c.chars&&c.chars(g(s)))),a==v)throw j("badparse","The sanitizer was unable to parse the following block of html: {0}",a);v=a}e()}function g(a){if(!a)return"";var b=I.exec(a),c=b[1],d=b[3],e=b[2];return e&&(H.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in H?H.textContent:H.innerText),c+e+d}function h(a){return a.replace(/&/g,"&amp;").replace(s,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(t,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&B[a]&&(d=a),d||C[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,f){var g=b.lowercase(f),i="img"===a&&"src"===g||"background"===g;G[g]!==!0||D[g]===!0&&!c(d,i)||(e(" "),e(f),e('="'),e(h(d)),e('"'))}),e(g?"/>":">"))},end:function(a){a=b.lowercase(a),d||C[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(h(a))}}}var j=b.$$minErr("$sanitize"),k=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,l=/^<\/\s*([\w:-]+)[^>]*>/,m=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,n=/^</,o=/^<\//,p=/<!--(.*?)-->/g,q=/<!DOCTYPE([^>]*?)>/i,r=/<!\[CDATA\[(.*?)]]>/g,s=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,t=/([^\#-~| |!])/g,u=e("area,br,col,hr,img,wbr"),v=e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),w=e("rp,rt"),x=b.extend({},w,v),y=b.extend({},v,e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),z=b.extend({},w,e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),A=e("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),B=e("script,style"),C=b.extend({},u,y,z,x,A),D=e("background,cite,href,longdesc,src,usemap,xlink:href"),E=e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),F=e("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),G=b.extend({},D,F,E),H=document.createElement("pre"),I=/^(\s*)([\s\S]*?)(\s*)$/;b.module("ngSanitize",[]).provider("$sanitize",c),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,e=/^mailto:/;return function(f,g){function h(a){a&&n.push(d(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&n.push('target="',g,'" '),n.push('href="',a.replace('"',"&quot;"),'">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]==j[3]&&(k="mailto:"+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(e,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular),function(a,b){"use strict";function c(a,c,e){d.directive(a,["$parse","$swipe",function(d,f){var g=75,h=.3,i=30;return function(j,k,l){function m(a){if(!n)return!1;var b=Math.abs(a.y-n.y),d=(a.x-n.x)*c;return o&&g>b&&d>0&&d>i&&h>b/d}var n,o,p=d(l[a]),q=["touch"];b.isDefined(l.ngSwipeDisableMouse)||q.push("mouse"),f.bind(k,{start:function(a){n=a,o=!0},cancel:function(){o=!1},end:function(a,b){m(a)&&j.$apply(function(){k.triggerHandler(e),p(j,{$event:b})})}},q)}}])}var d=b.module("ngTouch",[]);d.factory("$swipe",[function(){function a(a){var b=a.touches&&a.touches.length?a.touches:[a],c=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||b[0].originalEvent||b[0];return{x:c.clientX,y:c.clientY}}function c(a,c){var d=[];return b.forEach(a,function(a){var b=e[a][c];b&&d.push(b)}),d.join(" ")}var d=10,e={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(b,e,f){var g,h,i,j,k=!1;f=f||["mouse","touch"],b.on(c(f,"start"),function(b){i=a(b),k=!0,g=0,h=0,j=i,e.start&&e.start(i,b)});var l=c(f,"cancel");l&&b.on(l,function(a){k=!1,e.cancel&&e.cancel(a)}),b.on(c(f,"move"),function(b){if(k&&i){var c=a(b);if(g+=Math.abs(c.x-j.x),h+=Math.abs(c.y-j.y),j=c,!(d>g&&d>h))return h>g?(k=!1,void(e.cancel&&e.cancel(b))):(b.preventDefault(),void(e.move&&e.move(c,b)))}}),b.on(c(f,"end"),function(b){k&&(k=!1,e.end&&e.end(a(b),b))})}}}]),d.config(["$provide",function(a){a.decorator("ngClickDirective",["$delegate",function(a){return a.shift(),a}])}]),d.directive("ngClick",["$parse","$timeout","$rootElement",function(a,c,d){function e(a,b,c,d){return Math.abs(a-c)<p&&Math.abs(b-d)<p}function f(a,b,c){for(var d=0;d<a.length;d+=2)if(e(a[d],a[d+1],b,c))return a.splice(d,d+2),!0;return!1}function g(a){if(!(Date.now()-j>o)){var b=a.touches&&a.touches.length?a.touches:[a],c=b[0].clientX,d=b[0].clientY;1>c&&1>d||l&&l[0]===c&&l[1]===d||(l&&(l=null),"label"===a.target.tagName.toLowerCase()&&(l=[c,d]),f(k,c,d)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur()))}}function h(a){var b=a.touches&&a.touches.length?a.touches:[a],d=b[0].clientX,e=b[0].clientY;k.push(d,e),c(function(){for(var a=0;a<k.length;a+=2)if(k[a]==d&&k[a+1]==e)return void k.splice(a,a+2)},o,!1)}function i(a,b){k||(d[0].addEventListener("click",g,!0),d[0].addEventListener("touchstart",h,!0),k=[]),j=Date.now(),f(k,a,b)}var j,k,l,m=750,n=12,o=2500,p=25,q="ng-click-active";return function(c,d,e){function f(){o=!1,d.removeClass(q)}var g,h,j,k,l=a(e.ngClick),o=!1;d.on("touchstart",function(a){o=!0,g=a.target?a.target:a.srcElement,3==g.nodeType&&(g=g.parentNode),d.addClass(q),h=Date.now();var b=a.touches&&a.touches.length?a.touches:[a],c=b[0].originalEvent||b[0];j=c.clientX,k=c.clientY}),d.on("touchmove",function(){f()}),d.on("touchcancel",function(){f()}),d.on("touchend",function(a){var c=Date.now()-h,l=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?a.touches:[a],p=l[0].originalEvent||l[0],q=p.clientX,r=p.clientY,s=Math.sqrt(Math.pow(q-j,2)+Math.pow(r-k,2));o&&m>c&&n>s&&(i(q,r),g&&g.blur(),b.isDefined(e.disabled)&&e.disabled!==!1||d.triggerHandler("click",[a])),f()}),d.onclick=function(){},d.on("click",function(a,b){c.$apply(function(){l(c,{$event:b||a})})}),d.on("mousedown",function(){d.addClass(q)}),d.on("mousemove mouseup",function(){d.removeClass(q)})}}]),c("ngSwipeLeft",-1,"swipeleft"),c("ngSwipeRight",1,"swiperight")}(window,window.angular),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,b.href&&f&&"map"===e.nodeName.toLowerCase()?(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g)):!1):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}function d(a){for(var b,c;a.length&&a[0]!==document;){if(b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function e(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=f(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function f(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",g)}function g(){a.datepicker._isDisabledDatepicker(r.inline?r.dpDiv.parent()[0]:r.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).addClass("ui-datepicker-next-hover"))}function h(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}function i(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return d&&"static"===b.css("position")?!1:e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}};var j=0,k=Array.prototype.slice;a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var c,d,e=k.call(arguments,1),f=0,g=e.length;g>f;f++)for(c in e[f])d=e[f][c],e[f].hasOwnProperty(c)&&void 0!==d&&(b[c]=a.isPlainObject(d)?a.isPlainObject(b[c])?a.widget.extend({},b[c],d):a.widget.extend({},d):d);return b},a.widget.bridge=function(b,c){var d=c.prototype.widgetFullName||b;a.fn[b]=function(e){var f="string"==typeof e,g=k.call(arguments,1),h=this;return e=!f&&g.length?a.widget.extend.apply(null,[e].concat(g)):e,this.each(f?function(){var c,f=a.data(this,d);return"instance"===e?(h=f,!1):f?a.isFunction(f[e])&&"_"!==e.charAt(0)?(c=f[e].apply(f,g),c!==f&&void 0!==c?(h=c&&c.jquery?h.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+e+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'")}:function(){var b=a.data(this,d);b?(b.option(e||{}),b._init&&b._init()):a.data(this,d,new c(e,this))}),h}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,c){c=a(c||this.defaultElement||this)[0],this.element=a(c),this.uuid=j++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),c!==this&&(a.data(c,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===c&&this.destroy()
}}),this.document=a(c.style?c.ownerDocument:c.document||c),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}});var l=(a.widget,!1);a(document).mouseup(function(){l=!1});a.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){return!0===a.data(c.target,b.widgetName+".preventClickEvent")?(a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(!l){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var c=this,d=1===b.which,e="string"==typeof this.options.cancel&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;return d&&!e&&this._mouseCapture(b)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return c._mouseMove(a)},this._mouseUpDelegate=function(a){return c._mouseUp(a)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),l=!0,!0)):!0}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),l=!1,!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});!function(){function b(a,b,c){return[parseFloat(a[0])*(n.test(a[0])?b/100:1),parseFloat(a[1])*(n.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var e,f,g=Math.max,h=Math.abs,i=Math.round,j=/left|center|right/,k=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,n=/%$/,o=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType;return{element:c,isWindow:d,isDocument:e,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d||e?c.width():c.outerWidth(),height:d||e?c.height():c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return o.apply(this,arguments);e=a.extend({},e);var n,p,q,r,s,t,u=a(e.of),v=a.position.getWithinInfo(e.within),w=a.position.getScrollInfo(v),x=(e.collision||"flip").split(" "),y={};return t=d(u),u[0].preventDefault&&(e.at="left top"),p=t.width,q=t.height,r=t.offset,s=a.extend({},r),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=j.test(c[0])?c.concat(["center"]):k.test(c[0])?["center"].concat(c):["center","center"]),c[0]=j.test(c[0])?c[0]:"center",c[1]=k.test(c[1])?c[1]:"center",a=l.exec(c[0]),b=l.exec(c[1]),y[this]=[a?a[0]:0,b?b[0]:0],e[this]=[m.exec(c[0])[0],m.exec(c[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?s.left+=p:"center"===e.at[0]&&(s.left+=p/2),"bottom"===e.at[1]?s.top+=q:"center"===e.at[1]&&(s.top+=q/2),n=b(y.at,p,q),s.left+=n[0],s.top+=n[1],this.each(function(){var d,j,k=a(this),l=k.outerWidth(),m=k.outerHeight(),o=c(this,"marginLeft"),t=c(this,"marginTop"),z=l+o+c(this,"marginRight")+w.width,A=m+t+c(this,"marginBottom")+w.height,B=a.extend({},s),C=b(y.my,k.outerWidth(),k.outerHeight());"right"===e.my[0]?B.left-=l:"center"===e.my[0]&&(B.left-=l/2),"bottom"===e.my[1]?B.top-=m:"center"===e.my[1]&&(B.top-=m/2),B.left+=C[0],B.top+=C[1],f||(B.left=i(B.left),B.top=i(B.top)),d={marginLeft:o,marginTop:t},a.each(["left","top"],function(b,c){a.ui.position[x[b]]&&a.ui.position[x[b]][c](B,{targetWidth:p,targetHeight:q,elemWidth:l,elemHeight:m,collisionPosition:d,collisionWidth:z,collisionHeight:A,offset:[n[0]+C[0],n[1]+C[1]],my:e.my,at:e.at,within:v,elem:k})}),e.using&&(j=function(a){var b=r.left-B.left,c=b+p-l,d=r.top-B.top,f=d+q-m,i={target:{element:u,left:r.left,top:r.top,width:p,height:q},element:{element:k,left:B.left,top:B.top,width:l,height:m},horizontal:0>c?"left":b>0?"right":"center",vertical:0>f?"top":d>0?"bottom":"middle"};l>p&&h(b+c)<p&&(i.horizontal="center"),m>q&&h(d+f)<q&&(i.vertical="middle"),i.important=g(h(b),h(c))>g(h(d),h(f))?"horizontal":"vertical",e.using.call(this,a,i)}),k.offset(a.extend(B,{using:j}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,f=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-f-e;b.collisionWidth>f?i>0&&0>=j?(c=a.left+i+b.collisionWidth-f-e,a.left+=i-c):a.left=j>0&&0>=i?e:i>j?e+f-b.collisionWidth:e:i>0?a.left+=i:j>0?a.left-=j:a.left=g(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,f=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-f-e;b.collisionHeight>f?i>0&&0>=j?(c=a.top+i+b.collisionHeight-f-e,a.top+=i-c):a.top=j>0&&0>=i?e:i>j?e+f-b.collisionHeight:e:i>0?a.top+=i:j>0?a.top-=j:a.top=g(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,g=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-g-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];0>k?(c=a.left+m+n+o+b.collisionWidth-g-f,(0>c||c<h(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||h(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,g=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-g-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];0>k?(d=a.top+n+o+p+b.collisionHeight-g-f,a.top+n+o+p>k&&(0>d||d<h(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,a.top+n+o+p>l&&(c>0||h(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,g,h=document.getElementsByTagName("body")[0],i=document.createElement("div");b=document.createElement(h?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},h&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(g in d)b.style[g]=d[g];b.appendChild(i),c=h||document.documentElement,c.insertBefore(b,c.firstChild),i.style.cssText="position: absolute; left: 10.7432222px;",e=a(i).offset().left,f=e>10&&11>e,b.innerHTML="",c.removeChild(b)}()}();a.ui.position,a.widget("ui.accordion",{version:"1.11.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var b=this.options;this.prevShow=this.prevHide=a(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),b.collapsible||b.active!==!1&&null!=b.active||(b.active=0),this._processPanels(),b.active<0&&(b.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():a()}},_createIcons:function(){var b=this.options.icons;b&&(a("<span>").addClass("ui-accordion-header-icon ui-icon "+b.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),a=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){return"active"===a?void this._activate(b):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),"collapsible"!==a||b||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),b&&this._createIcons()),void("disabled"===a&&(this.element.toggleClass("ui-state-disabled",!!b).attr("aria-disabled",b),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!b))))},_keydown:function(b){if(!b.altKey&&!b.ctrlKey){var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._eventHandler(b);break;case c.HOME:f=this.headers[0];break;case c.END:f=this.headers[d-1]}f&&(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),b.preventDefault())}},_panelKeyDown:function(b){b.keyCode===a.ui.keyCode.UP&&b.ctrlKey&&a(b.currentTarget).prev().focus()},refresh:function(){var b=this.options;this._processPanels(),b.active===!1&&b.collapsible===!0||!this.headers.length?(b.active=!1,this.active=a()):b.active===!1?this._activate(0):this.active.length&&!a.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(b.active=!1,this.active=a()):this._activate(Math.max(0,b.active-1)):b.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var a=this.headers,b=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),b&&(this._off(a.not(this.headers)),this._off(b.not(this.panels)))},_refresh:function(){var b,c=this.options,d=c.heightStyle,e=this.element.parent();this.active=this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var b=a(this),c=b.uniqueId().attr("id"),d=b.next(),e=d.uniqueId().attr("id");b.attr("aria-controls",e),d.attr("aria-labelledby",c)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(c.event),"fill"===d?(b=e.height(),this.element.siblings(":visible").each(function(){var c=a(this),d=c.css("position");"absolute"!==d&&"fixed"!==d&&(b-=c.outerHeight(!0))}),this.headers.each(function(){b-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,b-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===d&&(b=0,this.headers.next().each(function(){b=Math.max(b,a(this).css("height","").height())}).height(b))},_activate:function(b){var c=this._findActive(b)[0];c!==this.active[0]&&(c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return"number"==typeof b?this.headers.eq(b):a()},_setupEvents:function(b){var c={keydown:"_keydown"};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,c),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e[0]===d[0],g=f&&c.collapsible,h=g?a():e.next(),i=d.next(),j={oldHeader:d,oldPanel:i,newHeader:g?a():e,newPanel:h};b.preventDefault(),f&&!c.collapsible||this._trigger("beforeActivate",b,j)===!1||(c.active=g?!1:this.headers.index(e),this.active=f?a():e,this._toggle(j),d.removeClass("ui-accordion-header-active ui-state-active"),c.icons&&d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header),f||(e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),c.icons&&e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader),e.next().addClass("ui-accordion-content-active")))},_toggle:function(b){var c=b.newPanel,d=this.prevShow.length?this.prevShow:b.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,b):(d.hide(),c.show(),this._toggleComplete(b)),d.attr({"aria-hidden":"true"}),d.prev().attr("aria-selected","false"),c.length&&d.length?d.prev().attr({tabIndex:-1,"aria-expanded":"false"}):c.length&&this.headers.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),c.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(a,b,c){var d,e,f,g=this,h=0,i=a.length&&(!b.length||a.index()<b.index()),j=this.options.animate||{},k=i&&j.down||j,l=function(){g._toggleComplete(c)};return"number"==typeof k&&(f=k),"string"==typeof k&&(e=k),e=e||k.easing||j.easing,f=f||k.duration||j.duration,b.length?a.length?(d=a.show().outerHeight(),b.animate(this.hideProps,{duration:f,easing:e,step:function(a,b){b.now=Math.round(a)}}),void a.hide().animate(this.showProps,{duration:f,easing:e,complete:l,step:function(a,c){c.now=Math.round(a),"height"!==c.prop?h+=c.now:"content"!==g.options.heightStyle&&(c.now=Math.round(d-b.outerHeight()-h),h=0)}})):b.animate(this.hideProps,f,e,l):a.animate(this.showProps,f,e,l)},_toggleComplete:function(a){var b=a.oldPanel;b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),b.length&&(b.parent()[0].className=b.parent()[0].className),this._trigger("activate",null,a)}}),a.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(b){var c=a(b.target);!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),c.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&a(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){if(!this.previousFilter){var c=a(b.currentTarget);c.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(b,c)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);b.data("ui-menu-submenu-carat")&&b.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",e=String.fromCharCode(b.keyCode),f=!1,clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&-1!==c.index(this.active.next())?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(a):this.select(a))},refresh:function(){var b,c,d=this,e=this.options.icons.submenu,f=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),c=b.parent(),d=a("<span>").addClass("ui-menu-icon ui-icon "+e).data("ui-menu-submenu-carat",!0);c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))}),b=f.add(this.element),c=b.find(this.options.items),c.not(".ui-menu-item").each(function(){var b=a(this);d._isDivider(b)&&b.addClass("ui-widget-content ui-menu-divider")}),c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),c.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){"icons"===a&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu),"disabled"===a&&this.element.toggleClass("ui-state-disabled",!!b).attr("aria-disabled",b),this._super(a,b)},focus:function(a,b){var c,d;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),0>e?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",a,{item:this.active}))},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(b){return!a(b.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)},_filterMenuItems:function(b){var c=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=new RegExp("^"+c,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(a.trim(a(this).text()))})}});a.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=f?!0:g?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void((!this.isMultiLine||this.menu.element.is(":visible"))&&d.preventDefault());if(!c){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var c=this.menu.element[0];a(b.target).closest(".ui-menu-item").length||this._delay(function(){var b=this;this.document.one("mousedown",function(d){d.target===b.element[0]||d.target===c||a.contains(c,d.target)||b.close()})})},menufocus:function(b,c){var d,e;return this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)})):(e=c.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",b,{item:e})&&b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(e.value),d=c.item.attr("aria-label")||e.value,void(d&&a.trim(d).length&&(this.liveRegion.children().hide(),a("<div>").text(d).appendTo(this.liveRegion))))},menuselect:function(a,b){var c=b.item.data("ui-autocomplete-item"),d=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=d,this._delay(function(){this.previous=d,this.selectedItem=c})),!1!==this._trigger("select",a,{item:c})&&this._value(c.value),this.term=this._value(),this.close(a),this.selectedItem=c}}),this.liveRegion=a("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;(!b||b&&!c&&!d)&&(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var b=++this.requestIndex;return a.proxy(function(a){b===this.requestIndex&&this.__response(a),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({},b,{label:b.label||b.value,value:b.value||b.label})})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").text(c.label).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(a,b),b.preventDefault())}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(b){var c;this._superApply(arguments),this.options.disabled||this.cancelSearch||(c=b&&b.length?this.options.messages.results(b.length):this.options.messages.noResults,this.liveRegion.children().hide(),a("<div>").text(c).appendTo(this.liveRegion))}});var m,n=(a.ui.autocomplete,"ui-button ui-widget ui-state-default ui-corner-all"),o="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",p=function(){var b=a(this);setTimeout(function(){b.find(":ui-button").button("refresh")},1)},q=function(b){var c=b.name,d=b.form,e=a([]);return c&&(c=c.replace(/'/g,"\\'"),e=d?a(d).find("[name='"+c+"'][type=radio]"):a("[name='"+c+"'][type=radio]",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{version:"1.11.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,p),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d="checkbox"===this.type||"radio"===this.type,e=d?"":"ui-state-active";null===c.label&&(c.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){c.disabled||this===m&&a(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){c.disabled||a(this).removeClass(e)}).bind("click"+this.eventNamespace,function(a){c.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),d&&this.element.bind("change"+this.eventNamespace,function(){b.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return c.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(c.disabled)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var d=b.element[0];q(d).not(d).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return c.disabled?!1:(a(this).addClass("ui-state-active"),m=this,void b.document.one("mouseup",function(){m=null}))}).bind("mouseup"+this.eventNamespace,function(){return c.disabled?!1:void a(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(b){return c.disabled?!1:void((b.keyCode===a.ui.keyCode.SPACE||b.keyCode===a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",c.disabled),this._resetButton()},_determineButtonType:function(){var a,b,c;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(a=this.element.parents().last(),b="label[for='"+this.element.attr("id")+"']",this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible"),c=this.element.is(":checked"),c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",c)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(n+" ui-state-active "+o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(a,b){return this._super(a,b),"disabled"===a?(this.widget().toggleClass("ui-state-disabled",!!b),this.element.prop("disabled",!!b),void(b&&this.buttonElement.removeClass("checkbox"===this.type||"radio"===this.type?"ui-state-focus":"ui-state-focus ui-state-active"))):void this._resetButton()},refresh:function(){var b=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");b!==this.options.disabled&&this._setOption("disabled",b),"radio"===this.type?q(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return void(this.options.label&&this.element.val(this.options.label));var b=this.buttonElement.removeClass(o),c=a("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",a.trim(c)))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{version:"1.11.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,b){"disabled"===a&&this.buttons.button("option",a,b),this._super(a,b)},refresh:function(){var b="rtl"===this.element.css("direction"),c=this.element.find(this.options.items),d=c.filter(":ui-button");c.not(":ui-button").button(),d.button("refresh"),this.buttons=c.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}});a.ui.button;a.extend(a.ui,{datepicker:{version:"1.11.2"}});var r;a.extend(e.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return h(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var d=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:d,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?f(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),("focus"===d||"both"===d)&&b.focus(this._showDatepicker),("button"===d||"both"===d)&&(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,e,f){var g,i,j,k,l,m=this._dialogInst;return m||(this.uuid+=1,g="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+g+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),h(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=f?f.length?f:[f.pageX,f.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===c||"span"===c)&&d.removeClass(this.markerClassName).empty())},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===c||"span"===c)&&(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===c||"span"===c)&&(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(b,c,d){var e,f,g,i,j=this._getInst(b);return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),f=this._getDateDatepicker(b,!0),g=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),h(j.settings,e),null!==g&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,g)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,f),this._updateAlternate(j),this._updateDatepicker(j))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);return a.datepicker._get(e,"constrainInput")?(c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||" ">d||!c||c.indexOf(d)>-1):void 0},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(b){if(b=b.target||b,"input"!==b.nodeName.toLowerCase()&&(b=a("input",b.parentNode)[0]),!a.datepicker._isDisabledDatepicker(b)&&a.datepicker._lastInput!==b){var c,e,f,g,i,j,k;c=a.datepicker._getInst(b),a.datepicker._curInst&&a.datepicker._curInst!==c&&(a.datepicker._curInst.dpDiv.stop(!0,!0),c&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(c,"beforeShow"),f=e?e.apply(b,[b,c]):{},f!==!1&&(h(c.settings,f),c.lastVal=null,a.datepicker._lastInput=b,a.datepicker._setDateFromField(c),a.datepicker._inDialog&&(b.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(b),a.datepicker._pos[1]+=b.offsetHeight),g=!1,a(b).parents().each(function(){return g|="fixed"===a(this).css("position"),!g}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,c.dpDiv.empty(),c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(c),i=a.datepicker._checkOffset(c,i,g),c.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":g?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),c.inline||(j=a.datepicker._get(c,"showAnim"),k=a.datepicker._get(c,"duration"),c.dpDiv.css("z-index",d(a(b))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?c.dpDiv.show(j,a.datepicker._get(c,"showOptions"),k):c.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(c)&&c.input.focus(),a.datepicker._curInst=c))}},_updateDatepicker:function(b){this.maxRows=4,r=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),e=d[1],f=17,h=b.dpDiv.find("."+this._dayOverClass+" a");h.length>0&&g.apply(h.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),e>1&&b.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",f*e+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id!==a.datepicker._mainDivId&&0===c.parents("#"+a.datepicker._mainDivId).length&&!c.hasClass(a.datepicker.markerClassName)&&!c.closest("."+a.datepicker._triggerClass).length&&a.datepicker._datepickerShowing&&(!a.datepicker._inDialog||!a.blockUI)||c.hasClass(a.datepicker.markerClassName)&&a.datepicker._curInst!==d)&&a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&6>b,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];return c.substr(i,d.length).toLowerCase()===d.toLowerCase()?(f=b[0],i+=d.length,!1):void 0}),-1!==f)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(-1===p?p=(new Date).getFullYear():100>p&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(k>=p?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),f>=r)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;
return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,ab=a.drawYear;if(0>_&&(_+=12,ab--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&Z>b?Z:b;this._daylightSavingAdjust(new Date(ab,_,1))>b;)_--,0>_&&(_=11,ab--);for(a.drawMonth=_,a.drawYear=ab,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(ab,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,ab,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(ab,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,ab,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(ab,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,ab,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;7>v;v++)D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(ab,_),ab===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(ab,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(ab,_,1-F)),J=0;H>J;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;7>v;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&Z>I||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,ab++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;12>k;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";p>=o;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),("M"===c||"Y"===c)&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&c>b?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(0>b?b:e[0]*e[1]),1));return 0>b&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new e,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.11.2";a.datepicker;a.widget("ui.draggable",a.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return this._blurActiveElement(b),this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(b),this.handle?(this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0):!1)},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=this.document[0];if(this.handleElement.is(b.target))try{c.activeElement&&"body"!==c.activeElement.nodeName.toLowerCase()&&a(c.activeElement).blur()}catch(d){}},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._normalizeRightBottom(),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.focus(),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return this.options.handle?!!a(b.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,i-p>r||q>j+p||k-p>t||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)
});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}});a.ui.draggable;a.widget("ui.resizable",a.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseInt(a,10)||0},_isNumber:function(a){return!isNaN(parseInt(a,10))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c,d,e,f,g=this,h=this.options;if(this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=h.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),b=this.handles.split(","),this.handles={},c=0;c<b.length;c++)d=a.trim(b[c]),f="ui-resizable-"+d,e=a("<div class='ui-resizable-handle "+f+"'></div>"),e.css({zIndex:h.zIndex}),"se"===d&&e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[d]=".ui-resizable-"+d,this.element.append(e);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String&&(this.handles[c]=this.element.children(this.handles[c]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),a(this.handles[c]).length},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){g.resizing||(this.className&&(e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=e&&e[1]?e[1]:"se")}),h.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(a(this).removeClass("ui-resizable-autohide"),g._handles.show())}).mouseleave(function(){h.disabled||g.resizing||(a(this).addClass("ui-resizable-autohide"),g._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),g.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),i?(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseInt(k.element.css("left"),10)+(k.position.left-k.originalPosition.left)||null,i=parseInt(k.element.css("top"),10)+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.position.top+this.size.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];4>b;b++)c[b]=parseInt(d[b],10)||0,c[b]+=parseInt(e[b],10)||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,k=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseInt(c.element.css("width"),10),height:parseInt(c.element.css("height"),10),top:parseInt(c.element.css("top"),10),left:parseInt(c.element.css("left"),10)};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options,d=function(b){a(b).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};"object"!=typeof c.alsoResize||c.alsoResize.parentNode?d(c.alsoResize):c.alsoResize.length?(c.alsoResize=c.alsoResize[0],d(c.alsoResize)):a.each(c.alsoResize,function(a){d(a)})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("ui-resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};"object"!=typeof e.alsoResize||e.alsoResize.nodeType?i(e.alsoResize):a.each(e.alsoResize,function(a,b){i(a,b)})},stop:function(){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.options,d=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:d.height,width:d.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof c.ghost?c.ghost:""),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((0>=o-k||0>=n-j)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=k-b.height,c.size.width=n,c.position.left=g.left+f.width-n))}});a.ui.resizable,a.widget("ui.dialog",{version:"1.11.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;0>c&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c,d=this;if(this._isOpen&&this._trigger("beforeClose",b)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{c=this.document[0].activeElement,c&&"body"!==c.nodeName.toLowerCase()&&a(c).blur()}catch(e){}this._hide(this.uiDialog,this.options.hide,function(){d._trigger("close",b)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).focus()},_keepFocus:function(b){function c(){var b=this.document[0].activeElement,c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.focus()}),b.preventDefault()):(this._delay(function(){d.focus()}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(b),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title||a.html("&#160;"),a.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,d.click=function(){e.apply(b.element[0],arguments)},f={icons:d.icons,text:d.showText},delete d.icons,delete d.showText,a("<button></button>",d).button(f).appendTo(b.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){a(this).addClass("ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},a(this).removeClass("ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){a(this).addClass("ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},a(this).removeClass("ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);-1!==c&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(a,b){var c,d,e=this.uiDialog;"dialogClass"===a&&e.removeClass(this.options.dialogClass).addClass(b),"disabled"!==a&&(this._super(a,b),"appendTo"===a&&this.uiDialog.appendTo(this._appendTo()),"buttons"===a&&this._createButtons(),"closeText"===a&&this.uiDialogTitlebarClose.button({label:""+b}),"draggable"===a&&(c=e.is(":data(ui-draggable)"),c&&!b&&e.draggable("destroy"),!c&&b&&this._makeDraggable()),"position"===a&&this._position(),"resizable"===a&&(d=e.is(":data(ui-resizable)"),d&&!b&&e.resizable("destroy"),d&&"string"==typeof b&&e.resizable("option","handles",b),d||b===!1||this._makeResizable()),"title"===a&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return a(b.target).closest(".ui-dialog").length?!0:!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}});a.widget("ui.droppable",{version:"1.11.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b,c=this.options,d=c.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(d)?d:function(a){return a.is(d)},this.proportions=function(){return arguments.length?void(b=arguments[0]):b?b:b={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(c.scope),c.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(b){a.ui.ddmanager.droppables[b]=a.ui.ddmanager.droppables[b]||[],a.ui.ddmanager.droppables[b].push(this)},_splice:function(a){for(var b=0;b<a.length;b++)a[b]===this&&a.splice(b,1)},_destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];this._splice(b),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){if("accept"===b)this.accept=a.isFunction(c)?c:function(a){return a.is(c)};else if("scope"===b){var d=a.ui.ddmanager.droppables[this.options.scope];this._splice(d),this._addToManager(c)}this._super(b,c)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))
},_out:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;return d&&(d.currentItem||d.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var c=a(this).droppable("instance");return c.options.greedy&&!c.options.disabled&&c.options.scope===d.options.scope&&c.accept.call(c.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(c,{offset:c.element.offset()}),c.options.tolerance,b)?(e=!0,!1):void 0}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(){function a(a,b,c){return a>=b&&b+c>a}return function(b,c,d,e){if(!c.offset)return!1;var f=(b.positionAbs||b.position.absolute).left+b.margins.left,g=(b.positionAbs||b.position.absolute).top+b.margins.top,h=f+b.helperProportions.width,i=g+b.helperProportions.height,j=c.offset.left,k=c.offset.top,l=j+c.proportions().width,m=k+c.proportions().height;switch(d){case"fit":return f>=j&&l>=h&&g>=k&&m>=i;case"intersect":return j<f+b.helperProportions.width/2&&h-b.helperProportions.width/2<l&&k<g+b.helperProportions.height/2&&i-b.helperProportions.height/2<m;case"pointer":return a(e.pageY,k,c.proportions().height)&&a(e.pageX,j,c.proportions().width);case"touch":return(g>=k&&m>=g||i>=k&&m>=i||k>g&&i>m)&&(f>=j&&l>=f||h>=j&&l>=h||j>f&&h>l);default:return!1}}}(),a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();a:for(d=0;d<f.length;d++)if(!(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))){for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions().height=0;continue a}f[d].visible="none"!==f[d].element.css("display"),f[d].visible&&("mousedown"===g&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions({width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight}))}},drop:function(b,c){var d=!1;return a.each((a.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance,c)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart:function(b,c){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,e,f,g=a.ui.intersect(b,this,this.options.tolerance,c),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;h&&(this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a(this).droppable("instance").options.scope===e}),f.length&&(d=a(f[0]).droppable("instance"),d.greedyChild="isover"===h)),d&&"isover"===h&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this["isout"===h?"isover":"isout"]=!1,this["isover"===h?"_over":"_out"].call(this,c),d&&"isout"===h&&(d.isout=!1,d.isover=!0,d._over.call(d,c)))}})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}};var s=(a.ui.droppable,"ui-effects-"),t=a;a.effects={effect:{}},function(a,b){function c(a,b,c){var d=l[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";return h?(f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1):void 0}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}function e(a,b,c){return c=(c+1)%1,1>6*c?a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}var f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",h=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},n=a("<p>")[0],o=a.each;n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){if(!l[f]&&d.to){if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}l[f][b.idx]=c(e[a],b,!0)}),l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){return null!=g[b.idx]?c=g[b.idx]===f[b.idx]:void 0})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:.5>=l?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=.5>=d?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},f=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(t),function(){function b(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function c(b,c){var d,f,g={};for(d in c)f=c[d],b[d]!==f&&(e[d]||(a.fx.step[d]||!isNaN(parseFloat(f)))&&(g[d]=f));return g}var d=["add","remove","toggle"],e={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(t.style(a.elem,c,a.end),a.setAttr=!0)}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(e,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr("class")||"",j=i.children?g.find("*").addBack():g;j=j.map(function(){var c=a(this);return{el:c,start:b(this)}}),f=function(){a.each(d,function(a,b){e[b]&&g[b+"Class"](e[b])})},f(),j=j.map(function(){return this.end=b(this.el[0]),this.diff=c(this.start,this.end),this}),g.attr("class",h),j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){f(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(g[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(b){return function(c,d,e,f,g){return"boolean"==typeof d||void 0===d?e?a.effects.animateClass.call(this,d?{add:c}:{remove:c},e,f,g):b.apply(this,arguments):a.effects.animateClass.call(this,{toggle:c},d,e,f)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function b(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function c(b){return!b||"number"==typeof b||a.fx.speeds[b]?!0:"string"!=typeof b||a.effects.effect[b]?a.isFunction(b)?!0:"object"!=typeof b||b.effect?!1:!0:!0}a.extend(a.effects,{version:"1.11.2",save:function(a,b){for(var c=0;c<b.length;c++)null!==b[c]&&a.data(s+b[c],a[0].style[b[c]])},restore:function(a,b){var c,d;for(d=0;d<b.length;d++)null!==b[d]&&(c=a.data(s+b[d]),void 0===c&&(c=""),a.css(b[d],c))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(g){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function c(b){function c(){a.isFunction(f)&&f.call(e[0]),a.isFunction(b)&&b()}var e=a(this),f=d.complete,h=d.mode;(e.is(":hidden")?"hide"===h:"show"===h)?(e[h](),c()):g.call(e[0],d,c)}var d=b.apply(this,arguments),e=d.mode,f=d.queue,g=a.effects.effect[d.effect];return a.fx.off||!g?e?this[e](d.duration,d.complete):this.each(function(){d.complete&&d.complete.call(this)}):f===!1?this.each(c):this.queue(f||"fx",c)},show:function(a){return function(d){if(c(d))return a.apply(this,arguments);var e=b.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}}(a.fn.show),hide:function(a){return function(d){if(c(d))return a.apply(this,arguments);var e=b.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}}(a.fn.hide),toggle:function(a){return function(d){if(c(d)||"boolean"==typeof d)return a.apply(this,arguments);var e=b.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return.5>a?c(2*a)/2:1-c(-2*a+2)/2}})}();a.effects,a.effects.effect.blind=function(b,c){var d,e,f,g=a(this),h=/up|down|vertical/,i=/up|left|vertical|horizontal/,j=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(g,b.mode||"hide"),l=b.direction||"up",m=h.test(l),n=m?"height":"width",o=m?"top":"left",p=i.test(l),q={},r="show"===k;g.parent().is(".ui-effects-wrapper")?a.effects.save(g.parent(),j):a.effects.save(g,j),g.show(),d=a.effects.createWrapper(g).css({overflow:"hidden"}),e=d[n](),f=parseFloat(d.css(o))||0,q[n]=r?e:0,p||(g.css(m?"bottom":"right",0).css(m?"top":"left","auto").css({position:"absolute"}),q[o]=r?f:e+f),r&&(d.css(n,0),p||d.css(o,f+e)),d.animate(q,{duration:b.duration,easing:b.easing,queue:!1,complete:function(){"hide"===k&&g.hide(),a.effects.restore(g,j),a.effects.removeWrapper(g),c()}})},a.effects.effect.bounce=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","height","width"],i=a.effects.setMode(g,b.mode||"effect"),j="hide"===i,k="show"===i,l=b.direction||"up",m=b.distance,n=b.times||5,o=2*n+(k||j?1:0),p=b.duration/o,q=b.easing,r="up"===l||"down"===l?"top":"left",s="up"===l||"left"===l,t=g.queue(),u=t.length;for((k||j)&&h.push("opacity"),a.effects.save(g,h),g.show(),a.effects.createWrapper(g),m||(m=g["top"===r?"outerHeight":"outerWidth"]()/3),k&&(f={opacity:1},f[r]=0,g.css("opacity",0).css(r,s?2*-m:2*m).animate(f,p,q)),j&&(m/=Math.pow(2,n-1)),f={},f[r]=0,d=0;n>d;d++)e={},e[r]=(s?"-=":"+=")+m,g.animate(e,p,q).animate(f,p,q),m=j?2*m:m/2;j&&(e={opacity:0},e[r]=(s?"-=":"+=")+m,g.animate(e,p,q)),g.queue(function(){j&&g.hide(),a.effects.restore(g,h),a.effects.removeWrapper(g),c()}),u>1&&t.splice.apply(t,[1,0].concat(t.splice(u,o+1))),g.dequeue()},a.effects.effect.clip=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","height","width"],i=a.effects.setMode(g,b.mode||"hide"),j="show"===i,k=b.direction||"vertical",l="vertical"===k,m=l?"height":"width",n=l?"top":"left",o={};a.effects.save(g,h),g.show(),d=a.effects.createWrapper(g).css({overflow:"hidden"}),e="IMG"===g[0].tagName?d:g,f=e[m](),j&&(e.css(m,0),e.css(n,f/2)),o[m]=j?f:0,o[n]=j?0:f/2,e.animate(o,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){j||g.hide(),a.effects.restore(g,h),a.effects.removeWrapper(g),c()}})},a.effects.effect.drop=function(b,c){var d,e=a(this),f=["position","top","bottom","left","right","opacity","height","width"],g=a.effects.setMode(e,b.mode||"hide"),h="show"===g,i=b.direction||"left",j="up"===i||"down"===i?"top":"left",k="up"===i||"left"===i?"pos":"neg",l={opacity:h?1:0};a.effects.save(e,f),e.show(),a.effects.createWrapper(e),d=b.distance||e["top"===j?"outerHeight":"outerWidth"](!0)/2,h&&e.css("opacity",0).css(j,"pos"===k?-d:d),l[j]=(h?"pos"===k?"+=":"-=":"pos"===k?"-=":"+=")+d,e.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}})},a.effects.effect.explode=function(b,c){function d(){t.push(this),t.length===l*m&&e()}function e(){n.css({visibility:"visible"}),a(t).remove(),p||n.hide(),c()}var f,g,h,i,j,k,l=b.pieces?Math.round(Math.sqrt(b.pieces)):3,m=l,n=a(this),o=a.effects.setMode(n,b.mode||"hide"),p="show"===o,q=n.show().css("visibility","hidden").offset(),r=Math.ceil(n.outerWidth()/m),s=Math.ceil(n.outerHeight()/l),t=[];for(f=0;l>f;f++)for(i=q.top+f*s,k=f-(l-1)/2,g=0;m>g;g++)h=q.left+g*r,j=g-(m-1)/2,n.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-g*r,top:-f*s}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:r,height:s,left:h+(p?j*r:0),top:i+(p?k*s:0),opacity:p?0:1}).animate({left:h+(p?0:j*r),top:i+(p?0:k*s),opacity:p?1:0},b.duration||500,b.easing,d)},a.effects.effect.fade=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"toggle");d.animate({opacity:e},{queue:!1,duration:b.duration,easing:b.easing,complete:c})},a.effects.effect.fold=function(b,c){var d,e,f=a(this),g=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(f,b.mode||"hide"),i="show"===h,j="hide"===h,k=b.size||15,l=/([0-9]+)%/.exec(k),m=!!b.horizFirst,n=i!==m,o=n?["width","height"]:["height","width"],p=b.duration/2,q={},r={};a.effects.save(f,g),f.show(),d=a.effects.createWrapper(f).css({overflow:"hidden"}),e=n?[d.width(),d.height()]:[d.height(),d.width()],l&&(k=parseInt(l[1],10)/100*e[j?0:1]),i&&d.css(m?{height:0,width:k}:{height:k,width:0}),q[o[0]]=i?e[0]:k,r[o[1]]=i?e[1]:0,d.animate(q,p,b.easing).animate(r,p,b.easing,function(){j&&f.hide(),a.effects.restore(f,g),a.effects.removeWrapper(f),c()})},a.effects.effect.highlight=function(b,c){var d=a(this),e=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(d,b.mode||"show"),g={backgroundColor:d.css("backgroundColor")};"hide"===f&&(g.opacity=0),a.effects.save(d,e),d.show().css({backgroundImage:"none",backgroundColor:b.color||"#ffff99"}).animate(g,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),c()}})},a.effects.effect.size=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","width","height","overflow","opacity"],i=["position","top","bottom","left","right","overflow","opacity"],j=["width","height","overflow"],k=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],m=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],n=a.effects.setMode(g,b.mode||"effect"),o=b.restore||"effect"!==n,p=b.scale||"both",q=b.origin||["middle","center"],r=g.css("position"),s=o?h:i,t={height:0,width:0,outerHeight:0,outerWidth:0};"show"===n&&g.show(),d={height:g.height(),width:g.width(),outerHeight:g.outerHeight(),outerWidth:g.outerWidth()},"toggle"===b.mode&&"show"===n?(g.from=b.to||t,g.to=b.from||d):(g.from=b.from||("show"===n?t:d),g.to=b.to||("hide"===n?t:d)),f={from:{y:g.from.height/d.height,x:g.from.width/d.width},to:{y:g.to.height/d.height,x:g.to.width/d.width}},("box"===p||"both"===p)&&(f.from.y!==f.to.y&&(s=s.concat(l),g.from=a.effects.setTransition(g,l,f.from.y,g.from),g.to=a.effects.setTransition(g,l,f.to.y,g.to)),f.from.x!==f.to.x&&(s=s.concat(m),g.from=a.effects.setTransition(g,m,f.from.x,g.from),g.to=a.effects.setTransition(g,m,f.to.x,g.to))),("content"===p||"both"===p)&&f.from.y!==f.to.y&&(s=s.concat(k).concat(j),g.from=a.effects.setTransition(g,k,f.from.y,g.from),g.to=a.effects.setTransition(g,k,f.to.y,g.to)),a.effects.save(g,s),g.show(),a.effects.createWrapper(g),g.css("overflow","hidden").css(g.from),q&&(e=a.effects.getBaseline(q,d),g.from.top=(d.outerHeight-g.outerHeight())*e.y,g.from.left=(d.outerWidth-g.outerWidth())*e.x,g.to.top=(d.outerHeight-g.to.outerHeight)*e.y,g.to.left=(d.outerWidth-g.to.outerWidth)*e.x),g.css(g.from),("content"===p||"both"===p)&&(l=l.concat(["marginTop","marginBottom"]).concat(k),m=m.concat(["marginLeft","marginRight"]),j=h.concat(l).concat(m),g.find("*[width]").each(function(){var c=a(this),d={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};o&&a.effects.save(c,j),c.from={height:d.height*f.from.y,width:d.width*f.from.x,outerHeight:d.outerHeight*f.from.y,outerWidth:d.outerWidth*f.from.x},c.to={height:d.height*f.to.y,width:d.width*f.to.x,outerHeight:d.height*f.to.y,outerWidth:d.width*f.to.x},f.from.y!==f.to.y&&(c.from=a.effects.setTransition(c,l,f.from.y,c.from),c.to=a.effects.setTransition(c,l,f.to.y,c.to)),f.from.x!==f.to.x&&(c.from=a.effects.setTransition(c,m,f.from.x,c.from),c.to=a.effects.setTransition(c,m,f.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.easing,function(){o&&a.effects.restore(c,j)})})),g.animate(g.to,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){0===g.to.opacity&&g.css("opacity",g.from.opacity),"hide"===n&&g.hide(),a.effects.restore(g,s),o||("static"===r?g.css({position:"relative",top:g.to.top,left:g.to.left}):a.each(["top","left"],function(a,b){g.css(b,function(b,c){var d=parseInt(c,10),e=a?g.to.left:g.to.top;return"auto"===c?e+"px":d+e+"px"})})),a.effects.removeWrapper(g),c()}})},a.effects.effect.scale=function(b,c){var d=a(this),e=a.extend(!0,{},b),f=a.effects.setMode(d,b.mode||"effect"),g=parseInt(b.percent,10)||(0===parseInt(b.percent,10)?0:"hide"===f?0:100),h=b.direction||"both",i=b.origin,j={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},k={y:"horizontal"!==h?g/100:1,x:"vertical"!==h?g/100:1};e.effect="size",e.queue=!1,e.complete=c,"effect"!==f&&(e.origin=i||["middle","center"],e.restore=!0),e.from=b.from||("show"===f?{height:0,width:0,outerHeight:0,outerWidth:0}:j),e.to={height:j.height*k.y,width:j.width*k.x,outerHeight:j.outerHeight*k.y,outerWidth:j.outerWidth*k.x},e.fade&&("show"===f&&(e.from.opacity=0,e.to.opacity=1),"hide"===f&&(e.from.opacity=1,e.to.opacity=0)),d.effect(e)},a.effects.effect.puff=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"hide"),f="hide"===e,g=parseInt(b.percent,10)||150,h=g/100,i={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()};a.extend(b,{effect:"scale",queue:!1,fade:!0,mode:e,complete:c,percent:f?g:100,from:f?i:{height:i.height*h,width:i.width*h,outerHeight:i.outerHeight*h,outerWidth:i.outerWidth*h}}),d.effect(b)},a.effects.effect.pulsate=function(b,c){var d,e=a(this),f=a.effects.setMode(e,b.mode||"show"),g="show"===f,h="hide"===f,i=g||"hide"===f,j=2*(b.times||5)+(i?1:0),k=b.duration/j,l=0,m=e.queue(),n=m.length;for((g||!e.is(":visible"))&&(e.css("opacity",0).show(),l=1),d=1;j>d;d++)e.animate({opacity:l},k,b.easing),l=1-l;e.animate({opacity:l},k,b.easing),e.queue(function(){h&&e.hide(),c()}),n>1&&m.splice.apply(m,[1,0].concat(m.splice(n,j+1))),e.dequeue()},a.effects.effect.shake=function(b,c){var d,e=a(this),f=["position","top","bottom","left","right","height","width"],g=a.effects.setMode(e,b.mode||"effect"),h=b.direction||"left",i=b.distance||20,j=b.times||3,k=2*j+1,l=Math.round(b.duration/k),m="up"===h||"down"===h?"top":"left",n="up"===h||"left"===h,o={},p={},q={},r=e.queue(),s=r.length;for(a.effects.save(e,f),e.show(),a.effects.createWrapper(e),o[m]=(n?"-=":"+=")+i,p[m]=(n?"+=":"-=")+2*i,q[m]=(n?"-=":"+=")+2*i,e.animate(o,l,b.easing),d=1;j>d;d++)e.animate(p,l,b.easing).animate(q,l,b.easing);e.animate(p,l,b.easing).animate(o,l/2,b.easing).queue(function(){"hide"===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}),s>1&&r.splice.apply(r,[1,0].concat(r.splice(s,k+1))),e.dequeue()},a.effects.effect.slide=function(b,c){var d,e=a(this),f=["position","top","bottom","left","right","width","height"],g=a.effects.setMode(e,b.mode||"show"),h="show"===g,i=b.direction||"left",j="up"===i||"down"===i?"top":"left",k="up"===i||"left"===i,l={};a.effects.save(e,f),e.show(),d=b.distance||e["top"===j?"outerHeight":"outerWidth"](!0),a.effects.createWrapper(e).css({overflow:"hidden"}),h&&e.css(j,k?isNaN(d)?"-"+d:-d:d),l[j]=(h?k?"+=":"-=":k?"-=":"+=")+d,e.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}})},a.effects.effect.transfer=function(b,c){var d=a(this),e=a(b.to),f="fixed"===e.css("position"),g=a("body"),h=f?g.scrollTop():0,i=f?g.scrollLeft():0,j=e.offset(),k={top:j.top-h,left:j.left-i,height:e.innerHeight(),width:e.innerWidth()},l=d.offset(),m=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({top:l.top-h,left:l.left-i,height:d.innerHeight(),width:d.innerWidth(),position:f?"fixed":"absolute"}).animate(k,b.duration,b.easing,function(){m.remove(),c()})},a.widget("ui.progressbar",{version:"1.11.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(a){return void 0===a?this.options.value:(this.options.value=this._constrainedValue(a),void this._refreshValue())},_constrainedValue:function(a){return void 0===a&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a){var b=a.value;delete a.value,this._super(a),this.options.value=this._constrainedValue(b),this._refreshValue()},_setOption:function(a,b){"max"===a&&(b=Math.max(this.min,b)),"disabled"===a&&this.element.toggleClass("ui-state-disabled",!!b).attr("aria-disabled",b),this._super(a,b)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var b=this.options.value,c=this._percentage();this.valueDiv.toggle(this.indeterminate||b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(c.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==b&&(this.oldValue=b,this._trigger("change")),b===this.options.max&&this._trigger("complete")}}),a.widget("ui.selectable",a.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b,c=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){b=a(c.options.filter,c.element[0]),b.addClass("ui-selectee"),b.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=b.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(b){var c=this,d=this.options;this.opos=[b.pageX,b.pageY],this.options.disabled||(this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");
d.startselected=!0,b.metaKey||b.ctrlKey||(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().addBack().each(function(){var d,e=a.data(this,"selectable-item");return e?(d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass("ui-selected"),e.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting"),e.unselecting=!d,e.selecting=d,e.selected=d,d?c._trigger("selecting",b,{selecting:e.element}):c._trigger("unselecting",b,{unselecting:e.element}),!1):void 0}))},_mouseDrag:function(b){if(this.dragged=!0,!this.options.disabled){var c,d=this,e=this.options,f=this.opos[0],g=this.opos[1],h=b.pageX,i=b.pageY;return f>h&&(c=h,h=f,f=c),g>i&&(c=i,i=g,g=c),this.helper.css({left:f,top:g,width:h-f,height:i-g}),this.selectees.each(function(){var c=a.data(this,"selectable-item"),j=!1;c&&c.element!==d.element[0]&&("touch"===e.tolerance?j=!(c.left>h||c.right<f||c.top>i||c.bottom<g):"fit"===e.tolerance&&(j=c.left>f&&c.right<h&&c.top>g&&c.bottom<i),j?(c.selected&&(c.$element.removeClass("ui-selected"),c.selected=!1),c.unselecting&&(c.$element.removeClass("ui-unselecting"),c.unselecting=!1),c.selecting||(c.$element.addClass("ui-selecting"),c.selecting=!0,d._trigger("selecting",b,{selecting:c.element}))):(c.selecting&&((b.metaKey||b.ctrlKey)&&c.startselected?(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.$element.addClass("ui-selected"),c.selected=!0):(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.startselected&&(c.$element.addClass("ui-unselecting"),c.unselecting=!0),d._trigger("unselecting",b,{unselecting:c.element}))),c.selected&&(b.metaKey||b.ctrlKey||c.startselected||(c.$element.removeClass("ui-selected"),c.selected=!1,c.$element.addClass("ui-unselecting"),c.unselecting=!0,d._trigger("unselecting",b,{unselecting:c.element})))))}),!1}},_mouseStop:function(b){var c=this;return this.dragged=!1,a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.widget("ui.selectmenu",{version:"1.11.2",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var a=this.element.uniqueId().attr("id");this.ids={element:a,button:a+"-button",menu:a+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var b=this,c=this.element.attr("tabindex");this.label=a("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(a){this.button.focus(),a.preventDefault()}}),this.element.hide(),this.button=a("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:c||this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),a("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=a("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){b.menuItems||b._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var b=this;this.menu=a("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=a("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(a,c){a.preventDefault(),b._setSelection(),b._select(c.item.data("ui-selectmenu-item"),a)},focus:function(a,c){var d=c.item.data("ui-selectmenu-item");null!=b.focusIndex&&d.index!==b.focusIndex&&(b._trigger("focus",a,{item:d}),b.isOpen||b._select(d,a)),b.focusIndex=d.index,b.button.attr("aria-activedescendant",b.menuItems.eq(d.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var a,b=this.element.find("option");b.length&&(this._parseOptions(b),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),a=this._getSelectedItem(),this.menuInstance.focus(null,a),this._setAria(a.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(a){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",a))},_position:function(){this.menuWrap.position(a.extend({of:this.button},this.options.position))},close:function(a){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",a))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(b,c){var d=this,e="";a.each(c,function(c,f){f.optgroup!==e&&(a("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(f.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:f.optgroup}).appendTo(b),e=f.optgroup),d._renderItemData(b,f)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-selectmenu-item",b)},_renderItem:function(b,c){var d=a("<li>");return c.disabled&&d.addClass("ui-state-disabled"),this._setText(d,c.label),d.appendTo(b)},_setText:function(a,b){b?a.text(b):a.html("&#160;")},_move:function(a,b){var c,d,e=".ui-menu-item";this.isOpen?c=this.menuItems.eq(this.focusIndex):(c=this.menuItems.eq(this.element[0].selectedIndex),e+=":not(.ui-state-disabled)"),d="first"===a||"last"===a?c["first"===a?"prevAll":"nextAll"](e).eq(-1):c[a+"All"](e).eq(0),d.length&&this.menuInstance.focus(b,d)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(a){this[this.isOpen?"close":"open"](a)},_setSelection:function(){var a;this.range&&(window.getSelection?(a=window.getSelection(),a.removeAllRanges(),a.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(b){this.isOpen&&(a(b.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(b))}},_buttonEvents:{mousedown:function(){var a;window.getSelection?(a=window.getSelection(),a.rangeCount&&(this.range=a.getRangeAt(0))):this.range=document.selection.createRange()},click:function(a){this._setSelection(),this._toggle(a)},keydown:function(b){var c=!0;switch(b.keyCode){case a.ui.keyCode.TAB:case a.ui.keyCode.ESCAPE:this.close(b),c=!1;break;case a.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(b);break;case a.ui.keyCode.UP:b.altKey?this._toggle(b):this._move("prev",b);break;case a.ui.keyCode.DOWN:b.altKey?this._toggle(b):this._move("next",b);break;case a.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(b):this._toggle(b);break;case a.ui.keyCode.LEFT:this._move("prev",b);break;case a.ui.keyCode.RIGHT:this._move("next",b);break;case a.ui.keyCode.HOME:case a.ui.keyCode.PAGE_UP:this._move("first",b);break;case a.ui.keyCode.END:case a.ui.keyCode.PAGE_DOWN:this._move("last",b);break;default:this.menu.trigger(b),c=!1}c&&b.preventDefault()}},_selectFocusedItem:function(a){var b=this.menuItems.eq(this.focusIndex);b.hasClass("ui-state-disabled")||this._select(b.data("ui-selectmenu-item"),a)},_select:function(a,b){var c=this.element[0].selectedIndex;this.element[0].selectedIndex=a.index,this._setText(this.buttonText,a.label),this._setAria(a),this._trigger("select",b,{item:a}),a.index!==c&&this._trigger("change",b,{item:a}),this.close(b)},_setAria:function(a){var b=this.menuItems.eq(a.index).attr("id");this.button.attr({"aria-labelledby":b,"aria-activedescendant":b}),this.menu.attr("aria-activedescendant",b)},_setOption:function(a,b){"icons"===a&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(b.button),this._super(a,b),"appendTo"===a&&this.menuWrap.appendTo(this._appendTo()),"disabled"===a&&(this.menuInstance.option("disabled",b),this.button.toggleClass("ui-state-disabled",b).attr("aria-disabled",b),this.element.prop("disabled",b),b?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===a&&this._resizeButton()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front")),b.length||(b=this.document[0].body),b},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var a=this.options.width;a||(a=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(a)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(b){var c=[];b.each(function(b,d){var e=a(d),f=e.parent("optgroup");c.push({element:e,index:b,value:e.attr("value"),label:e.text(),optgroup:f.attr("label")||"",disabled:f.prop("disabled")||e.prop("disabled")})}),this.items=c},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),a.widget("ui.slider",a.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;c>b;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options,c="";b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return l.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h===!1?!1:(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),0>d&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&d>c)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._lastChangedValue=b,this._trigger("change",a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),"disabled"===b&&this.element.toggleClass("ui-state-disabled",!!c),this._super(b,c),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===c?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;e>d;d+=1)this._change(null,d);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_calculateNewMax:function(){var a=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-a},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=this._animateOff?!1:h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(b){var c,d,e,f,g=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(b.target).addClass("ui-state-active"),c=this._start(b,g),c===!1))return}switch(f=this.options.step,d=e=this.options.values&&this.options.values.length?this.values(g):this.value(),b.keyCode){case a.ui.keyCode.HOME:e=this._valueMin();break;case a.ui.keyCode.END:e=this._valueMax();break;case a.ui.keyCode.PAGE_UP:e=this._trimAlignValue(d+(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(d-(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(d===this._valueMax())return;e=this._trimAlignValue(d+f);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d===this._valueMin())return;e=this._trimAlignValue(d-f)}this._slide(b,g,e)},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}}),a.widget("ui.sortable",a.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&b+c>a},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===a.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),a.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(b),a(b.target).parents().each(function(){return a.data(this,f.widgetName+"-item")===f?(d=a(this),!1):void 0}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),d&&(!this.options.handle||c||(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),e))?(this.currentItem=d,this._removeCurrentsFromItems(),!0):!1)},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-a(document).scrollTop()<g.scrollSensitivity?h=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<g.scrollSensitivity&&(h=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)),b.pageX-a(document).scrollLeft()<g.scrollSensitivity?h=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<g.scrollSensitivity&&(h=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&e!==this.currentItem[0]&&this.placeholder[1===f?"next":"prev"]()[0]!==e&&!a.contains(this.placeholder[0],e)&&("semi-dynamic"===this.options.type?!a.contains(this.element[0],e):!0)){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&i>d+j,m="y"===this.options.axis||b+k>f&&g>b+k,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),c="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),d=b&&c,e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return d?this.floating?f&&"right"===f||"down"===e?2:1:e&&("down"===e?2:1):!1},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),d=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?"right"===e&&c||"left"===e&&!c:d&&("down"===d&&b||"up"===d&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){function c(){h.push(this)}var d,e,f,g,h=[],i=[],j=this._connectWith();if(j&&b)for(d=j.length-1;d>=0;d--)for(f=a(j[d]),e=f.length-1;e>=0;e--)g=a.data(f[e],this.widgetFullName),g&&g!==this&&!g.options.disabled&&i.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g]);for(i.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),d=i.length-1;d>=0;d--)i[d][0].each(c);return a(h)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;j>d;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===d?b.currentItem.children().each(function(){a("<td>&#160;</td>",b.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(e)}):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){(!c||d.forcePlaceholderSize)&&(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_contactContainers:function(b){var c,d,e,f,g,h,i,j,k,l,m=null,n=null;for(c=this.containers.length-1;c>=0;c--)if(!a.contains(this.currentItem[0],this.containers[c].element[0]))if(this._intersectsWith(this.containers[c].containerCache)){if(m&&a.contains(this.containers[c].element[0],m.element[0]))continue;m=this.containers[c],n=c}else this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",b,this._uiHash(this)),this.containers[c].containerCache.over=0);if(m)if(1===this.containers.length)this.containers[n].containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1);else{for(e=1e4,f=null,k=m.floating||this._isFloating(this.currentItem),g=k?"left":"top",h=k?"width":"height",l=k?"clientX":"clientY",d=this.items.length-1;d>=0;d--)a.contains(this.containers[n].element[0],this.items[d].item[0])&&this.items[d].item[0]!==this.currentItem[0]&&(i=this.items[d].item.offset()[g],j=!1,b[l]-i>this.items[d][h]/2&&(j=!0),Math.abs(b[l]-i)<e&&(e=Math.abs(b[l]-i),f=this.items[d],this.direction=j?"up":"down"));if(!f&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[n])return void(this.currentContainer.containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1));f?this._rearrange(b,f,null,!0):this._rearrange(b,null,this.containers[n].element,!0),this._trigger("change",b,this._uiHash()),this.containers[n]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[n],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!d[0].style.width||c.forceHelperSize)&&d.width(this.currentItem.width()),(!d[0].style.height||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),("document"===e.containment||"window"===e.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a("document"===e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(a("document"===e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;var d,e=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)("auto"===this._storedCSS[d]||"static"===this._storedCSS[d])&&(this._storedCSS[d]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&e.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||e.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(e.push(function(a){this._trigger("remove",a,this._uiHash())}),e.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),e.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),d=this.containers.length-1;d>=0;d--)b||e.push(c("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(e.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(d=0;d<e.length;d++)e[d].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.widget("ui.spinner",{version:"1.11.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var b={},c=this.element;return a.each(["min","max","step"],function(a,d){var e=c.attr(d);void 0!==e&&e.length&&(b[d]=e)}),b},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",a)))},mousewheel:function(a,b){if(b){if(!this.spinning&&!this._start(a))return!1;this._spin((b>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)},100),a.preventDefault()}},"mousedown .ui-spinner-button":function(b){function c(){var a=this.element[0]===this.document[0].activeElement;a||(this.element.focus(),this.previous=d,this._delay(function(){this.previous=d}))}var d;d=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),b.preventDefault(),c.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,c.call(this)}),this._start(b)!==!1&&this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(b){return a(b.currentTarget).hasClass("ui-state-active")?this._start(b)===!1?!1:void this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*a.height())&&a.height()>0&&a.height(a.height()),this.options.disabled&&this.disable()},_keydown:function(b){var c=this.options,d=a.ui.keyCode;switch(b.keyCode){case d.UP:return this._repeat(null,1,b),!0;case d.DOWN:return this._repeat(null,-1,b),!0;case d.PAGE_UP:return this._repeat(null,c.page,b),!0;case d.PAGE_DOWN:return this._repeat(null,-c.page,b),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(a){return this.spinning||this._trigger("start",a)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(a,b,c){a=a||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,c)},a),this._spin(b*this.options.step,c)},_spin:function(a,b){var c=this.value()||0;this.counter||(this.counter=1),c=this._adjustValue(c+a*this._increment(this.counter)),this.spinning&&this._trigger("spin",b,{value:c})===!1||(this._value(c),this.counter++)},_increment:function(b){var c=this.options.incremental;return c?a.isFunction(c)?c(b):Math.floor(b*b*b/5e4-b*b/500+17*b/200+1):1},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return-1===c?0:b.length-c-1},_adjustValue:function(a){var b,c,d=this.options;return b=null!==d.min?d.min:0,c=a-b,c=Math.round(c/d.step)*d.step,a=b+c,a=parseFloat(a.toFixed(this._precision())),null!==d.max&&a>d.max?d.max:null!==d.min&&a<d.min?d.min:a},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))},_setOption:function(a,b){if("culture"===a||"numberFormat"===a){var c=this._parse(this.element.val());return this.options[a]=b,void this.element.val(this._format(c))}("max"===a||"min"===a||"step"===a)&&"string"==typeof b&&(b=this._parse(b)),"icons"===a&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)),this._super(a,b),"disabled"===a&&(this.widget().toggleClass("ui-state-disabled",!!b),this.element.prop("disabled",!!b),this.buttons.button(b?"disable":"enable"))},_setOptions:i(function(a){this._super(a)}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var a=this.value();return null===a?!1:a===this._adjustValue(a)},_value:function(a,b){var c;""!==a&&(c=this._parse(a),null!==c&&(b||(c=this._adjustValue(c)),a=this._format(c))),this.element.val(a),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:i(function(a){this._stepUp(a)}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())},stepDown:i(function(a){this._stepDown(a)}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())},pageUp:i(function(a){this._stepUp((a||1)*this.options.page)}),pageDown:i(function(a){this._stepDown((a||1)*this.options.page)}),value:function(a){return arguments.length?void i(this._value).call(this,a):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),a.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;return function(b){var c,d;b=b.cloneNode(!1),c=b.href.replace(a,""),d=location.href.replace(a,"");try{c=decodeURIComponent(c)}catch(e){}try{d=decodeURIComponent(d)}catch(e){}return b.hash.length>1&&c===d}}(),_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(c.active):a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){return a(e).attr("aria-controls")===d?(b=c,!1):void 0}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===b||-1===b)&&(b=this.tabs.length?0:!1)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),-1===b&&(b=c?!1:0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d===this.options.active?!1:d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),0>b&&(b=e),b}for(var e=this.tabs.length-1;-1!==a.inArray(d(),this.options.disabled);)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this,c=this.tabs,d=this.anchors,e=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,f,g,h=a(d).uniqueId().attr("id"),i=a(d).closest("li"),j=i.attr("aria-controls");b._isLocal(d)?(e=d.hash,g=e.substring(1),f=b.element.find(b._sanitizeSelector(e))):(g=i.attr("aria-controls")||a({}).uniqueId()[0].id,e="#"+g,f=b.element.find(e),f.length||(f=b._createPanel(g),f.insertAfter(b.panels[c-1]||b.tablist)),f.attr("aria-live","polite")),f.length&&(b.panels=b.panels.add(f)),j&&i.data("ui-tabs-aria-controls",j),i.attr({"aria-controls":g,"aria-labelledby":h}),f.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),c&&(this._off(c.not(this.tabs)),this._off(d.not(this.anchors)),this._off(e.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c,d=0;c=this.tabs[d];d++)b===!0||-1!==a.inArray(d,b)?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(a){a.preventDefault()}}),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=h?!1:this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr("aria-hidden","true"),c.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr("aria-hidden","false"),c.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(b){var c=this.options.disabled;c!==!1&&(void 0===b?c=!1:(b=this._getIndex(b),c=a.isArray(c)?a.map(c,function(a){return a!==b?a:null}):a.map(this.tabs,function(a,c){return c!==b?c:null})),this._setupDisabled(c))},disable:function(b){var c=this.options.disabled;if(c!==!0){if(void 0===b)c=!0;else{if(b=this._getIndex(b),-1!==a.inArray(b,c))return;c=a.isArray(c)?a.merge([b],c).sort():[b]}this._setupDisabled(c)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),f=e.find(".ui-tabs-anchor"),g=this._getPanelForTab(e),h={tab:e,panel:g};this._isLocal(f[0])||(this.xhr=a.ajax(this._ajaxSettings(f,c,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(e.addClass("ui-tabs-loading"),g.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){g.html(a),d._trigger("load",c,h)},1)}).complete(function(a,b){setTimeout(function(){"abort"===b&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),g.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}}),a.widget("ui.tooltip",{version:"1.11.2",options:{content:function(){var b=a(this).attr("title")||"";return a("<a>").text(b).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(b,c){var d=(b.attr("aria-describedby")||"").split(/\s+/);d.push(c),b.data("ui-tooltip-id",c).attr("aria-describedby",a.trim(d.join(" ")))},_removeDescribedBy:function(b){var c=b.data("ui-tooltip-id"),d=(b.attr("aria-describedby")||"").split(/\s+/),e=a.inArray(c,d);-1!==e&&d.splice(e,1),b.removeData("ui-tooltip-id"),d=a.trim(d.join(" ")),d?b.attr("aria-describedby",d):b.removeAttr("aria-describedby")
},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=a("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(b,c){var d=this;return"disabled"===b?(this[c?"_disable":"_enable"](),void(this.options[b]=c)):(this._super(b,c),void("content"===b&&a.each(this.tooltips,function(a,b){d._updateContent(b.element)})))},_disable:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d.element[0],b.close(e,!0)}),this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.is("[title]")&&b.data("ui-tooltip-title",b.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.data("ui-tooltip-title")&&b.attr("title",b.data("ui-tooltip-title"))})},open:function(b){var c=this,d=a(b?b.target:this.element).closest(this.options.items);d.length&&!d.data("ui-tooltip-id")&&(d.attr("title")&&d.data("ui-tooltip-title",d.attr("title")),d.data("ui-tooltip-open",!0),b&&"mouseover"===b.type&&d.parents().each(function(){var b,d=a(this);d.data("ui-tooltip-open")&&(b=a.Event("blur"),b.target=b.currentTarget=this,c.close(b,!0)),d.attr("title")&&(d.uniqueId(),c.parents[this.id]={element:this,title:d.attr("title")},d.attr("title",""))}),this._updateContent(d,b))},_updateContent:function(a,b){var c,d=this.options.content,e=this,f=b?b.type:null;return"string"==typeof d?this._open(b,a,d):(c=d.call(a[0],function(c){a.data("ui-tooltip-open")&&e._delay(function(){b&&(b.type=f),this._open(b,a,c)})}),void(c&&this._open(b,a,c)))},_open:function(b,c,d){function e(a){k.of=a,g.is(":hidden")||g.position(k)}var f,g,h,i,j,k=a.extend({},this.options.position);if(d){if(f=this._find(c))return void f.tooltip.find(".ui-tooltip-content").html(d);c.is("[title]")&&(b&&"mouseover"===b.type?c.attr("title",""):c.removeAttr("title")),f=this._tooltip(c),g=f.tooltip,this._addDescribedBy(c,g.attr("id")),g.find(".ui-tooltip-content").html(d),this.liveRegion.children().hide(),d.clone?(j=d.clone(),j.removeAttr("id").find("[id]").removeAttr("id")):j=d,a("<div>").html(j).appendTo(this.liveRegion),this.options.track&&b&&/^mouse/.test(b.type)?(this._on(this.document,{mousemove:e}),e(b)):g.position(a.extend({of:c},this.options.position)),g.hide(),this._show(g,this.options.show),this.options.show&&this.options.show.delay&&(i=this.delayedShow=setInterval(function(){g.is(":visible")&&(e(k.of),clearInterval(i))},a.fx.interval)),this._trigger("open",b,{tooltip:g}),h={keyup:function(b){if(b.keyCode===a.ui.keyCode.ESCAPE){var d=a.Event(b);d.currentTarget=c[0],this.close(d,!0)}}},c[0]!==this.element[0]&&(h.remove=function(){this._removeTooltip(g)}),b&&"mouseover"!==b.type||(h.mouseleave="close"),b&&"focusin"!==b.type||(h.focusout="close"),this._on(!0,c,h)}},close:function(b){var c,d=this,e=a(b?b.currentTarget:this.element),f=this._find(e);f&&(c=f.tooltip,f.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&!e.attr("title")&&e.attr("title",e.data("ui-tooltip-title")),this._removeDescribedBy(e),f.hiding=!0,c.stop(!0),this._hide(c,this.options.hide,function(){d._removeTooltip(a(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),b&&"mouseleave"===b.type&&a.each(this.parents,function(b,c){a(c.element).attr("title",c.title),delete d.parents[b]}),f.closing=!0,this._trigger("close",b,{tooltip:c}),f.hiding||(f.closing=!1)))},_tooltip:function(b){var c=a("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),d=c.uniqueId().attr("id");return a("<div>").addClass("ui-tooltip-content").appendTo(c),c.appendTo(this.document[0].body),this.tooltips[d]={element:b,tooltip:c}},_find:function(a){var b=a.data("ui-tooltip-id");return b?this.tooltips[b]:null},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]},_destroy:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur"),f=d.element;e.target=e.currentTarget=f[0],b.close(e,!0),a("#"+c).remove(),f.data("ui-tooltip-title")&&(f.attr("title")||f.attr("title",f.data("ui-tooltip-title")),f.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})}),function(a,b,c){"use strict";b.module("ui.sortable",[]).value("uiSortableConfig",{}).directive("uiSortable",["uiSortableConfig","$timeout","$log",function(a,d,e){return{require:"?ngModel",link:function(f,g,h,i){function j(a,b){return b&&"function"==typeof b?function(c,d){a(c,d),b(c,d)}:a}function k(a,b){var c=a.sortable("option","helper");return"clone"===c||"function"==typeof c&&b.item.sortable.isCustomHelperUsed()}function l(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))}function m(a,b){b.item.sortable._destroy()}var n,o={},p={"ui-floating":c},q={receive:null,remove:null,start:null,stop:null,update:null},r={helper:null};return b.extend(o,p,a,f.$eval(h.uiSortable)),b.element.fn&&b.element.fn.jquery?(i?(f.$watch(h.ngModel+".length",function(){d(function(){g.data("ui-sortable")&&g.sortable("refresh")},0,!1)}),q.start=function(a,d){if("auto"===o["ui-floating"]){var e=d.item.siblings();b.element(a.target).data("ui-sortable").floating=l(e)}d.item.sortable={model:i.$modelValue[d.item.index()],index:d.item.index(),source:d.item.parent(),sourceModel:i.$modelValue,cancel:function(){d.item.sortable._isCanceled=!0},isCanceled:function(){return d.item.sortable._isCanceled},isCustomHelperUsed:function(){return!!d.item.sortable._isCustomHelperUsed},_isCanceled:!1,_isCustomHelperUsed:d.item.sortable._isCustomHelperUsed,_destroy:function(){b.forEach(d.item.sortable,function(a,b){d.item.sortable[b]=c})}}},q.activate=function(){n=g.contents();var a=g.sortable("option","placeholder");if(a&&a.element&&"function"==typeof a.element){var c=a.element();c=b.element(c);var d=g.find('[class="'+c.attr("class")+'"]');n=n.not(d)}},q.update=function(a,b){if(!b.item.sortable.received){b.item.sortable.dropindex=b.item.index();var c=b.item.parent();b.item.sortable.droptarget=c;var d=c.attr("ng-model")||c.attr("data-ng-model");b.item.sortable.droptargetModel=c.scope().$eval(d),g.sortable("cancel")}k(g,b)&&!b.item.sortable.received&&"parent"===g.sortable("option","appendTo")&&(n=n.not(n.last())),n.appendTo(g),b.item.sortable.received&&(n=null),b.item.sortable.received&&!b.item.sortable.isCanceled()&&f.$apply(function(){i.$modelValue.splice(b.item.sortable.dropindex,0,b.item.sortable.moved)})},q.stop=function(a,b){!b.item.sortable.received&&"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()?f.$apply(function(){i.$modelValue.splice(b.item.sortable.dropindex,0,i.$modelValue.splice(b.item.sortable.index,1)[0])}):"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()||k(g,b)||n.appendTo(g),n=null},q.receive=function(a,b){b.item.sortable.received=!0},q.remove=function(a,b){"dropindex"in b.item.sortable||(g.sortable("cancel"),b.item.sortable.cancel()),b.item.sortable.isCanceled()||f.$apply(function(){b.item.sortable.moved=i.$modelValue.splice(b.item.sortable.index,1)[0]})},r.helper=function(a){return a&&"function"==typeof a?function(b,c){var d=a(b,c);return c.sortable._isCustomHelperUsed=c!==d,d}:a},f.$watch(h.uiSortable,function(a){g.data("ui-sortable")&&b.forEach(a,function(a,b){return b in p?("ui-floating"!==b||a!==!1&&a!==!0||(g.data("ui-sortable").floating=a),void(o[b]=a)):(q[b]?("stop"===b&&(a=j(a,function(){f.$apply()}),a=j(a,m)),a=j(q[b],a)):r[b]&&(a=r[b](a)),o[b]=a,void g.sortable("option",b,a))})},!0),b.forEach(q,function(a,b){o[b]=j(a,o[b]),"stop"===b&&(o[b]=j(o[b],m))})):e.info("ui.sortable: ngModel not provided!",g),void g.sortable(o)):void e.error("ui.sortable: jQuery should be included before AngularJS!")}}}])}(window,window.angular);

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.io=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

module.exports = _dereq_('./lib/');

},{"./lib/":2}],2:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var parser = _dereq_('socket.io-parser');
var Manager = _dereq_('./manager');
var debug = _dereq_('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri == 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var io;

  if (opts.forceNew || opts['force new connection'] || false === opts.multiplex) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }

  return io.socket(parsed.path);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = _dereq_('./manager');
exports.Socket = _dereq_('./socket');

},{"./manager":3,"./socket":5,"./url":6,"debug":9,"socket.io-parser":43}],3:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var eio = _dereq_('engine.io-client');
var Socket = _dereq_('./socket');
var Emitter = _dereq_('component-emitter');
var parser = _dereq_('socket.io-parser');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var object = _dereq_('object-component');
var debug = _dereq_('debug')('socket.io-client:manager');
var indexOf = _dereq_('indexof');

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts){
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' == typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connected = [];
  this.attempts = 0;
  this.encoding = false;
  this.packetBuffer = [];
  this.encoder = new parser.Encoder();
  this.decoder = new parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function() {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
  }
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function(v){
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function(v){
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function(v){
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function(v){
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function(v){
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function() {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.openReconnect && !this.reconnecting && this._reconnection && this.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.openReconnect = true;
    this.reconnect();
  }
};


/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function(fn){
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function() {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function(data){
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    }

    self.maybeReconnectOnOpen();
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function(){
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function(){
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function(data){
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function(packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function(err){
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function(nsp){
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connect', function(){
      if (!~indexOf(self.connected, socket)) {
        self.connected.push(socket);
      }
    });
  }
  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function(socket){
  var index = indexOf(this.connected, socket);
  if (~index) this.connected.splice(index, 1);
  if (this.connected.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function(packet){
  debug('writing packet %j', packet);
  var self = this;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function(encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i]);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function(){
  var sub;
  while (sub = this.subs.shift()) sub.destroy();

  this.packetBuffer = [];
  this.encoding = false;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function(){
  this.skipReconnect = true;
  this.readyState = 'closed';
  this.engine && this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function(reason){
  debug('close');
  this.cleanup();
  this.readyState = 'closed';
  this.emit('close', reason);
  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function(){
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;
  this.attempts++;

  if (this.attempts > this._reconnectionAttempts) {
    debug('reconnect failed');
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.attempts * this.reconnectionDelay();
    delay = Math.min(delay, this.reconnectionDelayMax());
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function(){
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.attempts);
      self.emitAll('reconnecting', self.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function(err){
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function(){
  var attempt = this.attempts;
  this.attempts = 0;
  this.reconnecting = false;
  this.emitAll('reconnect', attempt);
};

},{"./on":4,"./socket":5,"./url":6,"component-bind":7,"component-emitter":8,"debug":9,"engine.io-client":10,"indexof":39,"object-component":40,"socket.io-parser":43}],4:[function(_dereq_,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function(){
      obj.removeListener(ev, fn);
    }
  };
}

},{}],5:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var parser = _dereq_('socket.io-parser');
var Emitter = _dereq_('component-emitter');
var toArray = _dereq_('to-array');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:socket');
var hasBin = _dereq_('has-binary');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp){
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  if (this.io.autoConnect) this.open();
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function() {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function(){
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' == this.io.readyState) this.onopen();
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function(ev){
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var parserType = parser.EVENT; // default
  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
  var packet = { type: parserType, data: args };

  // event ack callback
  if ('function' == typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function(packet){
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function(){
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' != this.nsp) {
    this.packet({ type: parser.CONNECT });
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function(reason){
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function(packet){
  if (packet.nsp != this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function(packet){
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function(id){
  var self = this;
  var sent = false;
  return function(){
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
    self.packet({
      type: type,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function(packet){
  debug('calling ack %s with %j', packet.id, packet.data);
  var fn = this.acks[packet.id];
  fn.apply(this, packet.data);
  delete this.acks[packet.id];
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function(){
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function(){
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function(){
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function(){
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function(){
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

},{"./on":4,"component-bind":7,"component-emitter":8,"debug":9,"has-binary":35,"socket.io-parser":43,"to-array":47}],6:[function(_dereq_,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = _dereq_('parseuri');
var debug = _dereq_('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc){
  var obj = uri;

  // default to window.location
  var loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.hostname;

  // relative path support
  if ('string' == typeof uri) {
    if ('/' == uri.charAt(0)) {
      if ('/' == uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.hostname + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' != typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    }
    else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  // define unique id
  obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"debug":9,"parseuri":41}],7:[function(_dereq_,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],8:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],9:[function(_dereq_,module,exports){

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

// persist

try {
  if (window.localStorage) debug.enable(localStorage.debug);
} catch(e){}

},{}],10:[function(_dereq_,module,exports){

module.exports =  _dereq_('./lib/');

},{"./lib/":11}],11:[function(_dereq_,module,exports){

module.exports = _dereq_('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":12,"engine.io-parser":24}],12:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = _dereq_('./transports');
var Emitter = _dereq_('component-emitter');
var debug = _dereq_('debug')('engine.io-client:socket');
var index = _dereq_('indexof');
var parser = _dereq_('engine.io-parser');
var parseuri = _dereq_('parseuri');
var parsejson = _dereq_('parsejson');
var parseqs = _dereq_('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Noop function.
 *
 * @api private
 */

function noop(){}

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts){
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' == typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.host = uri.host;
    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  }

  this.secure = null != opts.secure ? opts.secure :
    (global.location && 'https:' == location.protocol);

  if (opts.host) {
    var pieces = opts.host.split(':');
    opts.hostname = pieces.shift();
    if (pieces.length) opts.port = pieces.pop();
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ?
       location.port :
       (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.readyState = '';
  this.writeBuffer = [];
  this.callbackBuffer = [];
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.open();
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = _dereq_('./transport');
Socket.transports = _dereq_('./transports');
Socket.parser = _dereq_('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    agent: this.agent,
    hostname: this.hostname,
    port: this.port,
    secure: this.secure,
    path: this.path,
    query: query,
    forceJSONP: this.forceJSONP,
    jsonp: this.jsonp,
    forceBase64: this.forceBase64,
    enablesXDR: this.enablesXDR,
    timestampRequests: this.timestampRequests,
    timestampParam: this.timestampParam,
    policyPort: this.policyPort,
    socket: this
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
    transport = 'websocket';
  } else if (0 == this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function() {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  var transport;
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function(transport){
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function(){
    self.onDrain();
  })
  .on('packet', function(packet){
    self.onPacket(packet);
  })
  .on('error', function(e){
    self.onError(e);
  })
  .on('close', function(){
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 })
    , failed = false
    , self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen(){
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' == msg.type && 'probe' == msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' == self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  //Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose(){
    onerror("transport closed");
  }

  //When the socket is closed while we're probing
  function onclose(){
    onerror("socket closed");
  }

  //When the socket is upgraded while we're probing
  function onupgrade(to){
    if (transport && to.name != transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  //Remove all listeners on the transport and on self
  function cleanup(){
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();

};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.emit('error', err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if  ('closed' == this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' == self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api public
*/

Socket.prototype.ping = function () {
  this.sendPacket('ping');
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function() {
  for (var i = 0; i < this.prevBufferLen; i++) {
    if (this.callbackBuffer[i]) {
      this.callbackBuffer[i]();
    }
  }

  this.writeBuffer.splice(0, this.prevBufferLen);
  this.callbackBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (this.writeBuffer.length == 0) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' != this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, fn) {
  this.sendPacket('message', msg, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, fn) {
  if ('closing' == this.readyState || 'closed' == this.readyState) {
    return;
  }

  var packet = { type: type, data: data };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  this.callbackBuffer.push(fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.readyState = 'closing';

    var self = this;

    function close() {
      self.onClose('forced close');
      debug('socket closing - telling transport to close');
      self.transport.close();
    }

    function cleanupAndClose() {
      self.removeListener('upgrade', cleanupAndClose);
      self.removeListener('upgradeError', cleanupAndClose);
      close();
    }

    function waitForUpgrade() {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      self.once('upgrade', cleanupAndClose);
      self.once('upgradeError', cleanupAndClose);
    }

    if (this.writeBuffer.length) {
      this.once('drain', function() {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // clean buffers in next tick, so developers can still
    // grab the buffers on `close` event
    setTimeout(function() {
      self.writeBuffer = [];
      self.callbackBuffer = [];
      self.prevBufferLen = 0;
    }, 0);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i<j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./transport":13,"./transports":14,"component-emitter":8,"debug":21,"engine.io-parser":24,"indexof":39,"parsejson":31,"parseqs":32,"parseuri":33}],13:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var parser = _dereq_('engine.io-parser');
var Emitter = _dereq_('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * A counter used to prevent collisions in the timestamps used
 * for cache busting.
 */

Transport.timestamps = 0;

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' == this.readyState || '' == this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function(packets){
  if ('open' == this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function(data){
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":8,"engine.io-parser":24}],14:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = _dereq_('xmlhttprequest');
var XHR = _dereq_('./polling-xhr');
var JSONP = _dereq_('./polling-jsonp');
var websocket = _dereq_('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts){
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname != location.hostname || port != opts.port;
    xs = opts.secure != isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling-jsonp":15,"./polling-xhr":16,"./websocket":18,"xmlhttprequest":19}],15:[function(_dereq_,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = _dereq_('./polling');
var inherit = _dereq_('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Callbacks count.
 */

var index = 0;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function(e){
    self.onError('jsonp poll error',e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  insertAt.parentNode.insertBefore(script, insertAt);
  this.script = script;

  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch(e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function(){
      if (self.iframe.readyState == 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":17,"component-inherit":20}],16:[function(_dereq_,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = _dereq_('xmlhttprequest');
var Polling = _dereq_('./polling');
var Emitter = _dereq_('component-emitter');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty(){}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts){
  Polling.call(this, opts);

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname != global.location.hostname ||
      port != opts.port;
    this.xs = opts.secure != isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function(opts){
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;
  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function(data, fn){
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function(err){
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function(){
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function(data){
    self.onData(data);
  });
  req.on('error', function(err){
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts){
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined != opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function(){
  var xhr = this.xhr = new XMLHttpRequest({ agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR });
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    if (this.supportsBinary) {
      // This has to be done after open because Firefox is stupid
      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
      xhr.responseType = 'arraybuffer';
    }

    if ('POST' == this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.hasXDR()) {
      xhr.onload = function(){
        self.onLoad();
      };
      xhr.onerror = function(){
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function(){
        if (4 != xhr.readyState) return;
        if (200 == xhr.status || 1223 == xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function(){
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function() {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function(){
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function(data){
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function(err){
  this.emit('error', err);
  this.cleanup();
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function(){
  if ('undefined' == typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  try {
    this.xhr.abort();
  } catch(e) {}

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function(){
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response;
    } else {
      if (!this.supportsBinary) {
        data = this.xhr.responseText;
      } else {
        data = 'ok';
      }
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function(){
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function(){
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (global.document) {
  Request.requestsCount = 0;
  Request.requests = {};
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":17,"component-emitter":8,"component-inherit":20,"debug":21,"xmlhttprequest":19}],17:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parseqs = _dereq_('parseqs');
var parser = _dereq_('engine.io-parser');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function() {
  var XMLHttpRequest = _dereq_('xmlhttprequest');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function(){
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function(onPause){
  var pending = 0;
  var self = this;

  this.readyState = 'pausing';

  function pause(){
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function(){
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function(){
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function(){
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function(data){
  var self = this;
  debug('polling got data %s', data);
  var callback = function(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' == self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' == packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' != this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' == this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function(){
  var self = this;

  function close(){
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' == this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  var callbackfn = function() {
    self.writable = true;
    self.emit('drain');
  };

  var self = this;
  parser.encodePayload(packets, this.supportsBinary, function(data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' == schema && this.port != 443) ||
     ('http' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

},{"../transport":13,"component-inherit":20,"debug":21,"engine.io-parser":24,"parseqs":32,"xmlhttprequest":19}],18:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parser = _dereq_('engine.io-parser');
var parseqs = _dereq_('parseqs');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:websocket');

/**
 * `ws` exposes a WebSocket-compatible interface in
 * Node, or the `WebSocket` or `MozWebSocket` globals
 * in the browser.
 */

var WebSocket = _dereq_('ws');

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function(){
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var self = this;
  var uri = this.uri();
  var protocols = void(0);
  var opts = { agent: this.agent };

  this.ws = new WebSocket(uri, protocols, opts);

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  this.ws.binaryType = 'arraybuffer';
  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function(){
  var self = this;

  this.ws.onopen = function(){
    self.onOpen();
  };
  this.ws.onclose = function(){
    self.onClose();
  };
  this.ws.onmessage = function(ev){
    self.onData(ev.data);
  };
  this.ws.onerror = function(e){
    self.onError('websocket error', e);
  };
};

/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */

if ('undefined' != typeof navigator
  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  WS.prototype.onData = function(data){
    var self = this;
    setTimeout(function(){
      Transport.prototype.onData.call(self, data);
    }, 0);
  };
}

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  for (var i = 0, l = packets.length; i < l; i++) {
    parser.encodePacket(packets[i], this.supportsBinary, function(data) {
      //Sometimes the websocket has already been closed but the browser didn't
      //have a chance of informing us about it yet, in that case send will
      //throw an error
      try {
        self.ws.send(data);
      } catch (e){
        debug('websocket closed before onclose event');
      }
    });
  }

  function ondrain() {
    self.writable = true;
    self.emit('drain');
  }
  // fake drain
  // defer to next tick to allow Socket to clear writeBuffer
  setTimeout(ondrain, 0);
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function(){
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function(){
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' == schema && this.port != 443)
    || ('ws' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = +new Date;
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function(){
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

},{"../transport":13,"component-inherit":20,"debug":21,"engine.io-parser":24,"parseqs":32,"ws":34}],19:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
var hasCORS = _dereq_('has-cors');

module.exports = function(opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

},{"has-cors":37}],20:[function(_dereq_,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],21:[function(_dereq_,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = _dereq_('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // This hackery is required for IE8,
  // where the `console.log` function doesn't have 'apply'
  return 'object' == typeof console
    && 'function' == typeof console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      localStorage.removeItem('debug');
    } else {
      localStorage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = localStorage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

},{"./debug":22}],22:[function(_dereq_,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = _dereq_('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":23}],23:[function(_dereq_,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 's':
      return n * s;
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],24:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = _dereq_('./keys');
var sliceBuffer = _dereq_('arraybuffer.slice');
var base64encoder = _dereq_('base64-arraybuffer');
var after = _dereq_('after');
var utf8 = _dereq_('utf8');

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = navigator.userAgent.match(/Android/i);

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = _dereq_('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if ('function' == typeof supportsBinary) {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if ('function' == typeof utf8encode) {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
  }

  return callback('' + encoded);

};

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (isAndroid) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  // String data
  if (typeof data == 'string' || data === undefined) {
    if (data.charAt(0) == 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      try {
        data = utf8.decode(data);
      } catch (e) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!global.ArrayBuffer) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  if (supportsBinary) {
    if (Blob && !isAndroid) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, supportsBinary, true, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data != 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data == '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = ''
    , n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (':' != chr) {
      length += chr;
    } else {
      if ('' == length || (length != (n = Number(length)))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType, true);

        if (err.type == packet.type && err.data == packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      }

      // advance cursor
      i += n;
      length = '';
    }
  }

  if (length != '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  var numberTooLong = false;
  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] == 255) break;

      if (msgLength.length > 310) {
        numberTooLong = true;
        break;
      }

      msgLength += tailArray[i];
    }

    if(numberTooLong) return callback(err, 0, 1);

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./keys":25,"after":26,"arraybuffer.slice":27,"base64-arraybuffer":28,"blob":29,"utf8":30}],25:[function(_dereq_,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],26:[function(_dereq_,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],27:[function(_dereq_,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],28:[function(_dereq_,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],29:[function(_dereq_,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var b = new Blob(['hi']);
    return b.size == 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }
  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

module.exports = (function() {
  if (blobSupported) {
    return global.Blob;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],30:[function(_dereq_,module,exports){
(function (global){
/*! http://mths.be/utf8js v2.0.0 by @mathias */
;(function(root) {

  // Detect free variables `exports`
  var freeExports = typeof exports == 'object' && exports;

  // Detect free variable `module`
  var freeModule = typeof module == 'object' && module &&
    module.exports == freeExports && module;

  // Detect free variable `global`, from Node.js or Browserified code,
  // and use it as `root`
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }

  /*--------------------------------------------------------------------------*/

  var stringFromCharCode = String.fromCharCode;

  // Taken from http://mths.be/punycode
  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    var value;
    var extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) { // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }

  // Taken from http://mths.be/punycode
  function ucs2encode(array) {
    var length = array.length;
    var index = -1;
    var value;
    var output = '';
    while (++index < length) {
      value = array[index];
      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }
      output += stringFromCharCode(value);
    }
    return output;
  }

  /*--------------------------------------------------------------------------*/

  function createByte(codePoint, shift) {
    return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
  }

  function encodeCodePoint(codePoint) {
    if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
      return stringFromCharCode(codePoint);
    }
    var symbol = '';
    if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
      symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
    }
    else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
      symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
      symbol += createByte(codePoint, 6);
    }
    else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
      symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
      symbol += createByte(codePoint, 12);
      symbol += createByte(codePoint, 6);
    }
    symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
    return symbol;
  }

  function utf8encode(string) {
    var codePoints = ucs2decode(string);

    // console.log(JSON.stringify(codePoints.map(function(x) {
    //  return 'U+' + x.toString(16).toUpperCase();
    // })));

    var length = codePoints.length;
    var index = -1;
    var codePoint;
    var byteString = '';
    while (++index < length) {
      codePoint = codePoints[index];
      byteString += encodeCodePoint(codePoint);
    }
    return byteString;
  }

  /*--------------------------------------------------------------------------*/

  function readContinuationByte() {
    if (byteIndex >= byteCount) {
      throw Error('Invalid byte index');
    }

    var continuationByte = byteArray[byteIndex] & 0xFF;
    byteIndex++;

    if ((continuationByte & 0xC0) == 0x80) {
      return continuationByte & 0x3F;
    }

    // If we end up here, it’s not a continuation byte
    throw Error('Invalid continuation byte');
  }

  function decodeSymbol() {
    var byte1;
    var byte2;
    var byte3;
    var byte4;
    var codePoint;

    if (byteIndex > byteCount) {
      throw Error('Invalid byte index');
    }

    if (byteIndex == byteCount) {
      return false;
    }

    // Read first byte
    byte1 = byteArray[byteIndex] & 0xFF;
    byteIndex++;

    // 1-byte sequence (no continuation bytes)
    if ((byte1 & 0x80) == 0) {
      return byte1;
    }

    // 2-byte sequence
    if ((byte1 & 0xE0) == 0xC0) {
      var byte2 = readContinuationByte();
      codePoint = ((byte1 & 0x1F) << 6) | byte2;
      if (codePoint >= 0x80) {
        return codePoint;
      } else {
        throw Error('Invalid continuation byte');
      }
    }

    // 3-byte sequence (may include unpaired surrogates)
    if ((byte1 & 0xF0) == 0xE0) {
      byte2 = readContinuationByte();
      byte3 = readContinuationByte();
      codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
      if (codePoint >= 0x0800) {
        return codePoint;
      } else {
        throw Error('Invalid continuation byte');
      }
    }

    // 4-byte sequence
    if ((byte1 & 0xF8) == 0xF0) {
      byte2 = readContinuationByte();
      byte3 = readContinuationByte();
      byte4 = readContinuationByte();
      codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
        (byte3 << 0x06) | byte4;
      if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
        return codePoint;
      }
    }

    throw Error('Invalid UTF-8 detected');
  }

  var byteArray;
  var byteCount;
  var byteIndex;
  function utf8decode(byteString) {
    byteArray = ucs2decode(byteString);
    byteCount = byteArray.length;
    byteIndex = 0;
    var codePoints = [];
    var tmp;
    while ((tmp = decodeSymbol()) !== false) {
      codePoints.push(tmp);
    }
    return ucs2encode(codePoints);
  }

  /*--------------------------------------------------------------------------*/

  var utf8 = {
    'version': '2.0.0',
    'encode': utf8encode,
    'decode': utf8decode
  };

  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:
  if (
    typeof define == 'function' &&
    typeof define.amd == 'object' &&
    define.amd
  ) {
    define(function() {
      return utf8;
    });
  } else if (freeExports && !freeExports.nodeType) {
    if (freeModule) { // in Node.js or RingoJS v0.8.0+
      freeModule.exports = utf8;
    } else { // in Narwhal or RingoJS v0.7.0-
      var object = {};
      var hasOwnProperty = object.hasOwnProperty;
      for (var key in utf8) {
        hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
      }
    }
  } else { // in Rhino or a web browser
    root.utf8 = utf8;
  }

}(this));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],31:[function(_dereq_,module,exports){
(function (global){
/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],32:[function(_dereq_,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],33:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],34:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = (function() { return this; })();

/**
 * WebSocket constructor.
 */

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Module exports.
 */

module.exports = WebSocket ? ws : null;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

},{}],35:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      if (obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (obj.hasOwnProperty(key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"isarray":36}],36:[function(_dereq_,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],37:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = _dereq_('global');

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = 'XMLHttpRequest' in global &&
    'withCredentials' in new global.XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{"global":38}],38:[function(_dereq_,module,exports){

/**
 * Returns `this`. Execute this without a "context" (i.e. without it being
 * attached to an object of the left-hand side), and `this` points to the
 * "global" scope of the current JS execution.
 */

module.exports = (function () { return this; })();

},{}],39:[function(_dereq_,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],40:[function(_dereq_,module,exports){

/**
 * HOP ref.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Return own keys in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.keys = Object.keys || function(obj){
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

/**
 * Return own values in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.values = function(obj){
  var vals = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      vals.push(obj[key]);
    }
  }
  return vals;
};

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

exports.merge = function(a, b){
  for (var key in b) {
    if (has.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/**
 * Return length of `obj`.
 *
 * @param {Object} obj
 * @return {Number}
 * @api public
 */

exports.length = function(obj){
  return exports.keys(obj).length;
};

/**
 * Check if `obj` is empty.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api public
 */

exports.isEmpty = function(obj){
  return 0 == exports.length(obj);
};
},{}],41:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
  , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
  var m = re.exec(str || '')
    , uri = {}
    , i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  return uri;
};

},{}],42:[function(_dereq_,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = _dereq_('isarray');
var isBuf = _dereq_('./is-buffer');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet){
  var buffers = [];
  var packetData = packet.data;

  function _deconstructPacket(data) {
    if (!data) return data;

    if (isBuf(data)) {
      var placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i]);
      }
      return newData;
    } else if ('object' == typeof data && !(data instanceof Date)) {
      var newData = {};
      for (var key in data) {
        newData[key] = _deconstructPacket(data[key]);
      }
      return newData;
    }
    return data;
  }

  var pack = packet;
  pack.data = _deconstructPacket(packetData);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  var curPlaceHolder = 0;

  function _reconstructPacket(data) {
    if (data && data._placeholder) {
      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
      return buf;
    } else if (isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i]);
      }
      return data;
    } else if (data && 'object' == typeof data) {
      for (var key in data) {
        data[key] = _reconstructPacket(data[key]);
      }
      return data;
    }
    return data;
  }

  packet.data = _reconstructPacket(packet.data);
  packet.attachments = undefined; // no longer useful
  return packet;
};

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((global.Blob && obj instanceof Blob) ||
        (global.File && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./is-buffer":44,"isarray":45}],43:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var debug = _dereq_('debug')('socket.io-parser');
var json = _dereq_('json3');
var isArray = _dereq_('isarray');
var Emitter = _dereq_('component-emitter');
var binary = _dereq_('./binary');
var isBuf = _dereq_('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'BINARY_EVENT',
  'ACK',
  'BINARY_ACK',
  'ERROR'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {
  var str = '';
  var nsp = false;

  // first is type
  str += obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    str += obj.attachments;
    str += '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' != obj.nsp) {
    nsp = true;
    str += obj.nsp;
  }

  // immediately followed by the id
  if (null != obj.id) {
    if (nsp) {
      str += ',';
      nsp = false;
    }
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    if (nsp) str += ',';
    str += json.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if ('string' == typeof obj) {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments == 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var p = {};
  var i = 0;

  // look up type
  p.type = Number(str.charAt(0));
  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
    p.attachments = '';
    while (str.charAt(++i) != '-') {
      p.attachments += str.charAt(i);
    }
    p.attachments = Number(p.attachments);
  }

  // look up namespace (if any)
  if ('/' == str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' == c) break;
      p.nsp += c;
      if (i + 1 == str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' != next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i + 1 == str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    try {
      p.data = json.parse(str.substr(i));
    } catch(e){
      return error();
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(data){
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":42,"./is-buffer":44,"component-emitter":8,"debug":9,"isarray":45,"json3":46}],44:[function(_dereq_,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],45:[function(_dereq_,module,exports){
module.exports=_dereq_(36)
},{}],46:[function(_dereq_,module,exports){
/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
;(function (window) {
  // Convenience aliases.
  var getClass = {}.toString, isProperty, forEach, undef;

  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // Detect native implementations.
  var nativeJSON = typeof JSON == "object" && JSON;

  // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
  // available.
  var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

  if (JSON3 && nativeJSON) {
    // Explicitly delegate to the native `stringify` and `parse`
    // implementations in CommonJS environments.
    JSON3.stringify = nativeJSON.stringify;
    JSON3.parse = nativeJSON.parse;
  } else {
    // Export for web browsers, JavaScript engines, and asynchronous module
    // loaders, using the global `JSON` object if available.
    JSON3 = window.JSON = nativeJSON || {};
  }

  // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
  var isExtended = new Date(-3509827334573292);
  try {
    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
    // results for certain dates in Opera >= 10.53.
    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
      // Safari < 2.0.2 stores the internal millisecond time value correctly,
      // but clips the values returned by the date methods to the range of
      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
  } catch (exception) {}

  // Internal: Determines whether the native `JSON.stringify` and `parse`
  // implementations are spec-compliant. Based on work by Ken Snyder.
  function has(name) {
    if (has[name] !== undef) {
      // Return cached feature test result.
      return has[name];
    }

    var isSupported;
    if (name == "bug-string-char-index") {
      // IE <= 7 doesn't support accessing string characters using square
      // bracket notation. IE 8 only supports this for primitives.
      isSupported = "a"[0] != "a";
    } else if (name == "json") {
      // Indicates whether both `JSON.stringify` and `JSON.parse` are
      // supported.
      isSupported = has("json-stringify") && has("json-parse");
    } else {
      var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
      // Test `JSON.stringify`.
      if (name == "json-stringify") {
        var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
        if (stringifySupported) {
          // A test function object with a custom `toJSON` method.
          (value = function () {
            return 1;
          }).toJSON = value;
          try {
            stringifySupported =
              // Firefox 3.1b1 and b2 serialize string, number, and boolean
              // primitives as object literals.
              stringify(0) === "0" &&
              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
              // literals.
              stringify(new Number()) === "0" &&
              stringify(new String()) == '""' &&
              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
              // does not define a canonical JSON representation (this applies to
              // objects with `toJSON` properties as well, *unless* they are nested
              // within an object or array).
              stringify(getClass) === undef &&
              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
              // FF 3.1b3 pass this test.
              stringify(undef) === undef &&
              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
              // respectively, if the value is omitted entirely.
              stringify() === undef &&
              // FF 3.1b1, 2 throw an error if the given value is not a number,
              // string, array, object, Boolean, or `null` literal. This applies to
              // objects with custom `toJSON` methods as well, unless they are nested
              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
              // methods entirely.
              stringify(value) === "1" &&
              stringify([value]) == "[1]" &&
              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
              // `"[null]"`.
              stringify([undef]) == "[null]" &&
              // YUI 3.0.0b1 fails to serialize `null` literals.
              stringify(null) == "null" &&
              // FF 3.1b1, 2 halts serialization if an array contains a function:
              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
              // elides non-JSON values from objects and arrays, unless they
              // define custom `toJSON` methods.
              stringify([undef, getClass, null]) == "[null,null,null]" &&
              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
              // where character escape codes are expected (e.g., `\b` => `\u0008`).
              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
              stringify(null, value) === "1" &&
              stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          } catch (exception) {
            stringifySupported = false;
          }
        }
        isSupported = stringifySupported;
      }
      // Test `JSON.parse`.
      if (name == "json-parse") {
        var parse = JSON3.parse;
        if (typeof parse == "function") {
          try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (parse("0") === 0 && !parse(false)) {
              // Simple parsing test.
              value = parse(serialized);
              var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
              if (parseSupported) {
                try {
                  // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                  parseSupported = !parse('"\t"');
                } catch (exception) {}
                if (parseSupported) {
                  try {
                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                    // certain octal literals.
                    parseSupported = parse("01") !== 1;
                  } catch (exception) {}
                }
                if (parseSupported) {
                  try {
                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                    // points. These environments, along with FF 3.1b1 and 2,
                    // also allow trailing commas in JSON objects and arrays.
                    parseSupported = parse("1.") !== 1;
                  } catch (exception) {}
                }
              }
            }
          } catch (exception) {
            parseSupported = false;
          }
        }
        isSupported = parseSupported;
      }
    }
    return has[name] = !!isSupported;
  }

  if (!has("json")) {
    // Common `[[Class]]` name aliases.
    var functionClass = "[object Function]";
    var dateClass = "[object Date]";
    var numberClass = "[object Number]";
    var stringClass = "[object String]";
    var arrayClass = "[object Array]";
    var booleanClass = "[object Boolean]";

    // Detect incomplete support for accessing string characters by index.
    var charIndexBuggy = has("bug-string-char-index");

    // Define additional utility methods if the `Date` methods are buggy.
    if (!isExtended) {
      var floor = Math.floor;
      // A mapping between the months of the year and the number of days between
      // January 1st and the first of the respective month.
      var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      // Internal: Calculates the number of days between the Unix epoch and the
      // first day of the given month.
      var getDay = function (year, month) {
        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
      };
    }

    // Internal: Determines if a property is a direct property of the given
    // object. Delegates to the native `Object#hasOwnProperty` method.
    if (!(isProperty = {}.hasOwnProperty)) {
      isProperty = function (property) {
        var members = {}, constructor;
        if ((members.__proto__ = null, members.__proto__ = {
          // The *proto* property cannot be set multiple times in recent
          // versions of Firefox and SeaMonkey.
          "toString": 1
        }, members).toString != getClass) {
          // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
          // supports the mutable *proto* property.
          isProperty = function (property) {
            // Capture and break the object's prototype chain (see section 8.6.2
            // of the ES 5.1 spec). The parenthesized expression prevents an
            // unsafe transformation by the Closure Compiler.
            var original = this.__proto__, result = property in (this.__proto__ = null, this);
            // Restore the original prototype chain.
            this.__proto__ = original;
            return result;
          };
        } else {
          // Capture a reference to the top-level `Object` constructor.
          constructor = members.constructor;
          // Use the `constructor` property to simulate `Object#hasOwnProperty` in
          // other environments.
          isProperty = function (property) {
            var parent = (this.constructor || constructor).prototype;
            return property in this && !(property in parent && this[property] === parent[property]);
          };
        }
        members = null;
        return isProperty.call(this, property);
      };
    }

    // Internal: A set of primitive types used by `isHostType`.
    var PrimitiveTypes = {
      'boolean': 1,
      'number': 1,
      'string': 1,
      'undefined': 1
    };

    // Internal: Determines if the given object `property` value is a
    // non-primitive.
    var isHostType = function (object, property) {
      var type = typeof object[property];
      return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
    };

    // Internal: Normalizes the `for...in` iteration algorithm across
    // environments. Each enumerated key is yielded to a `callback` function.
    forEach = function (object, callback) {
      var size = 0, Properties, members, property;

      // Tests for bugs in the current environment's `for...in` algorithm. The
      // `valueOf` property inherits the non-enumerable flag from
      // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
      (Properties = function () {
        this.valueOf = 0;
      }).prototype.valueOf = 0;

      // Iterate over a new instance of the `Properties` class.
      members = new Properties();
      for (property in members) {
        // Ignore all properties inherited from `Object.prototype`.
        if (isProperty.call(members, property)) {
          size++;
        }
      }
      Properties = members = null;

      // Normalize the iteration algorithm.
      if (!size) {
        // A list of non-enumerable properties inherited from `Object.prototype`.
        members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
        // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
        // properties.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, length;
          var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
          for (property in object) {
            // Gecko <= 1.0 enumerates the `prototype` property of functions under
            // certain conditions; IE does not.
            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
              callback(property);
            }
          }
          // Manually invoke the callback for each non-enumerable property.
          for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
        };
      } else if (size == 2) {
        // Safari <= 2.0.4 enumerates shadowed properties twice.
        forEach = function (object, callback) {
          // Create a set of iterated properties.
          var members = {}, isFunction = getClass.call(object) == functionClass, property;
          for (property in object) {
            // Store each property name to prevent double enumeration. The
            // `prototype` property of functions is not enumerated due to cross-
            // environment inconsistencies.
            if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
              callback(property);
            }
          }
        };
      } else {
        // No bugs detected; use the standard `for...in` algorithm.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, isConstructor;
          for (property in object) {
            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
              callback(property);
            }
          }
          // Manually invoke the callback for the `constructor` property due to
          // cross-environment inconsistencies.
          if (isConstructor || isProperty.call(object, (property = "constructor"))) {
            callback(property);
          }
        };
      }
      return forEach(object, callback);
    };

    // Public: Serializes a JavaScript `value` as a JSON string. The optional
    // `filter` argument may specify either a function that alters how object and
    // array members are serialized, or an array of strings and numbers that
    // indicates which properties should be serialized. The optional `width`
    // argument may be either a string or number that specifies the indentation
    // level of the output.
    if (!has("json-stringify")) {
      // Internal: A map of control characters and their escaped equivalents.
      var Escapes = {
        92: "\\\\",
        34: '\\"',
        8: "\\b",
        12: "\\f",
        10: "\\n",
        13: "\\r",
        9: "\\t"
      };

      // Internal: Converts `value` into a zero-padded string such that its
      // length is at least equal to `width`. The `width` must be <= 6.
      var leadingZeroes = "000000";
      var toPaddedString = function (width, value) {
        // The `|| 0` expression is necessary to work around a bug in
        // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
        return (leadingZeroes + (value || 0)).slice(-width);
      };

      // Internal: Double-quotes a string `value`, replacing all ASCII control
      // characters (characters with code unit values between 0 and 31) with
      // their escaped equivalents. This is an implementation of the
      // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
      var unicodePrefix = "\\u00";
      var quote = function (value) {
        var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
        if (isLarge) {
          symbols = value.split("");
        }
        for (; index < length; index++) {
          var charCode = value.charCodeAt(index);
          // If the character is a control character, append its Unicode or
          // shorthand escape sequence; otherwise, append the character as-is.
          switch (charCode) {
            case 8: case 9: case 10: case 12: case 13: case 34: case 92:
              result += Escapes[charCode];
              break;
            default:
              if (charCode < 32) {
                result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                break;
              }
              result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
          }
        }
        return result + '"';
      };

      // Internal: Recursively serializes an object. Implements the
      // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
      var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
        var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
        try {
          // Necessary for host object support.
          value = object[property];
        } catch (exception) {}
        if (typeof value == "object" && value) {
          className = getClass.call(value);
          if (className == dateClass && !isProperty.call(value, "toJSON")) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              if (getDay) {
                // Manually compute the year, month, date, hours, minutes,
                // seconds, and milliseconds if the `getUTC*` methods are
                // buggy. Adapted from @Yaffle's `date-shim` project.
                date = floor(value / 864e5);
                for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                date = 1 + date - getDay(year, month);
                // The `time` value specifies the time within the day (see ES
                // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                // to compute `A modulo B`, as the `%` operator does not
                // correspond to the `modulo` operation for negative numbers.
                time = (value % 864e5 + 864e5) % 864e5;
                // The hours, minutes, seconds, and milliseconds are obtained by
                // decomposing the time within the day. See section 15.9.1.10.
                hours = floor(time / 36e5) % 24;
                minutes = floor(time / 6e4) % 60;
                seconds = floor(time / 1e3) % 60;
                milliseconds = time % 1e3;
              } else {
                year = value.getUTCFullYear();
                month = value.getUTCMonth();
                date = value.getUTCDate();
                hours = value.getUTCHours();
                minutes = value.getUTCMinutes();
                seconds = value.getUTCSeconds();
                milliseconds = value.getUTCMilliseconds();
              }
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                // Months, dates, hours, minutes, and seconds should have two
                // digits; milliseconds should have three.
                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                // Milliseconds are optional in ES 5.0, but required in 5.1.
                "." + toPaddedString(3, milliseconds) + "Z";
            } else {
              value = null;
            }
          } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
            // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
            // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
            // ignores all `toJSON` methods on these objects unless they are
            // defined directly on an instance.
            value = value.toJSON(property);
          }
        }
        if (callback) {
          // If a replacement function was provided, call it to obtain the value
          // for serialization.
          value = callback.call(object, property, value);
        }
        if (value === null) {
          return "null";
        }
        className = getClass.call(value);
        if (className == booleanClass) {
          // Booleans are represented literally.
          return "" + value;
        } else if (className == numberClass) {
          // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
          // `"null"`.
          return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
        } else if (className == stringClass) {
          // Strings are double-quoted and escaped.
          return quote("" + value);
        }
        // Recursively serialize objects and arrays.
        if (typeof value == "object") {
          // Check for cyclic structures. This is a linear search; performance
          // is inversely proportional to the number of unique nested objects.
          for (length = stack.length; length--;) {
            if (stack[length] === value) {
              // Cyclic structures cannot be serialized by `JSON.stringify`.
              throw TypeError();
            }
          }
          // Add the object to the stack of traversed objects.
          stack.push(value);
          results = [];
          // Save the current indentation level and indent one additional level.
          prefix = indentation;
          indentation += whitespace;
          if (className == arrayClass) {
            // Recursively serialize array elements.
            for (index = 0, length = value.length; index < length; index++) {
              element = serialize(index, value, callback, properties, whitespace, indentation, stack);
              results.push(element === undef ? "null" : element);
            }
            result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
          } else {
            // Recursively serialize object members. Members are selected from
            // either a user-specified list of property names, or the object
            // itself.
            forEach(properties || value, function (property) {
              var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
              if (element !== undef) {
                // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                // is not the empty string, let `member` {quote(property) + ":"}
                // be the concatenation of `member` and the `space` character."
                // The "`space` character" refers to the literal space
                // character, not the `space` {width} argument provided to
                // `JSON.stringify`.
                results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
              }
            });
            result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
          }
          // Remove the object from the traversed object stack.
          stack.pop();
          return result;
        }
      };

      // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
      JSON3.stringify = function (source, filter, width) {
        var whitespace, callback, properties, className;
        if (typeof filter == "function" || typeof filter == "object" && filter) {
          if ((className = getClass.call(filter)) == functionClass) {
            callback = filter;
          } else if (className == arrayClass) {
            // Convert the property names array into a makeshift set.
            properties = {};
            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
          }
        }
        if (width) {
          if ((className = getClass.call(width)) == numberClass) {
            // Convert the `width` to an integer and create a string containing
            // `width` number of space characters.
            if ((width -= width % 1) > 0) {
              for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
            }
          } else if (className == stringClass) {
            whitespace = width.length <= 10 ? width : width.slice(0, 10);
          }
        }
        // Opera <= 7.54u2 discards the values associated with empty string keys
        // (`""`) only if they are used directly within an object member list
        // (e.g., `!("" in { "": 1})`).
        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
      };
    }

    // Public: Parses a JSON source string.
    if (!has("json-parse")) {
      var fromCharCode = String.fromCharCode;

      // Internal: A map of escaped control characters and their unescaped
      // equivalents.
      var Unescapes = {
        92: "\\",
        34: '"',
        47: "/",
        98: "\b",
        116: "\t",
        110: "\n",
        102: "\f",
        114: "\r"
      };

      // Internal: Stores the parser state.
      var Index, Source;

      // Internal: Resets the parser state and throws a `SyntaxError`.
      var abort = function() {
        Index = Source = null;
        throw SyntaxError();
      };

      // Internal: Returns the next token, or `"$"` if the parser has reached
      // the end of the source string. A token may be a string, number, `null`
      // literal, or Boolean literal.
      var lex = function () {
        var source = Source, length = source.length, value, begin, position, isSigned, charCode;
        while (Index < length) {
          charCode = source.charCodeAt(Index);
          switch (charCode) {
            case 9: case 10: case 13: case 32:
              // Skip whitespace tokens, including tabs, carriage returns, line
              // feeds, and space characters.
              Index++;
              break;
            case 123: case 125: case 91: case 93: case 58: case 44:
              // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
              // the current position.
              value = charIndexBuggy ? source.charAt(Index) : source[Index];
              Index++;
              return value;
            case 34:
              // `"` delimits a JSON string; advance to the next character and
              // begin parsing the string. String tokens are prefixed with the
              // sentinel `@` character to distinguish them from punctuators and
              // end-of-string tokens.
              for (value = "@", Index++; Index < length;) {
                charCode = source.charCodeAt(Index);
                if (charCode < 32) {
                  // Unescaped ASCII control characters (those with a code unit
                  // less than the space character) are not permitted.
                  abort();
                } else if (charCode == 92) {
                  // A reverse solidus (`\`) marks the beginning of an escaped
                  // control character (including `"`, `\`, and `/`) or Unicode
                  // escape sequence.
                  charCode = source.charCodeAt(++Index);
                  switch (charCode) {
                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                      // Revive escaped control characters.
                      value += Unescapes[charCode];
                      Index++;
                      break;
                    case 117:
                      // `\u` marks the beginning of a Unicode escape sequence.
                      // Advance to the first character and validate the
                      // four-digit code point.
                      begin = ++Index;
                      for (position = Index + 4; Index < position; Index++) {
                        charCode = source.charCodeAt(Index);
                        // A valid sequence comprises four hexdigits (case-
                        // insensitive) that form a single hexadecimal value.
                        if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                          // Invalid Unicode escape sequence.
                          abort();
                        }
                      }
                      // Revive the escaped character.
                      value += fromCharCode("0x" + source.slice(begin, Index));
                      break;
                    default:
                      // Invalid escape sequence.
                      abort();
                  }
                } else {
                  if (charCode == 34) {
                    // An unescaped double-quote character marks the end of the
                    // string.
                    break;
                  }
                  charCode = source.charCodeAt(Index);
                  begin = Index;
                  // Optimize for the common case where a string is valid.
                  while (charCode >= 32 && charCode != 92 && charCode != 34) {
                    charCode = source.charCodeAt(++Index);
                  }
                  // Append the string as-is.
                  value += source.slice(begin, Index);
                }
              }
              if (source.charCodeAt(Index) == 34) {
                // Advance to the next character and return the revived string.
                Index++;
                return value;
              }
              // Unterminated string.
              abort();
            default:
              // Parse numbers and literals.
              begin = Index;
              // Advance past the negative sign, if one is specified.
              if (charCode == 45) {
                isSigned = true;
                charCode = source.charCodeAt(++Index);
              }
              // Parse an integer or floating-point value.
              if (charCode >= 48 && charCode <= 57) {
                // Leading zeroes are interpreted as octal literals.
                if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                  // Illegal octal literal.
                  abort();
                }
                isSigned = false;
                // Parse the integer component.
                for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                // Floats cannot contain a leading decimal point; however, this
                // case is already accounted for by the parser.
                if (source.charCodeAt(Index) == 46) {
                  position = ++Index;
                  // Parse the decimal component.
                  for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal trailing decimal.
                    abort();
                  }
                  Index = position;
                }
                // Parse exponents. The `e` denoting the exponent is
                // case-insensitive.
                charCode = source.charCodeAt(Index);
                if (charCode == 101 || charCode == 69) {
                  charCode = source.charCodeAt(++Index);
                  // Skip past the sign following the exponent, if one is
                  // specified.
                  if (charCode == 43 || charCode == 45) {
                    Index++;
                  }
                  // Parse the exponential component.
                  for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal empty exponent.
                    abort();
                  }
                  Index = position;
                }
                // Coerce the parsed value to a JavaScript number.
                return +source.slice(begin, Index);
              }
              // A negative sign may only precede numbers.
              if (isSigned) {
                abort();
              }
              // `true`, `false`, and `null` literals.
              if (source.slice(Index, Index + 4) == "true") {
                Index += 4;
                return true;
              } else if (source.slice(Index, Index + 5) == "false") {
                Index += 5;
                return false;
              } else if (source.slice(Index, Index + 4) == "null") {
                Index += 4;
                return null;
              }
              // Unrecognized token.
              abort();
          }
        }
        // Return the sentinel `$` character if the parser has reached the end
        // of the source string.
        return "$";
      };

      // Internal: Parses a JSON `value` token.
      var get = function (value) {
        var results, hasMembers;
        if (value == "$") {
          // Unexpected end of input.
          abort();
        }
        if (typeof value == "string") {
          if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
            // Remove the sentinel `@` character.
            return value.slice(1);
          }
          // Parse object and array literals.
          if (value == "[") {
            // Parses a JSON array, returning a new JavaScript array.
            results = [];
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing square bracket marks the end of the array literal.
              if (value == "]") {
                break;
              }
              // If the array literal contains elements, the current token
              // should be a comma separating the previous element from the
              // next.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "]") {
                    // Unexpected trailing `,` in array literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each array element.
                  abort();
                }
              }
              // Elisions and leading commas are not permitted.
              if (value == ",") {
                abort();
              }
              results.push(get(value));
            }
            return results;
          } else if (value == "{") {
            // Parses a JSON object, returning a new JavaScript object.
            results = {};
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing curly brace marks the end of the object literal.
              if (value == "}") {
                break;
              }
              // If the object literal contains members, the current token
              // should be a comma separator.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "}") {
                    // Unexpected trailing `,` in object literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each object member.
                  abort();
                }
              }
              // Leading commas are not permitted, object property names must be
              // double-quoted strings, and a `:` must separate each property
              // name and value.
              if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                abort();
              }
              results[value.slice(1)] = get(lex());
            }
            return results;
          }
          // Unexpected token encountered.
          abort();
        }
        return value;
      };

      // Internal: Updates a traversed object member.
      var update = function(source, property, callback) {
        var element = walk(source, property, callback);
        if (element === undef) {
          delete source[property];
        } else {
          source[property] = element;
        }
      };

      // Internal: Recursively traverses a parsed JSON object, invoking the
      // `callback` function for each value. This is an implementation of the
      // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
      var walk = function (source, property, callback) {
        var value = source[property], length;
        if (typeof value == "object" && value) {
          // `forEach` can't be used to traverse an array in Opera <= 8.54
          // because its `Object#hasOwnProperty` implementation returns `false`
          // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
          if (getClass.call(value) == arrayClass) {
            for (length = value.length; length--;) {
              update(value, length, callback);
            }
          } else {
            forEach(value, function (property) {
              update(value, property, callback);
            });
          }
        }
        return callback.call(source, property, value);
      };

      // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
      JSON3.parse = function (source, callback) {
        var result, value;
        Index = 0;
        Source = "" + source;
        result = get(lex());
        // If a JSON string contains multiple tokens, it is invalid.
        if (lex() != "$") {
          abort();
        }
        // Reset the parser state.
        Index = Source = null;
        return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
      };
    }
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}(this));

},{}],47:[function(_dereq_,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}]},{},[1])
(1)
});
