// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('Comments Page');
});

app.get('/comments/new', (req, res) => {
  res.send('New Comment Page');
});

app.get('/comments/:id', (req, res) => {
  res.send('Comment ID Page');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
