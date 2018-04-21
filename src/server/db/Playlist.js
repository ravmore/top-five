const db = require('./db');
const { Sequelize } = db;

const Song = require('./Song');

const playlist = db.define('playlist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  defaultScope: {
    include: [
      { model: Song }
    ]
  }
});

module.exports = playlist;
