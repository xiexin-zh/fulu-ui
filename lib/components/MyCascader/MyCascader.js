"use strict";

require("core-js/modules/es6.weak-map.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

require("core-js/modules/es6.object.define-property.js");

require("core-js/modules/es6.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.some.js");

require("core-js/modules/es6.array.index-of.js");

require("antd/lib/cascader/style/css");

var _cascader = _interopRequireDefault(require("antd/lib/cascader"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["optionLists"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LazyOptions = function LazyOptions(_ref) {
  var optionLists = _ref.optionLists,
      arg = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(optionLists),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var onChange = function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  };

  var loadData = function loadData(selectedOptions) {
    console.log(selectedOptions);
    var targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true; // load options lazily
    // setTimeout(() => {
    //    targetOption.loading = false
    //    targetOption.children = [
    //       {
    //          label: `${targetOption.label} Dynamic 1`,
    //          value: 'dynamic1',
    //          loading: false,
    //          isLeaf: false
    //       },
    //       {
    //          label: `${targetOption.label} Dynamic 2`,
    //          value: 'dynamic2',
    //          loading: false,
    //          isLeaf: false
    //       }
    //    ]
    //    setOptions([...options])
    // }, 1000)
  };

  function filter(inputValue, path) {
    return path.some(function (option) {
      return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_cascader["default"], (0, _extends2["default"])({
    showSearch: {
      filter: filter
    },
    options: options,
    loadData: loadData,
    onChange: onChange,
    changeOnSelect: true
  }, arg));
};

var _default = LazyOptions;
exports["default"] = _default;