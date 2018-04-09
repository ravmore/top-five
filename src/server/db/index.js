//models
const db = require('./db');
const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song');


//associations

User.hasMany(Playlist); //Can use playlist name for spotify search to read/write
User.hasMany(User, { as: 'friends' }); //User.addFriend/getFriends
Playlist.hasMany(Song);
User.hasMany(Song);

module.exports = {
  db,
  models: {
    User,
    Playlist,
    Song
  }
};
