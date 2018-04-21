const router = require('express').Router();

module.exports = router;

const { Playlist, Song } = require('../../db').models;

router.get('/:id', (req, res) => {
  Playlist.findById(req.params.id)
  .then(playlist => res.send(playlist))
  .catch(er => console.log('error finding playlist'))
})


router.post('/', (req, res) => {
  //req.body = { name: 'name', userId: 'userId'}
  Playlist.create(req.body)
  .then(playlist => res.send(playlist));
})

router.put('/:id', (req, res) => {
  //req.body = { name: 'songName', artists: ['artist1'], spotifyID: 'spotifyID', userId: 2 }
  Playlist.findById(req.params.id)
  .then(playlist => {
    const songExists = playlist.getSongs().find(song => song.spotifyID === req.body.spotifyID);
    songExists ? res.send('songExistsInPlaylist') : Song.create(req.body).then(song => playlist.addSong(song).then(playlist => playlist.save() ))
  });
});
