(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}},"5Yp1":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),u=n("8Kt/"),c=n.n(u),s=a.a.createElement,l=function(t){var e=t.path,n=t.currentPath,r=t.label;return s(i.a,{href:e},s("a",{className:n===e?"active-link mh8":"link mh8"},r))};function f(t){var e=t.children,n=t.title,r=void 0===n?"Covid-19 in Ontario":n,a=t.currentPath,o=void 0===a?"/":a;return s("div",null,s(c.a,null,s("title",null,r),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s("script",{"data-name":"BMC-Widget",src:"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js","data-id":"russellpollari","data-description":"Support me on Buy me a coffee!","data-message":"Thank you for visiting! Consider buying me a coffee :)","data-color":"#FF813F","data-position":"right","data-x_margin":"18","data-y_margin":"18"}),s("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-163333616-1"}),s("script",null,"\n\t\t\t\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\t\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\t\t\t\tgtag('js', new Date());\n\t\t\t\t\t\tgtag('config', 'UA-163333616-1');\n\t\t\t\t\t")),s("header",null,s("nav",null,s(l,{path:"/",currentPath:o,label:"Ontario"}),s(l,{path:"/phu",currentPath:o,label:"PHUs"}),s(l,{path:"/logs",currentPath:o,label:"Logs"}),s(l,{path:"/about",currentPath:o,label:"About"}))),e)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=s,e.default=void 0;var r=c(n("q1tI")),a=c(n("Xuae")),o=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,a.default)();function h(t){var e=t.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var v=h;e.default=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(u){i(s,u);var c=l(s);function s(t){var o;return r(this,s),o=c.call(this,t),p&&(e.add(a(o)),n(a(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=s(n("nOHt")),m=n("elyg");function y(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var g=new Map,w=window.IntersectionObserver,b={};function k(){return f||(w?f=new w((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var C=function(t){o(n,t);var e=c(n);function n(t){var a;return r(this,n),(a=e.call(this,t)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(t){var e=null,n=null,r=null;return function(a,o){if(r&&a===e&&o===n)return r;var i=t(a,o);return e=a,n=o,r=i,i}}((function(t,e){return{href:(0,m.addBasePath)(y(t)),as:e?(0,m.addBasePath)(y(e)):e}})),a.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,u=o.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),u=u?(0,d.resolve)(c,u):i,t.preventDefault();var s=a.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[a.props.replace?"replace":"push"](i,u,{shallow:a.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==t.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,a=(0,d.resolve)(t,n);return[a,r?(0,d.resolve)(t,r):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var o=p.Children.only(e),i={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),n}(p.Component);e.default=C},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a}}]);