const Sequelize = require('sequelize');
const debug = require('debug')('sql');
import secrets from '../secrets';
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/topfive';
const db = new Sequelize('topfive', secrets.postgres.username, secrets.postgres.password, {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  logging: debug
});

module.exports = db;
