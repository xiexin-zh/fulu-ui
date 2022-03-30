"use strict";

require("core-js/modules/es6.reflect.construct.js");

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

require("core-js/modules/es6.array.index-of.js");

require("core-js/modules/es6.array.map.js");

require("core-js/modules/es6.array.filter.js");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/tag/style/css");

var _tag = _interopRequireDefault(require("antd/lib/tag"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@ant-design/icons");

require("./index.less");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CheckableTag = _tag["default"].CheckableTag;

var TagSelectOption = function TagSelectOption(_ref) {
  var children = _ref.children,
      checked = _ref.checked,
      _onChange = _ref.onChange,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement(CheckableTag, {
    checked: checked,
    key: value,
    onChange: function onChange(state) {
      return _onChange(value, state);
    }
  }, children);
};

TagSelectOption.isTagSelectOption = true;

var TagSelect = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TagSelect, _Component);

  var _super = _createSuper(TagSelect);

  function TagSelect(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TagSelect);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (value) {
      var onChange = _this.props.onChange;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (onChange) {
        onChange(value);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelectAll", function (checked) {
      var checkedTags = [];

      if (checked) {
        checkedTags = _this.getAllTags();
      }

      _this.onChange(checkedTags);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTagChange", function (value, checked) {
      var StateValue = _this.state.value;
      var checkedTags = (0, _toConsumableArray2["default"])(StateValue);
      var index = checkedTags.indexOf(value);

      if (checked && index === -1) {
        checkedTags.push(value);
      } else if (!checked && index > -1) {
        checkedTags.splice(index, 1);
      }

      _this.onChange(checkedTags);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExpand", function () {
      var expand = _this.state.expand;

      _this.setState({
        expand: !expand
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isTagSelectOption", function (node) {
      return node && node.type && (node.type.isTagSelectOption || node.type.displayName === 'TagSelectOption');
    });
    _this.state = {
      expand: props.expand,
      value: props.value || props.defaultValue || []
    };
    return _this;
  }

  (0, _createClass2["default"])(TagSelect, [{
    key: "getAllTags",
    value: function getAllTags() {
      var _this2 = this;

      var children = this.props.children;
      children = _react["default"].Children.toArray(children);
      var checkedTags = children.filter(function (child) {
        return _this2.isTagSelectOption(child);
      }).map(function (child) {
        return child.props.value;
      });
      return checkedTags || [];
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          value = _this$state.value,
          expand = _this$state.expand;
      var _this$props = this.props,
          children = _this$props.children,
          hideCheckAll = _this$props.hideCheckAll,
          className = _this$props.className,
          style = _this$props.style,
          expandable = _this$props.expandable,
          actionsText = _this$props.actionsText;
      var checkedAll = this.getAllTags().length === value.length;

      var _ref2 = actionsText === null ? {} : actionsText,
          _ref2$expandText = _ref2.expandText,
          expandText = _ref2$expandText === void 0 ? '展开' : _ref2$expandText,
          _ref2$collapseText = _ref2.collapseText,
          collapseText = _ref2$collapseText === void 0 ? '收起' : _ref2$collapseText,
          _ref2$selectAllText = _ref2.selectAllText,
          selectAllText = _ref2$selectAllText === void 0 ? '全部' : _ref2$selectAllText;

      var cls = (0, _classnames["default"])('tagSelect', className, {
        hasExpandTag: expandable,
        expanded: expand
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: cls,
        style: style
      }, hideCheckAll ? null : /*#__PURE__*/_react["default"].createElement(CheckableTag, {
        checked: checkedAll,
        key: "tag-select-__all__",
        onChange: this.onSelectAll
      }, selectAllText), value && _react["default"].Children.map(children, function (child) {
        if (_this3.isTagSelectOption(child)) {
          return /*#__PURE__*/_react["default"].cloneElement(child, {
            key: "tag-select-".concat(child.props.value),
            value: child.props.value,
            checked: value.indexOf(child.props.value) > -1,
            onChange: _this3.handleTagChange
          });
        }

        return child;
      }), expandable && /*#__PURE__*/_react["default"].createElement("a", {
        className: 'trigger',
        onClick: this.handleExpand
      }, expand ? collapseText : expandText, expand ? /*#__PURE__*/_react["default"].createElement(_icons.UpOutlined, {
        className: "expand_icon"
      }) : /*#__PURE__*/_react["default"].createElement(_icons.DownOutlined, {
        className: "expand_icon"
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value || []
        };
      }

      return null;
    }
  }]);
  return TagSelect;
}(_react.Component);

(0, _defineProperty2["default"])(TagSelect, "propTypes", {
  actionsText: _propTypes["default"].object,
  hideCheckAll: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(TagSelect, "defaultProps", {
  hideCheckAll: false,
  actionsText: {
    expandText: '展开',
    collapseText: '收起',
    selectAllText: '全部'
  }
});
TagSelect.Option = TagSelectOption;
var _default = TagSelect;
exports["default"] = _default;