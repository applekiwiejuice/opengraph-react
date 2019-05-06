module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){e.exports=require("react")},function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t(0),o=t.n(r);t(2);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){throw new Error('"'+e+'" is read-only')}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(e){function n(){var e,t,r,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return r=this,a=(e=l(n)).call.apply(e,[this].concat(c)),t=!a||"object"!==i(a)&&"function"!=typeof a?p(r):a,u(p(t),"state",{result:null,error:null}),u(p(t),"getResultsToUse",function(){var e=t.state.result,n=e.openGraph,r=e.htmlInferred,o=e.hybridGraph;r=r||{},o=o||{};var i=(n=n||{}).site_name||r.site_name||o.site_name,a=n.title||r.title||o.title,s=n.url||r.url||o.url,l=r.favicon||o.favicon,p=n.description||r.description||o.description,c=o.products||r.products;return{site_name:i,title:a,url:s,favicon:l,image:n.image?n.image.url:r.image||o.image,description:p,video:n.video?n.video.secure_url:o.video||r.video,products:c}}),u(p(t),"renderLargeProduct",function(e,n){var t=e.products.find(function(e){return!!e.name});t.offers[0];return o.a.createElement("div",{className:"wrapperLarge"},feature,o.a.createElement("div",{className:"textWrapperLarge"},o.a.createElement("div",{className:"siteNameLinkWrapper"},o.a.createElement("a",{href:e.url},t.name)),o.a.createElement("div",{className:"titleWrapper"},o.a.createElement("p",null,o.a.createElement("i",null,"★"),t.description)),o.a.createElement("p",null,e.description)))}),u(p(t),"renderLarge",function(e){var n=t.props.spin?"responsiveImage App-logo":"responsiveImage",r=null;return e.products?t.renderLargeProduct(e,n):(r=e.video&&!t.props.dontUseVideo?o.a.createElement("div",{className:"imgWrapperLarge"},o.a.createElement("iframe",{className:"responsiveVideo",src:e.video,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):o.a.createElement("div",{className:"imgWrapperLarge"},o.a.createElement("img",{className:n,src:e.image,alt:"alt"})),o.a.createElement("div",{className:"wrapperLarge"},r,o.a.createElement("div",{className:"textWrapperLarge"},o.a.createElement("div",{className:"siteNameLinkWrapper"},o.a.createElement("a",{href:e.url},e.site_name)),o.a.createElement("div",{className:"titleWrapper"},o.a.createElement("p",null,e.title)),o.a.createElement("p",null,e.description))))}),u(p(t),"renderSmall",function(e){return o.a.createElement("div",{className:"outerWrapperSmall"},o.a.createElement("div",{style:{flex:1}},o.a.createElement("div",{className:"imgWrapperSmall"},o.a.createElement("img",{className:"responsiveImage",src:e.image,alt:"alt"}))),o.a.createElement("div",{className:"textWrapperSmall"},o.a.createElement("div",{className:"siteNameLinkWrapper"},o.a.createElement("a",{href:e.url},e.site_name)),o.a.createElement("div",{className:"titleWrapper"},o.a.createElement("p",null,e.title)),o.a.createElement("p",null,e.description)))}),u(p(t),"passResultsToChildren",function(){var e=o.a.Children.map(t.props.children,function(e){return o.a.cloneElement(e,{ogResults:t.state.result})});return o.a.createElement("div",null,e)}),t}var t,f,d;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}(n,r["Component"]),t=n,(f=[{key:"componentDidMount",value:function(){var e=this;if(this.props.dontMakeCall)this.setState({result:this.props.result});else{var n=this.props,t=n.useProxy,r=n.fullRender,o=n.forceCacheUpdate,i=this.props.acceptLang||"auto",s=this.props.appId,l=encodeURIComponent(this.props.site),p="https://opengraph.io/api/1.1/site/".concat(l,"?accept_lang").concat(i,"&app_id=").concat(s);t&&(a("url"),p+="&use_proxy=true"),o&&(a("url"),p+="&cache_ok=false"),r&&(a("url"),p+="&full_render=true"),fetch(p).then(function(e){return e.json()}).then(function(n){console.log(n),n.error?console.error(n):e.setState({result:n})})}}},{key:"render",value:function(){if(this.state.result||this.state.error){if(this.state.error)return!1;if(this.props.onlyFetch)return this.passResultsToChildren();var e=this.getResultsToUse();return console.log("RESULTS TO USE",e),"large"===(this.props.size||"large")?this.renderLarge(e):(console.log("renderingSmall"),this.renderSmall(e))}return!!this.props.loader&&this.props.loader}}])&&s(t.prototype,f),d&&s(t,d),n}()},function(e,n,t){var r=t(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(5)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.outerWrapperSmall{\n  display: flex;\n  line-height: 1.4;\n  flex-direction: row;\n  height: 160px;\n  min-width: 360px;\n  width: 360px;\n}\n\n.innerWrapperSmall{\n  overflow: hidden;\n  padding-bottom: 100%;\n  height:0;\n  width: 100%;\n}\n\n.imgWrapperSmall{\n  overflow: hidden;\n  flex: 1;\n  width: 100%;\n  display: flex;\n  height: 160px;\n  align-items: center;\n}\n\n.image{\n  width: 100%;\n  height: 100%;\n  background: no-repeat center;\n  background-size: cover;\n  overflow: hidden;\n  padding-bottom: 100%;\n}\n\n.textWrapperSmall{\n  flex:2;\n  width: 100%;\n  overflow: hidden;\n  text-align: left;\n  padding: 10px;\n  height: 140px;\n  font-size: 10px;\n}\n\n.wrapperLarge{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  max-width: 300px;\n  width: 100%;\n  line-height: 1.4;\n  font-weight: 400;\n  font-size: 15px;\n  color: #000;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n\n.imgWrapperLarge{\n  height: 80%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.textWrapperLarge{\n  padding: 16px 20px;\n  line-height: 1.4;\n  color: #000;\n  font-size: 13px;\n}\n\n.textAlignLeft{\n  text-align: left;\n}\n\n.siteNameLinkWrapper{\n  max-height: 2.8em;\n  color: #000;\n  font-weight: 700;\n  margin-bottom: .5em;\n}\n\n\n\n@media (min-width: 360px){\n  .siteNameLinkWrapper{\n    font-size: 14px;\n  }\n  .responsiveVideo{\n    min-height: 202px;\n  }\n}\n\n@media (min-width: 460px){\n  .textWrapperLarge {\n    font-size: 14px;\n  }\n  .textWrapperSmall {\n    font-size: 12px;\n  }\n  .siteNameLinkWrapper{\n    font-size: 15px;\n  }\n  .wrapperLarge{\n    max-width: 400px;\n  }\n  .outerWrapperSmall{\n    min-width: 360px;\n    width: 360px;\n  }\n  .responsiveVideo{\n    min-height: 258px;\n  }\n}\n\n@media (min-width: 600px){\n  .textWrapperLarge {\n    font-size: 15px;\n  }\n  .textWrapperSmall {\n    font-size: 13px;\n  }\n  .siteNameLinkWrapper{\n    font-size: 17px;\n  }\n  .wrapperLarge{\n    max-width: 600px;\n  }\n  .outerWrapperSmall{\n    min-width: 600px;\n    width: 600px;\n  }\n  .responsiveVideo{\n    min-height: 337px;\n  }\n}\n\n\n\n.responsiveImage{\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n\n.responsiveVideo{\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),l=null,p=0,c=[],u=t(6);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),c.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,t);t.insertBefore(n,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=c.indexOf(e);n>=0&&c.splice(n,1)}function v(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),m(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function y(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=p++;t=l||(l=v(n)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return f(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}e&&f(d(e,n),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var b,x=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);