"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {};

config.PORT = process.env.port || process.env.PORT || 8080;

config.host = "http://localhost:" + config.PORT;

exports.default = config;