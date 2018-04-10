import express from 'express';
import axios from 'axios';

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  res.send('spotify');
})

router.get('/search', (req, res) => {
  const { token, searchQuery } = req.query;
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
