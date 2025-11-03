export const generateMockSummary = (text, query) => {
  if (!query) return "No query provided.";
  const snippet = text.slice(0, 150);
  return `Summary for query "${query}": ${snippet}...`;
};
