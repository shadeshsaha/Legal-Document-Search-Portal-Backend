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

router.get("/", (req, res) => {
  const query = req.query.query?.toLowerCase();
  if (!query) return res.status(400).json({ error: "Query is required." });

  const results = mockDocs
    .filter(
      (d) =>
        d.title.toLowerCase().includes(query) ||
        d.content.toLowerCase().includes(query)
    )
    .map((d) => ({
      document: d,
      summary: `Summary: ${d.content.slice(0, 100)}${
        d.content.length > 100 ? "..." : ""
      }`,
    }));

  if (results.length === 0)
    return res
      .status(404)
      .json({ error: "No matching legal documents found." });

  res.json(results);
});

export default router;
