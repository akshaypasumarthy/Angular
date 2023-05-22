
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(bodyParser.json());
const port = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200' // Replace with your client's origin
}));
// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Example marks data
let marks = [
  {rollnumber: '19341A05D1', name: 'vithal', date: '03-08-2002', marks: 450, id: 1},
  {rollnumber: '19341A0524', name: 'naveen', date: '30-07-2001', marks: 600, id: 2},
  {rollnumber: '19341A05C9', name: 'Akshay Pasumarthy', date: '03-08-2001', marks: 100, id: 3}
 
  
];

// Route to fetch marks
app.get('/marks', (req, res) => {
  res.json(marks);
});

// Route to create a new mark
app.post('/marks', (req, res) => {
  const newMark = req.body;
  const maxId = marks.reduce((max, mark) => Math.max(max, mark.id), 0);
  newMark.id = maxId + 1;
  marks.push(newMark);
  res.status(201).json(newMark);
});
app.get('/marks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mark = marks.find((m) => m.id === id);
 
    
  
  if (mark) {
    res.json(mark);
    
  } else {
    res.status(404).json({ error: 'Mark not found' });
  }
});

