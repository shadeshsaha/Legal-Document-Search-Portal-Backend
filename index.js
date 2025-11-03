import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import {
  default as documentsRoutes,
  default as generateRoutes,
} from "./src/routes/generate.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/generate", generateRoutes); // POST
app.use("/api/documents", documentsRoutes); // GET

app.get("/", (req, res) => res.send({ status: "Backend running" }));

// MongoDB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database Connected Successfully !!!");
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Database Connection Error:", err);
  });
