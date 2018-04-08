'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNotFound = function PageNotFound(props) {
	return _react2.default.createElement(
		'div',
		null,
		'404 page not found ',
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/' },
			'return home'
		)
	);
};

exports.default = PageNotFound;