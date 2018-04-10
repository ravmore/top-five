import express from 'express';

import authRouter from './authRouter';
import apiRouter from './apiRouter';

const rootRouter = express.Router();
const authPath = '/auth';
const apiPath = '/api';

// '/spotify'
rootRouter.all('/', (req, res) => res.send('Spotify Route'));
// '/spotify/auth'
rootRouter.use(authPath, authRouter);
// '/spotify/api'
rootRouter.use(apiPath, apiRouter);

export default rootRouter;
