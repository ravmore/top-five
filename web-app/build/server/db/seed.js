'use strict';

var _require$models = require('./index').models,
    User = _require$models.User,
    Playlist = _require$models.Playlist;

Promise.all([User.create({ name: 'Ravish Rawal' }), User.create({ name: 'Alec Draymore' })]).then(function (users) {
  console.log('users seeded:', users);
});