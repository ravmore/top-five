'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Landing = require('../landing/Landing');

var _Landing2 = _interopRequireDefault(_Landing);

var _PageNotFound = require('../page-not-found/PageNotFound');

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _SpotifyAuth = require('../spotify-auth/SpotifyAuth');

var _SpotifyAuth2 = _interopRequireDefault(_SpotifyAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes(props) {
	return _react2.default.createElement(
		_reactRouterDom.Switch,
		null,
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/spotify/auth', component: _SpotifyAuth2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Landing2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _PageNotFound2.default })
	);
};

exports.default = Routes;