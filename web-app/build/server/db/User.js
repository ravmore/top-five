'use strict';

var db = require('./db');
var Sequelize = db.Sequelize;


var user = db.define('user', {
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
  spotifyID: Sequelize.STRING
});

module.exports = user;