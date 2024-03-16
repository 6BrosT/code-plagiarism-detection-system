import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import * as routes from '../routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API',
  });
});

router.use('/reports', routes.reportRouter);

export default router;
