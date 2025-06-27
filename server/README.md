# 📚 Book Management API

A RESTful API built using **Node.js**, **Express**, and **MongoDB** that allows you to perform **CRUD operations** on a collection of books. This is the backend for the Bookly project.

---

## 🚀 Features

- 📖 Create, Read, Update, and Delete books
- 💾 MongoDB integration using Mongoose
- 🔐 RESTful endpoints
- 🧪 Easy testing with Thunder Client or Postman
- 🔧 Scalable folder structure for future enhancements

---

## 🛠 Tech Stack

- ⚙️ Node.js
- 🚀 Express.js
- 🗃️ MongoDB
- 🧩 Mongoose
- 🧪 Thunder Client / Postman for API testing

---

## 📁 Folder Structure

```
server/
├── models/
│   └── book.js        # Mongoose schema for book
├── .env               # Environment variables (optional)
├── index.js           # Main server file
├── package.json       # Project metadata and scripts
└── README.md          # API documentation
```

---

## 📦 How to Run This Project

### 🔧 After Cloning the Repository:

```bash
# Step 1: Go to the backend folder
cd server

# Step 2: Install dependencies
npm install

# Step 3: Start the server
node index.js

# OR if you have nodemon installed
nodemon index.js
```

---

## 🌐 Base URL

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/books`         | Get all books           |
| POST   | `/books`         | Add a new book          |
| PUT    | `/books/:id`     | Update a book by ID     |
| DELETE | `/books/:id`     | Delete a book by ID     |

---

## 🧪 Sample Request (using `curl`)

```bash
# POST a new book
curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d '{"title": "1984", "author": "George Orwell", "genre": "Dystopian", "publishedYear": 1949}'
```

---

## ✅ Prerequisites

- Node.js and npm installed
- MongoDB running locally or on cloud (e.g., MongoDB Atlas)
- Internet connection to install packages

---

## ✍️ Author

**Harshit Kumar Singh**  
[GitHub Profile](https://github.com/HarshittSinghh)

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).
