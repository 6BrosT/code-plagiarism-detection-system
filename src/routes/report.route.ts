import express from 'express';
import * as controllers from '../controllers';

const router = express.Router({ mergeParams: true });

router.post('/', async function (req, res) {
  const result = await controllers.createReportController(req);
  res.status(result.statusCode).json(result);
});

export default router;
