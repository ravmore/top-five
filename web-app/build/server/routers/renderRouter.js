'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _AppRoutes = require('../../client/js/app-router/AppRoutes');

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

var _getHtml = require('../getHtml');

var _getHtml2 = _interopRequireDefault(_getHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.all('*', function (req, res) {
  var context = {};

  var app = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { basename: '/r', context: context, location: req.url },
    _react2.default.createElement(_AppRoutes2.default, null)
  ));

  res.status(200).send((0, _getHtml2.default)(app, 'Top Five'));
});

module.exports = router;