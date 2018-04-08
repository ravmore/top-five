'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _AppRoutes = require('./AppRoutes');

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter(props) {
	return _react2.default.createElement(
		_reactRouterDom.BrowserRouter,
		{ basename: 'r' },
		_react2.default.createElement(_AppRoutes2.default, null)
	);
};

exports.default = AppRouter;