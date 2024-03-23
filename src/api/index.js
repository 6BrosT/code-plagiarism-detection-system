import express from "express";

// import emojis from "./emojis.js";
import { dolosReportRouter } from "../routes/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

// router.use('/emojis', emojis);

router.use("/reports", dolosReportRouter);

export default router;
