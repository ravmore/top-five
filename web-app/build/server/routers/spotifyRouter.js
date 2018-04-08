'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _secrets = require('../secrets');

var _secrets2 = _interopRequireDefault(_secrets);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientId = _secrets2.default.spotify.clientId;
var clientSecret = _secrets2.default.spotify.clientSecret;
var scope = 'playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative user-read-recently-played';

//:::::::::::::::::::::::::::::::::://
//      Routers & Base Paths        //
//:::::::::::::::::::::::::::::::::://

var rootRouter = _express2.default.Router();
var rootPath = '/spotify';
var authRouter = _express2.default.Router();
var authPath = rootPath + '/auth';
var apiRouter = _express2.default.Router();
var apiPath = rootPath + '/api';

//::::::::::::::::::::::::::::::::::://
//            Root Router            //
//::::::::::::::::::::::::::::::::::://

// '/spotify'
rootRouter.all([rootPath, rootPath + '/'], function (req, res) {
  return res.send('Spotify Route');
});
// '/spotify/auth'
rootRouter.all([authPath, authPath + '/*'], authRouter);
// '/spotify/api'
rootRouter.all([apiPath, apiPath + '/*'], apiRouter);

//:::::::::::::::::::::::::::::::::://
//            Auth Router           //
//:::::::::::::::::::::::::::::::::://

//  route returns url to spotify authorization check
authRouter.get(authPath, function (req, res) {
  var redirectUri = _config2.default.host + '/r';
  var url = 'https://accounts.spotify.com/authorize/?client_id=' + clientId + '&response_type=code&redirect_uri=' + redirectUri + '&scope=' + scope;
  res.send(url);
});

//  route used to exchange code for token
authRouter.get(authPath + '/token', function (req, res) {
  if (req.query.error) {
    res.send('code error');
    return;
  }

  var code = req.query.code;
  var state = req.query.state;
  var redirectUri = _config2.default.host + '/r';
  var authHeader = 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64');
  (0, _axios2.default)({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri
    },
    headers: {
      Authorization: authHeader
    },
    json: true
  }).then(function (_ref) {
    var data = _ref.data;

    console.log('DATA', data);
    res.send(data);
  }).catch(function (e) {
    res.send('token error');
  });
});

//:::::::::::::::::::::::::::::::::://
//           Api Router             //
//:::::::::::::::::::::::::::::::::://

apiRouter.get(apiPath, function (req, res) {
  res.send('Api Route');
});

module.exports = rootRouter;