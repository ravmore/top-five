const router = require('express').Router();

module.exports = router;

const { User } = require('../../db').models;

router.get('/:spotifyID', (req, res)=>{
  User.findOne({
    where: {
      spotifyID: req.params.spotifyID
    }
  })
  .then(user => res.send(user))
  .catch(er => console.log('err finding user', er));
});

router.post('/:spotifyID', (req, res) => {
  User.create(req.body)
  .then(user => res.send(user))
  .catch(er => console.log('err creating user', er));
})
