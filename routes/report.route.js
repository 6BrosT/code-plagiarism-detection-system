import express from "express";
import { postReportController } from "../controllers/report.controller.js";

const router = express.Router();

router.post("/", async function (req, res) {
  const result = await postReportController(req);
  res.status(result.statusCode).json(result);
});

export default router;
