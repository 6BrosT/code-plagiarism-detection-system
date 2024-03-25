import express from "express";
import { codeQuestionController } from "../controllers/index.js";

const router = express.Router({ mergeParams: true });

router.get("/", async function (req, res) {
  const result = await codeQuestionController.getAllCodeQuestionsByController(
    req
  );
  res.status(result.statusCode).json(result);
});

export default router;
