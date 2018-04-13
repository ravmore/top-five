import express from 'express';
import axios from 'axios';

import secrets from '../../secrets';
import config from '../../config';

const clientId = secrets.spotify.clientId;
const clientSecret = secrets.spotify.clientSecret;
const scope = 'playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative user-read-recently-played'

const apiRouter = express.Router();

// '/spotify/api'
//  route returns string 'spotify'
apiRouter.get('/', (req, res) => {
  res.send('spotify');
})

// '/spotify/auth/search'
//  route returns tracks matching the query param
apiRouter.get('/search', (req, res) => {
  const { token, searchQuery, type } = req.query;
  axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(results => {
    res.send(results.data.tracks.items);
  })
  .catch(er => console.log(er));
});

export default apiRouter;
