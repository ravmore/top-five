'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = function auth() {
	_axios2.default.get('http://localhost:8080/spotify/auth').then(function (_ref) {
		var data = _ref.data;
		return console.log(data);
	});
};

var Landing = function Landing(props) {
	return _react2.default.createElement(
		'div',
		null,
		'Top Five'
	);
};

exports.default = Landing;