const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Path `title` is required.'],
    trim: true,
    minlength: [1, 'Title must not be empty'],
    maxlength: [100, 'Title is too long']
  },
  author: {
    type: String,
    required: [true, 'Path `author` is required.'],
    trim: true,
    minlength: [1, 'Author must not be empty'],
    maxlength: [100, 'Author is too long']
  },
  genre: {
    type: String,
    trim: true,
    maxlength: [50, 'Genre is too long'],
    default: null
  },
  publishedYear: {
    type: Number,
    min: [1, 'Year must be positive'],
    max: [new Date().getFullYear() + 1, 'Year cannot be too far in future'],
    default: null
  }
}, { timestamps: true });

bookSchema.index({ title: 1, author: 1 }, { unique: true });

module.exports = mongoose.model('Book', bookSchema);
