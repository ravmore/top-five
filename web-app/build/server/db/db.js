'use strict';

var Sequelize = require('sequelize');
var debug = require('debug')('sql');
var DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/topfive';
var db = new Sequelize(DATABASE_URL, {
  logging: debug
});

module.exports = db;