
import express from "express";
import fs from " fs";

const dictionary_app = express();
const PORT = 3000;

dictionary_app.use(express.static("FRONTEND"))

const dictionary = JSON.parse(
    fs.readFileSync("./dictionary.json", "utf-8")
);


