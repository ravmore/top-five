//models
const db = require('./db');
const User = require('./User');
const Playlist = require('./Playlist');


//associations

User.hasMany(Playlist); //Can use playlist name for spotify search to read/write
User.hasMany(User, { as: 'friends' }); //User.addFriend/getFriends

module.exports = {
  db,
  models: {
    User,
    Playlist
  }
};
