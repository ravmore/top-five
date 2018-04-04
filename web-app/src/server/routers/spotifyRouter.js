import express from 'express';
import axios from 'axios';
import secrets from '../secrets';
import request from 'request'

const clientId = secrets.spotify.clientId;
const clientSecret = secrets.spotify.clientSecret;

const router = express.Router();
const base = '/spotify';

router.get(`${base}/`, (req, res) => {
  res.send('Spotify Route');
});

router.get(`${base}/auth`, (req, res) => {
  const redirectUri = 'http://localhost:8080/spotify/token';
  const url = `https://accounts.spotify.com/authorize/?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
  res.redirect(url);
});

router.get(`${base}/token`, (req, res) => {
  if (req.query.error) {
    res.send('code error');
    return;
  }

  const code = req.query.code;
  const state = req.query.state;
  const redirectUri = 'http://localhost:8080/spotify/token';
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

module.exports = router;