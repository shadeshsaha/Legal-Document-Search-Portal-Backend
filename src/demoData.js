import dotenv from "dotenv";
import mongoose from "mongoose";
import Document from "./models/Document.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const docs = [
  {
    title: "Constitutional Law - Freedom of Speech",
    content:
      "Freedom of speech is protected under Article 19(1)(a) of the Constitution. However, reasonable restrictions may be imposed in the interests of public order, morality, or security of the state.",
  },
  {
    title: "Statute B: Consumer Protection Act (excerpt)",
    content:
      "The Consumer Protection Act provides remedies to consumers who suffer from unfair trade practices or defective goods. The law emphasizes the right to be informed and the right to redressal.",
  },
  {
    title: "Criminal Law - Burden of Proof",
    content:
      "In criminal cases, the burden of proof lies on the prosecution, and the accused is presumed innocent until proven guilty beyond reasonable doubt.",
  },
];

const demoDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    await Document.deleteMany({});
    await Document.insertMany(docs);
    console.log("Seeded 3 mock legal documents!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding failed:", err);
  }
};

demoDatabase();
