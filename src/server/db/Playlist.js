const db = require('./db');
const { Sequelize } = db;

const playlist = db.define('playlist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = playlist;
