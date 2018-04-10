import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import AppRoutes from '../../client/js/app-router/AppRoutes';
import getHtml from '../getHtml';

const router = express.Router();

// '/r' & '/r/*'
// route renders frontend react UI and logic
router.all('*', (req, res) => {
  let context = {};

  const app = renderToString(
    <StaticRouter basename="/r" context={context} location={req.url}>
      <AppRoutes />
    </StaticRouter>
  );

  res.status(200).send(getHtml(app, 'Top Five'));
});

export default router;