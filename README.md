# 📚 Book Directory API

This is a simple API for managing a book directory using Node.js. The API handles HTTP requests and responses to manage books, with support for adding, updating, retrieving, and deleting book entries.

## ✨ Features

- ✅ **GET**: Retrieve a list of all books or a specific book by ISBN.
- ✅ **POST**: Add a new book to the directory.
- ✅ **PUT/PATCH**: Update details of an existing book.
- ✅ **DELETE**: Remove a book from the directory by ISBN.
- ✅ **Validation**: Ensures required fields are provided (e.g., title, author, ISBN).
- ✅ **Error Handling**: Provides meaningful HTTP status codes (e.g., `400` for validation errors, `404` if a book is not found).

---

## ⚙️ Installation

Clone the repository or download the project files:

```bash
git clone https://github.com/Princemashumu/book-directory.git
cd book-directory
```

### 📦 Install Dependencies

```bash
npm install
```

### 🚀 Run the API Server

```bash
node server.js
```

The server will start running on [http://localhost:3000](http://localhost:3000).

---

## 📌 API Endpoints

### 📖 GET /books
Retrieve all books in the directory or a specific book by ISBN.

#### 🔹 Retrieve All Books:

```bash
GET http://localhost:3000/books
```

#### 🔹 Retrieve a Book by ISBN:

```bash
GET http://localhost:3000/books?isbn=1234567890
```

---

### ➕ POST /books
Add a new book to the directory. The following fields are required:

- 📌 **title**: Title of the book.
- 📌 **author**: Name of the author.
- 📌 **publisher**: Publisher's name.
- 📌 **publishedDate**: Date the book was published.
- 📌 **isbn**: The unique ISBN identifier.

#### Example Request:

```bash
POST http://localhost:3000/books
```

#### 📑 Body (JSON):

```json
{
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "publisher": "Little, Brown and Company",
    "publishedDate": "1951-07-16",
    "isbn": "0316769487"
}
```

---

### ✏️ PUT/PATCH /books
Update an existing book's details. Provide the ISBN to identify the book and include fields you want to update.

#### Example Request:

```bash
PUT http://localhost:3000/books
```

#### 📑 Body (JSON):

```json
{
    "isbn": "0316769487",
    "title": "Updated Book Title"
}
```

---

### ❌ DELETE /books
Delete a book by its ISBN.

#### Example Request:

```bash
DELETE http://localhost:3000/books?isbn=0316769487
```

---

## 🛠️ Testing with Postman

1. Install [Postman](https://www.postman.com/).
2. Use the following settings to test each endpoint:
   - ✅ **GET**: Retrieve all books or a book by ISBN.
   - ✅ **POST**: Add books using JSON in the request body.
   - ✅ **PUT/PATCH**: Update a book by providing the ISBN in the request body.
   - ✅ **DELETE**: Remove a book by passing the ISBN in the query parameters.

---

## 📚 Example Book Data

Here are some example book entries for testing the API:

```json
{
    "title": "1984",
    "author": "George Orwell",
    "publisher": "Secker & Warburg",
    "publishedDate": "1949-06-08",
    "isbn": "0451524934"
}
```

```json
{
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publisher": "J.B. Lippincott & Co.",
    "publishedDate": "1960-07-11",
    "isbn": "0060935464"
}
```

---

## ⚠️ Error Handling

The API will return meaningful HTTP status codes for different scenarios:

- ❌ `400 Bad Request`: If the book data is incomplete or invalid.
- ❌ `404 Not Found`: If a book is not found when trying to retrieve, update, or delete it.

---

### 🚀 Happy Coding! 🎉

