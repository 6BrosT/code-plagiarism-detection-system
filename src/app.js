import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import middlewares from "./middlewares.js";
import api from "./api/index.js";

// config env path to ../.env
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Code Plagiarism Detection API",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
