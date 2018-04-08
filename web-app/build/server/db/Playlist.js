'use strict';

var db = require('./db');
var Sequelize = db.Sequelize;


var playlist = db.define('playlist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = playlist;