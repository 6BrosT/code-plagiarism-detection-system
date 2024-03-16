import express from "express";
import { createReportController } from "../controllers/index.js";

const router = express.Router();

router.post("/", async function (req, res) {
  const result = await createReportController(req);
  res.status(result.statusCode).json(result);
});

export default router;
