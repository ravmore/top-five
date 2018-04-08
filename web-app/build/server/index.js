'use strict';

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _renderRouter = require('./routers/renderRouter');

var _renderRouter2 = _interopRequireDefault(_renderRouter);

var _spotifyRouter = require('./routers/spotifyRouter');

var _spotifyRouter2 = _interopRequireDefault(_spotifyRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./db'),
    db = _require.db;

var app = (0, _express2.default)();

// Serve static files
app.use(_express2.default.static(_path2.default.join(__dirname, '../../static')));

// parse req body
app.use(_bodyParser2.default.json()); // for parsing application/json
app.use(_bodyParser2.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// cors policies
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.set({
    'Access-Control-Allow-Origin': '*'
  });

  next();
});

// Routes for server rendering
app.all(['/r', '/r/*'], _renderRouter2.default);
app.get('/', function (req, res) {
  return res.redirect('/r');
});

// Router for Spotify API
app.all(['/spotify', '/spotify/*'], _spotifyRouter2.default);

//App API
app.use('/api', require('./api'));

// All workers use this port
db.sync().then(function () {
  app.listen(_config2.default.PORT, function () {
    return console.log('Listening on port ' + _config2.default.PORT);
  });
});

// if (cluster.isMaster) {
//     const numCPUs = os.cpus().length;
//     for (let i = 0; i < numCPUs; i++) {
//         // Create a worker
//         cluster.fork();
//     }
// } else {
//     // Set port to env or default
//     const PORT = process.env.PORT || 8080;

//     // Initalize server
//     const app = express();

//     // Serve images
//     app.use(express.static(path.join(__dirname, '../../static')));

//     // Routes for server rendering
//     app.get(['/r', '/r/*'], renderRouter);
//     app.get('/', (req, res) => res.redirect('/r'));

//     // Router for Spotify API
//     app.get('/spotify', spotifyRouter)

//     // All workers use this port
//     app.listen(PORT, () => console.log(`Worker #${cluster.worker.id} listening on port ${PORT}`));
// }