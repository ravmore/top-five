import express from 'express';
import axios from 'axios';

import secrets from '../secrets';
import config from '../config';

const clientId = secrets.spotify.clientId;
const clientSecret = secrets.spotify.clientSecret;

//:::::::::::::::::::::::::::::::::://
//      Routers & Base Paths        //
//:::::::::::::::::::::::::::::::::://

const rootRouter = express.Router();
const rootPath = '/spotify';
const authRouter = express.Router();
const authPath = `${rootPath}/auth`;
const apiRouter = express.Router();
const apiPath = `${rootPath}/api`;

//::::::::::::::::::::::::::::::::::://
//            Root Router            //
//::::::::::::::::::::::::::::::::::://

// '/spotify'
rootRouter.all([rootPath, `${rootPath}/`], (req, res) => res.send('Spotify Route'));
// '/spotify/auth'
rootRouter.all([authPath, `${authPath}/*`], authRouter);
// '/spotify/api'
rootRouter.all([apiPath, `${apiPath}/*`], apiRouter);

//:::::::::::::::::::::::::::::::::://
//            Auth Router           //
//:::::::::::::::::::::::::::::::::://

// '/spotify/auth'
//  route returns url to spotify authorization check 
authRouter.post(authPath, (req, res) => {
  if (!req.body.redirect) {
    res.send({ error: '"redirect" body property required' });
  }
  const spotifyAuthUrl = 'https://accounts.spotify.com/authorize/';
  const redirectUri = `${config.host}${req.body.redirect}`;
  const url = `${spotifyAuthUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
  res.send(url);
});

// '/spotify/auth/token'
//  route used to exchange code for token
authRouter.post(`${authPath}/token`, (req, res) => {
  const code = req.query.code;
  const redirectUri = `${config.host}${req.body.redirect}`;
  const authHeader = 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  if (!req.query.code) {
    res.send({ error: '"code" param required' });
  } else if (!req.body.redirect) {
    res.send({ error: '"redirect" body property required' });
  }
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    },
    headers: {
      Authorization: authHeader,
    },
    json: true
  })
    .then(({data}) => {
      res.send(data);
    })
    .catch(e => {
      console.error(e);
      res.send({ error: 'token error' });
    });
});

//:::::::::::::::::::::::::::::::::://
//           Api Router             //
//:::::::::::::::::::::::::::::::::://

// '/api'
apiRouter.get(apiPath, (req, res) => {
  res.send('Api Route');
});

module.exports = rootRouter;