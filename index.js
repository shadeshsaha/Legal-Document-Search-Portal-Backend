import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import generateRoutes from "./src/routes/generate.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/generate", generateRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Backend running on port: http://localhost:${PORT}`)
);
