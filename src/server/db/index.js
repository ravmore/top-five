//models
const db = require('./db');
const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song');


//associations

User.hasMany(Playlist); //Can use playlist name for spotify search to read/write
User.hasMany(User, { as: 'friends' }); //User.addFriend/getFriends
<<<<<<< HEAD
=======
Playlist.hasMany(Song);
User.hasMany(Song);
>>>>>>> 2ca4f8b76c66ecee5fa29231283a04e822ae7a3d

module.exports = {
  db,
  models: {
    User,
    Playlist,
    Song
  }
};
