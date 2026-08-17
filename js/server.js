const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const dataDir = path.join(__dirname, '..', 'data');

function readJson(filename) {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// API routes
app.get('/api/movies', (req, res) => {
  try {
    res.json(readJson('movies.json'));
  } catch (error) {
    console.error('Failed to load movies.json:', error);
    res.status(500).json({ error: 'Failed to load world movies' });
  }
});

app.get('/api/bollywood', (req, res) => {
  try {
    res.json(readJson('bollywood.json'));
  } catch (error) {
    console.error('Failed to load bollywood.json:', error);
    res.status(500).json({ error: 'Failed to load Bollywood movies' });
  }
});

// Serve the frontend
app.use(express.static(path.join(__dirname, '..')));

app.listen(PORT, () => {
  console.log(`Movie recommender running at http://localhost:${PORT}`);
});