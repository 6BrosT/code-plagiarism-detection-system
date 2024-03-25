import express from "express";

// import emojis from "./emojis.js";
import { codeQuestionRouter, dolosReportRouter } from "../routes/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

// router.use('/emojis', emojis);

router.use("/reports", dolosReportRouter);
router.use("/code-questions", codeQuestionRouter);

export default router;
