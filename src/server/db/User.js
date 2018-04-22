const db = require('./db');
const { Sequelize } = db;

const user = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  image: Sequelize.STRING,
  spotifyID: Sequelize.STRING,
});

module.exports = user
