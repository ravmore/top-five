import express from 'express';
import axios from 'axios';
import secrets from '../secrets';
import request from 'request'

const clientId = secrets.spotify.clientId;
const clientSecret = secrets.spotify.clientSecret;

// routers and base paths
const rootRouter = express.Router();
const rootPath = '/spotify';
const authRouter = express.Router();
const authPath = `${rootPath}/auth`;
const apiRouter = express.Router();
const apiPath = `${rootPath}/api`;

// root router
rootRouter.all([rootPath, `${rootPath}/`], (req, res) => {
  res.send('Spotify Route');
});

rootRouter.all([authPath, `${authPath}/*`], authRouter);

rootRouter.all([apiPath, `${apiPath}/*`], apiRouter);

// auth router
authRouter.get(authPath, (req, res) => {
  const redirectUri = 'http://localhost:8080/spotify/auth/token';
  const url = `https://accounts.spotify.com/authorize/?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
  res.redirect(url);
});

authRouter.get(`${authPath}/token`, (req, res) => {
  if (req.query.error) {
    res.send('code error');
    return;
  }

  const code = req.query.code;
  const state = req.query.state;
  const redirectUri = 'http://localhost:8080/spotify/auth/token';
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

// api router
apiRouter.get(apiPath, (req, res) => {
  res.send('Api Route');
});

module.exports = rootRouter;