import { readFileSync } from 'fs';
import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
const foodQuotes = JSON.parse(readFileSync('./foodQuotes.json', 'utf-8'));
const port = process.env.PORT || 4000;


app.use(cors()) // lets us run server on our local machine after hosting.

dotenv.config();


//* Gives the server access to html file
app.use(express.static("public"));


app.get('/api', (req, res) => {
    res.json(foodQuotes) // responds with whole json file
})


// Get a random food quote
app.get('/api/random-quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * foodQuotes.length);
    res.json(foodQuotes[randomIndex]);
});


// Get quotes one after the other
let currentIndex = 0;
app.get('/api/next-quote', (req, res) => {
  if (currentIndex >= foodQuotes.length) {
    currentIndex = 0; // Reset when all quotes have been served
  }
    res.json(foodQuotes[currentIndex++]);
});


//* Listening port
app.listen (port, () => {
    console.log(`The server is running on port ${port}! You better go catch it`);
})