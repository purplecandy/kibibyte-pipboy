!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/kibibyte-pipboy/",t(t.s="zkOF")}({"2Tcf":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise((function(n,r){var o=new XMLHttpRequest,i=[],u=[],c={};for(var f in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){i.push(t=t.toLowerCase()),u.push([t,n]),c[t]=c[t]?c[t]+","+n:n})),n(function e(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:e,headers:{keys:function(){return i},entries:function(){return u},get:function(e){return c[e.toLowerCase()]},has:function(e){return e.toLowerCase()in c}}}}())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(f,t.headers[f]);o.send(t.body||null)}))}},SFhx:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},Siaw:function(e,t,n){"use strict";function r(e,t){this.name="AggregateError",this.errors=e,this.message=t||""}function o(e){return Boolean(e&&void 0!==e.length)}function i(){}function u(e){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function c(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,u._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}f(t.promise,r)}else(1===e._state?f:s)(t.promise,e._value)}))):e._deferreds.push(t)}function f(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof u)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void p((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,a(e)}catch(t){s(e,t)}var r,o}function s(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&u._immediateFn((function(){e._handled||u._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1;try{e((function(e){n||(n=!0,f(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return;n=!0,s(t,e)}}n.r(t);var d=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},h=function(e){return new this((function(t,n){function r(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,(function(t){r(e,t)}),(function(n){o[e]={status:"rejected",reason:n},0==--i&&t(o)}))}o[e]={status:"fulfilled",value:n},0==--i&&t(o)}if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,u=0;u<o.length;u++)r(u,o[u])}))};r.prototype=Error.prototype;var y=function(e){var t=this;return new t((function(n,o){if(!e||void 0===e.length)return o(new TypeError("Promise.any accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return o();for(var u=[],c=0;c<i.length;c++)try{t.resolve(i[c]).then(n).catch((function(e){u.push(e),u.length===i.length&&o(new r(u,"All promises were rejected"))}))}catch(e){o(e)}}))},v=setTimeout;u.prototype.catch=function(e){return this.then(null,e)},u.prototype.then=function(e,t){var n=new this.constructor(i);return c(this,new l(e,t,n)),n},u.prototype.finally=d,u.all=function(e){return new u((function(t,n){function r(e,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var c=o.then;if("function"==typeof c)return void c.call(o,(function(t){r(e,t)}),n)}i[e]=o,0==--u&&t(i)}catch(e){n(e)}}if(!o(e))return n(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var u=i.length,c=0;c<i.length;c++)r(c,i[c])}))},u.any=y,u.allSettled=h,u.resolve=function(e){return e&&"object"==typeof e&&e.constructor===u?e:new u((function(t){t(e)}))},u.reject=function(e){return new u((function(t,n){n(e)}))},u.race=function(e){return new u((function(t,n){if(!o(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,i=e.length;r<i;r++)u.resolve(e[r]).then(t,n)}))},u._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){v(e,0)},u._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};t.default=u},j7Fx:function(e,t,n){e.exports=self.fetch||(self.fetch=n("2Tcf").default||n("2Tcf"))},zkOF:function(e,t,n){(function(e){e.Promise||(e.Promise=n("Siaw").default),e.fetch||(e.fetch=n("j7Fx"))}).call(this,n("SFhx"))}});
//# sourceMappingURL=polyfills.a3fdd.js.map