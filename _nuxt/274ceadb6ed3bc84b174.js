/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{14:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},15:function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=o[0],a={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",function(){return p});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,d=!1,l=function(){},c=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,r){d=n,c=r||{};var s=i(e,t);return v(s),function(t){for(var n=[],r=0;r<s.length;r++){var a=s[r];(u=o[a.id]).refs--,n.push(u)}t?v(s=i(e,t)):s=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete o[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],i=o[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(m(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(m(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:s}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,i=document.querySelector("style["+h+'~="'+e.id+'"]');if(i){if(d)return l;i.parentNode.removeChild(i)}if(f){var r=u++;i=a||(a=g()),t=w.bind(null,i,r,!1),n=w.bind(null,i,r,!0)}else i=g(),t=function(e,t){var n=t.css,i=t.media,r=t.sourceMap;i&&e.setAttribute("media",i);c.ssrId&&e.setAttribute(h,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},24:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return a});var i=n(62),r=n.n(i),o={props:{firstSlide:{default:1},startStep:{default:1},lastSlide:{default:null},embedded:{default:!1},inserted:{default:!1},keyboardNavigation:{default:!0},mouseNavigation:{default:!0},onStartExit:{default:function(){return function(){}}},onEndExit:{default:function(){return function(){}}},skip:{default:!1},backBySlide:{default:!1},repeat:{default:!1}},data:function(){return{currentSlideIndex:1,currentSlide:null,step:this.startStep,slideshowTimer:0,slideTimer:0,slides:[],active:!0,childWindow:null,parentWindow:null}},computed:{fullPageStyle:function(){return{fontSize:.04*Math.min(this.fullPageWidth,this.fullPageHeight)+"px"}},embeddedStyle:function(){return{fontSize:.04*Math.min(this.parentWidth,this.parentHeight)+"px"}},computedActive:function(){return this.slides.some(function(e){return e.active})}},mounted:function(){this.isSlideshow=!0;var e=this;this.findSlides(),"prev"===this.$root.direction&&(this.currentSlideIndex=this.slides.length),this.inserted||(this.currentSlide=this.slides[this.currentSlideIndex-1],this.currentSlide.step=this.startStep,this.keyboardNavigation&&window.addEventListener("keydown",this.keydown),this.mouseNavigation&&("ontouchstart"in window?window.addEventListener("touchstart",this.click):(window.addEventListener("click",this.click),window.addEventListener("wheel",this.wheel))),this.embedded&&(this.$el.className+=" embedded-slideshow"),window.opener&&window.opener.location.href===window.location.href&&(this.parentWindow=window.opener,this.postMessage('{"method": "getCurrentSlide"}'),window.addEventListener("message",this._message))),window.addEventListener("resize",this.handleResize),this.preloadedImages&&setTimeout(function(){for(var t in e.preloadedImages)(new Image).src=e.preloadedImages[t]},1e3),this.handleResize(),this.timerUpdater=setInterval(function(){e.slideshowTimer++,e.slideTimer++},1e3),this.afterMounted()},beforeDestroy:function(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("click",this.click),window.removeEventListener("touchstart",this.click),window.removeEventListener("wheel",this.wheel),clearInterval(this.timerUpdater)},methods:{nextStep:function(e){this.slides.forEach(function(e){e.direction="next"}),this.$root.direction="next";var t=this;this.$nextTick(function(){t.step>=t.currentSlide.steps?t.nextSlide():t.step++}),e||this.postMessage('{"method": "nextStep"}')},previousStep:function(e){this.slides.forEach(function(e){e.direction="prev"}),this.$root.direction="prev";var t=this;this.$nextTick(function(){t.step<=1?t.previousSlide():t.step--}),e||this.postMessage('{"method": "previousStep"}')},nextSlide:function(){for(var e=this.currentSlideIndex+1;e<this.slides.length+1&&(this.slides[e-1].skip||this.slides[e-1].$parent.skip);)e++;e<this.slides.length+1?this.currentSlideIndex=e:this.repeat?this.currentSlideIndex=1:this.embedded||this.onEndExit()},previousSlide:function(){for(var e=this.currentSlideIndex-1;e>=1&&(this.slides[e-1].skip||this.slides[e-1].$parent.skip);)e--;e>=1?this.currentSlideIndex=e:this.embedded||this.onStartExit()},handleResize:function(){var e=this;r()(function(){var t=0,n=0;e.embedded?(t=e.$el.parentElement.clientWidth,n=e.$el.parentElement.clientHeight):(t=document.documentElement.clientWidth,n=document.documentElement.clientHeight),e.$el.style.fontSize=.04*Math.min(n,t)+"px"},16)()},click:function(e){if(this.mouseNavigation&&this.currentSlide.mouseNavigation){var t=null!=e.clientX?e.clientX:e.touches[0].clientX;t<.25*document.documentElement.clientWidth?(e.preventDefault(),this.previousStep()):t>.75*document.documentElement.clientWidth&&(e.preventDefault(),this.nextStep())}},wheel:r()(function(e){this.mouseNavigation&&this.currentSlide.mouseNavigation&&(e.preventDefault(),e.wheelDeltaY>0||e.deltaY>0?this.nextStep():(e.wheelDeltaY<0||e.deltaY<0)&&this.previousStep())},1e3),keydown:function(e){this.keyboardNavigation&&(this.currentSlide.keyboardNavigation||e.ctrlKey||e.metaKey)&&("ArrowLeft"===e.key||"PageUp"===e.key?(this.previousStep(),e.preventDefault()):"ArrowRight"===e.key||"PageDown"===e.key?(this.nextStep(),e.preventDefault()):"p"!==e.key||this.parentWindow||(this.togglePresenterMode(),e.preventDefault()))},_message:function(e){var t=this;if(e.origin===window.location.origin)try{var n=JSON.parse(e.data);switch(n.method){case"nextStep":case"previousStep":this[n.method](!0);break;case"getCurrentSlide":this.postMessage('{\n              "method": "setCurrentSlide", \n              "slideIndex": '+this.currentSlideIndex+',\n              "step": '+this.step+"\n              }");break;case"setCurrentSlide":this.currentSlideIndex=n.slideIndex,this.$nextTick(function(){t.step=n.step})}}catch(e){}},afterMounted:function(){},findSlides:function(){var e=this,t=0;this.$children.forEach(function(n){n.isSlide?++t>=e.firstSlide&&(!e.lastSlide||t<=e.lastSlide)&&e.slides.push(n):n.isSlideshow&&(n.active=!1,n.slides.forEach(function(n){t++,n.active=!1,t>=e.firstSlide&&(!e.lastSlide||t<=e.lastSlide)&&e.slides.push(n)}))})},updateSlideshowVisibility:function(e){this.$el.style.visibility=e?"visible":"hidden"},postMessage:function(e){this.childWindow&&this.childWindow.postMessage(e,window.location.origin),this.parentWindow&&this.parentWindow.postMessage(e,window.location.origin)},togglePresenterMode:function(){this.childWindow?(this.childWindow.close(),this.childWindow=null):(this.childWindow=window.open(window.location.href,"eagle-presenter"),window.addEventListener("message",this._message))}},watch:{currentSlide:function(e,t){t&&(t.active=!1,t.$parent!==e.$parent&&t.$parent!==this&&(t.$parent.active=!1)),this.slideTimer=0,this.backBySlide||"next"===e.direction?(this.step=1,e.step=1,e.$parent.step=1):"prev"===e.direction&&(this.step=e.steps,e.step=e.steps,e.$parent.step=e.steps),e.active=!0,e.$parent.active=!0},currentSlideIndex:function(e){this.currentSlide=this.slides[e-1]},step:function(e){this.currentSlide&&(this.currentSlide.step=e,this.currentSlide.$parent.step=e)},active:"updateSlideshowVisibility",computedActive:"updateSlideshowVisibility"}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("eg-transition",{attrs:{enter:this.enterTransition,leave:this.leaveTransition}},[this.active?t("div",{staticClass:"eg-slide"},[t("div",{staticClass:"eg-slide-content"},[this._t("default")],2)]):this._e()])},staticRenderFns:[],name:"slide",props:{skip:{default:!1},enter:{default:null},enterPrev:{default:null},enterNext:{default:null},leave:{default:null},leavePrev:{default:null},leaveNext:{default:null},steps:{default:1},mouseNavigation:{default:!0},keyboardNavigation:{default:!0}},data:function(){return{step:1,active:!1,isSlide:!0,slideTimer:0,direction:"next",transitions:{next:{enter:this.enterNext||this.enter,leave:this.leaveNext||this.leave},prev:{enter:this.enterPrev||this.enter,leave:this.leavePrev||this.leave}}}},computed:{enterTransition:function(){return this.transitions[this.direction].enter},leaveTransition:function(){return this.transitions[this.direction].leave}},methods:{nextStep:function(){this.step===this.steps?this.$parent.nextSlide():this.step++},previousStep:function(){1===this.step?this.$parent.previousSlide():this.step--}},watch:{step:function(e){this.$parent.step=e},active:function(e){var t=this;e?(this.slideTimer=0,this.timerUpdater=setInterval(function(){t.slideTimer++},1e3)):clearInterval(this.timerUpdater)}}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{"enter-active-class":this.enter?"animated "+this.enter:"","leave-active-class":this.leave?"animated "+this.leave:""}},[this._t("default")],2)},staticRenderFns:[],name:"eg-transition",props:{enter:{default:null},leave:{default:null}}}},62:function(e,t,n){(function(t){var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,h=l||c||Function("return this")(),f=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return h.Date.now()};function m(e,t,i){var r,o,s,a,u,d,l=0,c=!1,h=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function m(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function w(e){var n=e-d;return void 0===d||n>=t||n<0||h&&e-l>=s}function S(){var e=g();if(w(e))return k(e);u=setTimeout(S,function(e){var n=t-(e-d);return h?v(n,s-(e-l)):n}(e))}function k(e){return u=void 0,f&&r?m(e):(r=o=void 0,a)}function E(){var e=g(),n=w(e);if(r=arguments,o=this,d=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(S,t),c?m(e):a}(d);if(h)return u=setTimeout(S,t),m(d)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,y(i)&&(c=!!i.leading,s=(h="maxWait"in i)?p(b(i.maxWait)||0,t):s,f="trailing"in i?!!i.trailing:f),E.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=d=o=u=void 0},E.flush=function(){return void 0===u?a:k(g())},E}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==r}(e))return i;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?d(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return y(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),m(e,t,{leading:r,maxWait:t,trailing:o})}}).call(this,n(31))},90:function(e,t,n){"use strict";var i={name:"no-ssr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(e,t){var n=t.parent,i=t.slots,r=t.props,o=i(),s=o.default,a=o.placeholder;return n._isMounted?s:(n.$once("hook:mounted",function(){n.$forceUpdate()}),e(r.placeholderTag,{class:["no-ssr-placeholder"]},r.placeholder||a))}};e.exports=i},91:function(e,t,n){e.exports=function(){"use strict";function e(e){e=e||{};var i=arguments.length,r=0;if(1===i)return e;for(;++r<i;){var o=arguments[r];c(e)&&(e=o),n(o)&&t(e,o)}return e}function t(t,r){for(var o in h(t,r),r)if("__proto__"!==o&&i(r,o)){var s=r[o];n(s)?("undefined"===p(t[o])&&"function"===p(s)&&(t[o]=s),t[o]=e(t[o]||{},s)):t[o]=s}return t}function n(e){return"object"===p(e)||"function"===p(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function r(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function o(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),i=[],r=e.parentNode,o=r.offsetWidth*t,s=void 0,a=void 0,u=void 0;(n=n.trim().split(",")).map(function(e){e=e.trim(),-1===(s=e.lastIndexOf(" "))?(a=e,u=999998):(a=e.substr(0,s),u=parseInt(e.substr(s+1,e.length-s-2),10)),i.push([u,a])}),i.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var d="",l=void 0,c=i.length,h=0;h<c;h++)if((l=i[h])[0]>=o){d=l[1];break}return d}}function s(e,t){for(var n=void 0,i=0,r=e.length;i<r;i++)if(t(e[i])){n=e[i];break}return n}function a(){}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":u(e))},h=function(e,t){if(null==e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,i=Object(e),r=arguments.length,o=0;++o<r;)for(var s=Object(arguments[o]),a=Object.getOwnPropertySymbols(s),u=0;u<a.length;u++){var d=a[u];n.call(s,d)&&(i[d]=s[d])}return i},f=Object.prototype.toString,p=function(e){var t=void 0===e?"undefined":u(e);return"undefined"===t?"undefined":null===e?"null":!0===e||!1===e||e instanceof Boolean?"boolean":"string"===t||e instanceof String?"string":"number"===t||e instanceof Number?"number":"function"===t||e instanceof Function?void 0!==e.constructor.name&&"Generator"===e.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":"[object RegExp]"===(t=f.call(e))?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":"[object Promise]"===t?"promise":function(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Map Iterator]"===t?"mapiterator":"[object Set Iterator]"===t?"setiterator":"[object String Iterator]"===t?"stringiterator":"[object Array Iterator]"===t?"arrayiterator":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object"},v=e,g="undefined"!=typeof window,m=g&&"IntersectionObserver"in window,y={event:"event",observer:"observer"},b=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(g)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return g&&window.devicePixelRatio||e},S=function(){if(g){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),k={on:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];S?e.addEventListener(t,n,{capture:i,passive:!0}):e.addEventListener(t,n,i)},off:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,i)}},E=function(e,t,n){var i=new Image;i.src=e.src,i.onload=function(){t({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src})},i.onerror=function(e){n(e)}},L=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},x=function(e){return L(e,"overflow")+L(e,"overflow-y")+L(e,"overflow-x")},T={},_=function(){function e(t){var n=t.el,i=t.src,r=t.error,o=t.loading,s=t.bindType,a=t.$parent,u=t.options,l=t.elRenderer;d(this,e),this.el=n,this.src=i,this.error=r,this.loading=o,this.bindType=s,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=a,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return l(e,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,i=e.error,r=this.src;this.src=t,this.loading=n,this.error=i,this.filter(),r!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;(function(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t})(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;E({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||T[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),E({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),T[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),$="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",A=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],j={rootMargin:"0px",threshold:0},I=function(e){return function(){function t(e){var n=e.preLoad,i=e.error,r=e.throttleWait,o=e.preLoadTop,s=e.dispatchEvent,a=e.loading,u=e.attempt,l=e.silent,c=void 0===l||l,h=e.scale,f=e.listenEvents,p=(e.hasbind,e.filter),v=e.adapter,m=e.observer,b=e.observerOptions;d(this,t),this.version="1.2.6",this.mode=y.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:c,dispatchEvent:!!s,throttleWait:r||200,preLoad:n||1.3,preLoadTop:o||0,error:i||$,loading:a||$,attempt:u||3,scale:h||w(h),ListenEvents:f||A,hasbind:!1,supportWebp:function(){if(!g)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}(),filter:p||{},adapter:v||{},observer:!!m,observerOptions:b||j},this._initEvent(),this.lazyLoadHandler=function(e,t){var n=null,i=0;return function(){if(!n){var r=Date.now()-i,o=this,s=arguments,a=function(){i=Date.now(),n=!1,e.apply(o,s)};r>=t?a():n=setTimeout(a,t)}}}(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?y.observer:y.event)}return l(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),g&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,i){var r=this;if(function(e,t){for(var n=!1,i=0,r=e.length;i<r;i++)if(t(e[i])){n=!0;break}return n}(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var s=this._valueFormatter(n.value),a=s.src,u=s.loading,d=s.error;e.nextTick(function(){a=o(t,r.options.scale)||a,r._observer&&r._observer.observe(t);var s=Object.keys(n.modifiers)[0],l=void 0;s&&(l=(l=i.context.$refs[s])?l.$el||l:document.getElementById(s)),l||(l=function(e){if(g){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(x(t)))return t;t=t.parentNode}return window}}(t));var c=new _({bindType:n.arg,$parent:l,el:t,loading:u,error:d,src:a,elRenderer:r._elRenderer.bind(r),options:r.options});r.ListenerQueue.push(c),g&&(r._addListenerTarget(window),r._addListenerTarget(l)),r.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var i=this,r=this._valueFormatter(n.value),a=r.src,u=r.loading,d=r.error;a=o(t,this.options.scale)||a;var l=s(this.ListenerQueue,function(e){return e.el===t});l&&l.update({src:a,loading:u,error:d}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=s(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),r(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(r(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;m||e!==y.observer||(e=y.event),this.mode=e,e===y.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=s(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===y.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,i){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(i,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(i){return k[t?"on":"off"](e,i,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t]||(e.Event.listeners[t]=[]),e.Event.listeners[t].push(n)},this.$once=function(t,n){var i=e;e.$on(t,function e(){i.$off(t,e),n.apply(i,arguments)})},this.$off=function(t,n){if(n)r(e.Event.listeners[t],n);else{if(!e.Event.listeners[t])return;e.Event.listeners[t].length=0}},this.$emit=function(t,n,i){e.Event.listeners[t]&&e.Event.listeners[t].forEach(function(e){return e(n,i)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=[];this.ListenerQueue.forEach(function(e,n){if(!e.state.error&&e.state.loaded)return t.push(e);e.checkInView()&&e.load()}),t.forEach(function(t){return r(e.ListenerQueue,t)})}},{key:"_initIntersectionObserver",value:function(){var e=this;m&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var i=e.el,r=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(r?i.style[r]='url("'+o+'")':i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var s=new b(t,{detail:e});i.dispatchEvent(s)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,i=this.options.error;return function(e){return null!==e&&"object"===(void 0===e?"undefined":u(e))}(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,i=e.error||this.options.error),{src:t,loading:n,error:i}}}]),t}()},z=function(){function e(t){var n=t.lazy;d(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return l(e,[{key:"bind",value:function(e,t,n){var i=new C({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(i)}},{key:"update",value:function(e,t,n){var i=s(this._queue,function(t){return t.el===e});i&&i.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var i=s(this._queue,function(t){return t.el===e});i&&(i.clear(),r(this._queue,i))}}]),e}(),O={selector:"img"},C=function(){function e(t){var n=t.el,i=t.binding,r=t.vnode,o=t.lazy;d(this,e),this.el=null,this.vnode=r,this.binding=i,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:i})}return l(e,[{key:"update",value:function(e){var t=this,n=e.el,i=e.binding;this.el=n,this.options=v({},O,i.value),this.getImgs().forEach(function(e){t.lazy.add(e,v({},t.binding,{value:{src:"dataset"in e?e.dataset.src:e.getAttribute("data-src"),error:"dataset"in e?e.dataset.error:e.getAttribute("data-error"),loading:"dataset"in e?e.dataset.loading:e.getAttribute("data-loading")}}),t.vnode)})}},{key:"getImgs",value:function(){return function(e){for(var t=e.length,n=[],i=0;i<t;i++)n.push(e[i]);return n}(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=I(e),i=new n(t),r=new z({lazy:i}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=i,t.lazyComponent&&e.component("lazy-component",function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),g&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}}(i)),t.lazyImage&&e.component("lazy-image",function(e){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(e){return e(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:e.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),e.addLazyBox(this),e.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{init:function(){var t=e._valueFormatter(this.src),n=t.src,i=t.loading,r=t.error;this.state.loaded=!1,this.options.src=n,this.options.error=r,this.options.loading=i,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),g&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(this.state.attempt>this.options.attempt-1&&this.state.error)return e.options.silent||console.log("VueLazyload log: "+this.options.src+" tried too more than "+this.options.attempt+" times"),void n();var i=this.options.src;E({src:i},function(e){var n=e.src;t.renderSrc=n,t.state.loaded=!0},function(e){t.state.attempt++,t.renderSrc=t.options.error,t.state.error=!0})}}}}(i)),o?(e.directive("lazy",{bind:i.add.bind(i),update:i.update.bind(i),componentUpdated:i.lazyLoadHandler.bind(i),unbind:i.remove.bind(i)}),e.directive("lazy-container",{bind:r.bind.bind(r),update:r.update.bind(r),unbind:r.unbind.bind(r)})):(e.directive("lazy",{bind:i.lazyLoadHandler.bind(i),update:function(e,t){v(this.vm.$refs,this.vm.$els),i.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){r.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.unbind(this.el)}}))}}}()}}]);