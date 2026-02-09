


import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dictionary_app = express();
const PORT = 3000;

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load dictionary
const dictionaryPath = path.join(__dirname, "dictionary.json");
const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, "utf-8"));
    
dictionary_app.use(express.static("public"))

dictionary_app.get("/define", (req, res) => {
  const word = req.query.word;

  if (!word) {
    return res.status(400).json({
      error: "Please provide a word"
    });
  }

  const definition = dictionary[word.toLowerCase()];

  if (!definition) {
    return res.status(404).json({
      error: "Not Found"
    });
  }

  res.json({
    word: word.toLowerCase(),
    definition
  });
});

dictionary_app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




// import express from "express";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const app = express();
// const PORT = 3000;

// // Fix __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load dictionary
// const dictionary = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "dictionary.json"), "utf-8")
// );

// // Serve frontend
// app.use(express.static(path.join(__dirname, "public")));

// // API route
// app.get("/define", (req, res) => {
//   const word = req.query.word;

//   if (!word) {
//     return res.json({ error: "No word provided" });
//   }

//   const definition = dictionary[word.toLowerCase()];

//   if (!definition) {
//     return res.json({ error: "Word not found" });
//   }

//   res.json({
//     word,
//     definition
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });
