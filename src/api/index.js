import express from 'express';

import emojis from './emojis.js';
import routes from '../routes/index.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

router.use('/reports', routes.reportRouter);

export default router;
