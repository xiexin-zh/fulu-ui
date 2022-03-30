"use strict";

require("core-js/modules/es6.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = index;

var _TagSelect = _interopRequireDefault(require("@/components/TagSelect"));

var _react = _interopRequireDefault(require("react"));

function index() {
  function handleFormSubmit() {}

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '24px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_TagSelect["default"], {
    onChange: handleFormSubmit,
    expandable: true
  }, /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat1"
  }, "\u7C7B\u76EE\u4E00"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat2"
  }, "\u7C7B\u76EE\u4E8C"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat3"
  }, "\u7C7B\u76EE\u4E09"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat4"
  }, "\u7C7B\u76EE\u56DB"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat5"
  }, "\u7C7B\u76EE\u4E94"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat6"
  }, "\u7C7B\u76EE\u516D"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat7"
  }, "\u7C7B\u76EE\u4E03"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat8"
  }, "\u7C7B\u76EE\u516B"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat9"
  }, "\u7C7B\u76EE\u4E5D"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat10"
  }, "\u7C7B\u76EE\u5341"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat11"
  }, "\u7C7B\u76EE\u5341\u4E00"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat12"
  }, "\u7C7B\u76EE\u5341\u4E8C"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat11"
  }, "\u7C7B\u76EE\u4E00"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat21"
  }, "\u7C7B\u76EE\u4E8C"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat31"
  }, "\u7C7B\u76EE\u4E09"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat41"
  }, "\u7C7B\u76EE\u56DB"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat51"
  }, "\u7C7B\u76EE\u4E94"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat61"
  }, "\u7C7B\u76EE\u516D"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat71"
  }, "\u7C7B\u76EE\u4E03"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat81"
  }, "\u7C7B\u76EE\u516B"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat91"
  }, "\u7C7B\u76EE\u4E5D"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat101"
  }, "\u7C7B\u76EE\u5341"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat111"
  }, "\u7C7B\u76EE\u5341\u4E00"), /*#__PURE__*/_react["default"].createElement(_TagSelect["default"].Option, {
    value: "cat121"
  }, "\u7C7B\u76EE\u5341\u4E8C")));
}