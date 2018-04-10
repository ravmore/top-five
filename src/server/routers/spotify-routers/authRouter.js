import express from 'express';
import axios from 'axios';

import secrets from '../../secrets';
import config from '../../config';

const clientId = secrets.spotify.clientId;
const clientSecret = secrets.spotify.clientSecret;
const scope = 'playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative user-read-recently-played'

const authRouter = express.Router();

// '/spotify/auth'
//  route returns url to spotify authorization check
authRouter.post('/', (req, res) => {
  if (!req.body.redirect) {
    res.send({ error: '"redirect" body property required' });
  }
  const spotifyAuthUrl = 'https://accounts.spotify.com/authorize/';
  const redirectUri = `${config.host}${req.body.redirect}`;

  const url = `${spotifyAuthUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
  res.send(url);
});

// '/spotify/auth/token'
//  route used to exchange code for token
authRouter.post('/token', (req, res) => {
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
      res.send({ error: e.response.data.error_description });
    });
});

export default authRouter;