import express from "express";
const router = express.Router();

// Hardcoded legal documents
const mockDocs = [
  {
    _id: "1",
    title: "Freedom of Speech",
    content:
      "Every citizen has the right to freedom of speech without interference from the government.",
  },
  {
    _id: "2",
    title: "Contract Law",
    content:
      "A contract must have offer, acceptance, consideration, and mutual consent to be legally binding.",
  },
  {
    _id: "3",
    title: "Employment Law",
    content:
      "Employees have the right to a safe workplace and fair treatment under employment regulations.",
  },
];

// POST /api/generate
router.post("/", (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.json([
      { title: "No query provided", summary: "Please enter a search term." },
    ]);
  }

  // Filter documents based on query
  const results = mockDocs
    .filter(
      (doc) =>
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.content.toLowerCase().includes(query.toLowerCase())
    )
    .map((doc) => ({
      _id: doc._id,
      title: doc.title,
      summary:
        doc.content.length > 100
          ? doc.content.slice(0, 100) + "..."
          : doc.content,
    }));

  if (results.length === 0) {
    return res.json([
      { title: "No results found", summary: "Try another search query." },
    ]);
  }

  res.json(results);
});

export default router;
