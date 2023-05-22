const express = require('express');
const router = express.Router();

// Sample data (replace with your own data retrieval logic)
let marks = [
  { id: 1, rollnumber: '1001', name: 'John', marks: 80 },
  { id: 2, rollnumber: '1002', name: 'Jane', marks: 75 },
  { id: 3, rollnumber: '1003', name: 'Bob', marks: 90 }
];

// GET /marks
router.get('/', (req, res) => {
  res.json(marks);
});

// POST /marks
router.post('/', (req, res) => {
  const { rollnumber, name, marks } = req.body;
  const newMark = {
    id: marks.length + 1,
    rollnumber,
    name,
    marks
  };
  marks.push(newMark);
  res.status(201).json(newMark);
});

// PUT /marks/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { rollnumber, name, marks } = req.body;
  const markToUpdate = marks.find(mark => mark.id === parseInt(id));
  if (markToUpdate) {
    markToUpdate.rollnumber = rollnumber;
    markToUpdate.name = name;
    markToUpdate.marks = marks;
    res.json(markToUpdate);
  } else {
    res.status(404).json({ error: 'Mark not found' });
  }
});

// DELETE /marks/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  marks = marks.filter(mark => mark.id !== parseInt(id));
  res.json({ message: 'Mark deleted successfully' });
});

module.exports = router;
