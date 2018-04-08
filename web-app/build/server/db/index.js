'use strict';

//models
var db = require('./db');
var User = require('./User');
var Playlist = require('./Playlist');

//associations

User.hasMany(Playlist); //Can use playlist name for spotify search to read/write

module.exports = {
  db: db,
  models: {
    User: User,
    Playlist: Playlist
  }
};