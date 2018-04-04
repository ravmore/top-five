import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from '../../client/js/app-router/AppRoutes';
import getHtml from '../getHtml';

const router = express.Router();

router.all('*', (req, res) => {
  const method = req.method;
  let context = {};
  let location;
  if (method === 'POST') {
    context = req.body.context;
    location = req.body.location;
  }
  const context = {};

  const app = renderToString(
    <StaticRouter basename="/r" context={context} location={req.url}>
      <AppRoutes />
    </StaticRouter>
  );

  res.status(200).send(getHtml(app, null));
});

module.exports = router;