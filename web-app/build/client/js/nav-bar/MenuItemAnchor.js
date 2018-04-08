"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItemAnchor = function MenuItemAnchor(props) {
  return !!props.dropdown ? _react2.default.createElement(
    "div",
    { className: "dropdown show col d-flex justify-content-center" },
    _react2.default.createElement(
      "a",
      { className: "dropdown-toggle menu-item", id: "dropdownMenu" },
      props.title
    ),
    _react2.default.createElement(
      "div",
      { className: "dropdown-menu" },
      props.items.map(function (item) {
        return _react2.default.createElement(
          "a",
          { className: "dropdown-item", href: item.to },
          item.title
        );
      })
    )
  ) : _react2.default.createElement(
    "a",
    { className: "menu-item", href: props.to },
    props.title
  );
};

exports.default = MenuItemAnchor;