const config = {};

config.PORT = process.env.port || process.env.PORT || 8080;

config.host = `http://localhost:${config.PORT}`;

export default config;
