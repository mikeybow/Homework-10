
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const newNotes = [];


const userNotes = {
  Notes: '',
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/takenotes.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'takenotes.html'));
});


app.get('/api/notes', (req, res) => {
  return res.json(notes);
});

app.get('/api/notes', (req, res) => {
  return res.json(notes);
});

app.post('/api/clear', (req, res) => {
  tables.empty();
  return res.json(clear);
});

app.post('/api/notes', (req, res) => {
  const data = req.body;
  
  if (notes.length < 6) {
    notes.push(data);
  }   else {
    waitlist.push(data);
  }

  return res.json(notes);
  
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
