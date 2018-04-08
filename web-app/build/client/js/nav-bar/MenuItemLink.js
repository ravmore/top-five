'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnchorMenuItem = function AnchorMenuItem(props) {
  return props.dropdown ? _react2.default.createElement(
    'div',
    { className: 'dropdown show col d-flex justify-content-center' },
    _react2.default.createElement(
      'a',
      { className: 'dropdown-toggle menu-item', role: 'button', id: 'dropdownMenua', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
      props.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenua' },
      props.items.map(function (item) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'dropdown-item', to: item.to },
          item.title
        );
      })
    )
  ) : _react2.default.createElement(
    _reactRouterDom.Link,
    { className: 'menu-item', to: props.to },
    props.title
  );
};

exports.default = AnchorMenuItem;