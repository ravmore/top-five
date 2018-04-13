const router = require('express').Router();

module.exports = router;

router.get('/', (req, res) => {
  res.send('home');
})

// '/api/user'
router.use('/user', require('./user'));
