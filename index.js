import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import reportRouter from "./routes/report.route.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/reports", reportRouter);

app.use(function (req, res) {
  res.status(404).json({
    error: "Endpoint not found.",
  });
});

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).json({
    error: "Something wrong!",
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(
    `Code Plagiarism Detection API is listening at http://localhost:${PORT}`
  );
});
