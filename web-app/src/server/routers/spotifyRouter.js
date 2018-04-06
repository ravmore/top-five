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

//  route returns url to spotify authorization check 
authRouter.get(authPath, (req, res) => {
  const redirectUri = `${config.host}/r/spotify/auth`;
  const url = `https://accounts.spotify.com/authorize/?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
  res.send(url);
});

//  route used to exchange code for token
authRouter.get(`${authPath}/token`, (req, res) => {
  if (req.query.error) {
    res.send('code error');
    return;
  }

  const code = req.query.code;
  const state = req.query.state;
  const redirectUri = `${config.host}/r/spotify/auth`;
  const authHeader = 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
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
      res.send('token error');
    });
});

//:::::::::::::::::::::::::::::::::://
//           Api Router             //
//:::::::::::::::::::::::::::::::::://

apiRouter.get(apiPath, (req, res) => {
  res.send('Api Route');
});

module.exports = rootRouter;