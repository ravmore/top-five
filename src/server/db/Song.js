const db = require('./db');
const { Sequelize } = db;

const song = db.define('songs', {
  name: Sequelize.STRING,
  spotifyID: Sequelize.STRING,
  artists: Sequelize.ARRAY(Sequelize.STRING)
});

module.exports = song;
