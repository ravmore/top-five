import cluster from 'cluster';  
import express from 'express';  
import os from 'os';
import path from 'path';
import bodyParser from 'body-parser';

import config from './config';
import renderRouter from './routers/renderRouter';
import spotifyRouter from './routers/spotifyRouter';


//:::::::::::::::::::::::::::::::::://
//     single instance server       //
//:::::::::::::::::::::::::::::::::://

// initialize express app
const app = express();

// logs to console all incoming requests for debugging
// set env variable SERVER_LOGS to 'on' for logging
// NOTE: must restart node/nodemon to update changes in env variables
if (process.env.SERVER_LOGS === 'on'){
  app.use((req, res, next) => {
    console.log(`:::SERVER LOG::: Recieved ${req.method} request for ${req.path}`);
    next();
  });
}

// serve static files
app.use(express.static(path.join(__dirname, '../../static')));

// parse req body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// routes for server rendering
app.all(['/r', '/r/*'], renderRouter);
app.get('/', (req, res) => res.redirect('/r'));

// router for Spotify API
app.all(['/spotify', '/spotify/*'], spotifyRouter)

// set app to listen on port fomr config
app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));

//:::::::::::::::::::::::::::::::::://
//        server cluster            //
//:::::::::::::::::::::::::::::::::://

// if (cluster.isMaster) { 
//     const numCPUs = os.cpus().length; 
//     for (let i = 0; i < numCPUs; i++) {
//         // Create a worker
//         cluster.fork();
//     }
// } else {
//
//     ***Add single instance setup here***
//
//     // All workers use this port
//     app.listen(PORT, () => console.log(`Worker #${cluster.worker.id} listening on port ${PORT}`));
// }