import express from "express";
import Document from "../models/Document.js";
import { generateMockSummary } from "../utils/mockSummary.js";

const router = express.Router();

// POST: /api/generate
router.post("/", async (req, res) => {
  try {
    const { title, content, query } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ error: "Title and content are required !" });
    }

    const summary = generateMockSummary(content, query || "");
    const newDoc = await Document.create({ title, content });
    res.status(201).json({ document: newDoc, summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET: /api/documents
router.get("/", async (req, res) => {
  try {
    const documents = await Document.find().sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
