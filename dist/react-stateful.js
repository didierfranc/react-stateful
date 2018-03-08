"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),shallowEqual=_interopDefault(require("fbjs/lib/shallowEqual"));function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var err=function(){return console.error("Provider is not initialized yet")},Prevent=function(e){function t(){var e,r,n;_classCallCheck(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return _possibleConstructorReturn(n,(r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(_assertThisInitialized(n),"shouldComponentUpdate",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.state;return e.select.some(function(e){return!shallowEqual(n.props.state[e],t[e])})}}),r))}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.actions,r=e.select,n=e.state;return(0,e.children)({state:r.reduce(function(e,t){return _extends({},e,_defineProperty({},t,n[t]))},{}),actions:t})}}]),t}(),initStore=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o,a,i=[],c=React.createContext(),u=function(e,t){i.forEach(function(r){return r(e,t)}),o.setState(t,function(){return a.forEach(function(t){return t(e)})})},s=Object.keys(e.actions).reduce(function(t,r){return _extends({},t,_defineProperty({},r,function(){if(o){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var c=(t=e.actions)[r].apply(t,[{state:o.state,setState:u.bind(null,r)}].concat(a));c.then?c.then(function(e){return u(r,e)}):u(r,c)}else err()}))},{}),l=function(e){var t=e.children,r=e.select;return React__default.createElement(c.Consumer,null,function(e){var n=e.state,o=e.actions;return React__default.createElement(Prevent,{select:r,state:n,actions:o},t)})};return{Provider:function(t){function n(){var t;return _classCallCheck(this,n),t=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),o=_assertThisInitialized(t),t.state=e.initialState,a=r.map(function(t){return t(e,o)}),t}return _inherits(n,React.Component),_createClass(n,[{key:"render",value:function(){return React__default.createElement(c.Provider,{value:{state:this.state,actions:s}},this.props.children)}}]),n}(),Consumer:l,actions:s,getState:function(){return o?o.state:err()},connect:function(e){return function(t){return function(r){return React__default.createElement(l,{select:e},function(e){var n=e.state;return React__default.createElement(t,_extends({},r,{state:n,actions:s}))})}}},subscribe:function(e){i=_toConsumableArray(i).concat([e])}}};exports.initStore=initStore;
//# sourceMappingURL=react-stateful.js.map
