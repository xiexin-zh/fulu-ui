"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

require("antd/lib/config-provider/style/css");

var _configProvider = _interopRequireDefault(require("antd/lib/config-provider"));

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

require("core-js/modules/es6.weak-map.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

require("core-js/modules/es6.object.define-property.js");

require("core-js/modules/es6.object.get-own-property-descriptor.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("dva/router");

var _dynamic = _interopRequireDefault(require("dva/dynamic"));

require("moment/locale/zh-cn");

var _zh_CN = _interopRequireDefault(require("antd/lib/locale/zh_CN"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || (0, _typeof2["default"])(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ConnectedRouter = _router.routerRedux.ConnectedRouter;

var RouterWrapper = function RouterWrapper(_ref) {
  var history = _ref.history,
      app = _ref.app;
  var Home = (0, _dynamic["default"])({
    app: app,
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/Home'));
      });
    }
  });
  return /*#__PURE__*/_react["default"].createElement(ConnectedRouter, {
    history: history
  }, /*#__PURE__*/_react["default"].createElement(_configProvider["default"], {
    locale: _zh_CN["default"]
  }, /*#__PURE__*/_react["default"].createElement(_router.Switch, null, /*#__PURE__*/_react["default"].createElement(_router.Route, {
    path: "/",
    exact: true,
    component: Home
  }))));
};

RouterWrapper.propTypes = {
  history: _propTypes["default"].object,
  app: _propTypes["default"].object
};
RouterWrapper.defaultProps = {
  history: {},
  app: {}
};
var _default = RouterWrapper;
exports["default"] = _default;