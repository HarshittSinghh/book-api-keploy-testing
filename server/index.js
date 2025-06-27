const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/BookStore')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('❌MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Book Management API');
});

// GET all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// POST a new book
app.post('/books', async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    const book = new Book({ title, author, genre, publishedYear });
    const savedBook = await book.save();
    res.status(201).json({ message: 'Book created', book: savedBook });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Duplicate book: Title and Author must be unique' });
    }
    res.status(400).json({ error: err.message });
  }
});

// PUT to update a book
app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid Book ID' });
  }

  try {
    const updated = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book updated', book: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a book
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid Book ID' });
  }

  try {
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: `Book with ID ${id} deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
