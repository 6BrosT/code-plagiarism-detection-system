import express from "express";
import { dolosReportController } from "../controllers/index.js";

const router = express.Router({ mergeParams: true });

router.post("/check-exist", async function (req, res) {
  const result =
    await dolosReportController.checkDolosReportWithCodeQuestionIdsExistController(
      req
    );
  res.status(200).json(result);
});

router.post("/", async function (req, res) {
  const result = await dolosReportController.upsertDolosReportController(req);
  res.status(result.statusCode).json(result);
});

router.get("/:reportId", async function (req, res) {
  const result = await dolosReportController.getDolosReportByIdController(req);
  res.status(200).json(result);
});

router.get("/", async function (req, res) {
  const result = await dolosReportController.getAllDolosReportsController();
  res.status(200).json(result);
});

export default router;
