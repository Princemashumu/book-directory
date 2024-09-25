# Book Directory API
This is a simple API for managing a book directory using Node.js. The API handles HTTP requests and responses to manage books, with support for adding, updating, retrieving, and deleting book entries.

### Features

- [ ] GET: Retrieve a list of all books or a specific book by ISBN.
- [ ] POST: Add a new book to the directory.
- [ ] PUT/PATCH: Update details of an existing book.
- [ ] DELETE: Remove a book from the directory by ISBN.

### Validation: Ensure required fields are provided (e.g., title, author, ISBN).
### Error Handling: Provides meaningful HTTP status codes (e.g., 400 for validation errors, 404 if a book is not found).
# Installation
Clone the repository or download the project files:

bash
Copy code
```
git clone https://github.com/Princemashumu/book-directory.git
cd bookdirectory
```

### Install dependencies (if any are added later):

bash
Copy code
````
npm install
````
### Run the API server:

bash
Copy code
````
node server.js
````
### The server will start running on http://localhost:3000.

# API Endpoints

### GET /books
Retrieve all books in the directory or a specific book by ISBN.

# Retrieve All Books:

bash
Copy code
````
GET http://localhost:3000/books
````
### Retrieve a Book by ISBN:

bash
Copy code
````
GET http://localhost:3000/books?isbn=1234567890
````

#### POST /books
Add a new book to the directory. The following fields are required:

- [ ] title: Title of the book.
- [ ] author: Name of the author.
- [ ] publisher: Publisher's name.
- [ ] publishedDate: Date the book was published.
- [ ] isbn: The unique ISBN identifier.
- [ ] Example Request:

bash
Copy code
````
POST http://localhost:3000/books
````
### Body (JSON):

json
Copy code
````
{
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "publisher": "Little, Brown and Company",
    "publishedDate": "1951-07-16",
    "isbn": "0316769487"
}
````

### PUT/PATCH /books
Update an existing book's details. Provide the isbn to identify the book and include fields you want to update.

- [ ] Example Request:

bash
Copy code
````
PUT http://localhost:3000/books
````
# Body (JSON):

json
Copy code
````
{
    "isbn": "0316769487",
    "title": "Updated Book Title"
}
````
### DELETE /books
Delete a book by its ISBN.

Example Request:

bash
Copy code
````
DELETE http://localhost:3000/books?isbn=0316769487
````
#### Testing with Postman
# Install Postman.

- [ ] Use the following settings to test each endpoint:
- [ ] For GET requests, use the /books endpoint to retrieve all books or a book by ISBN.
- [ ] For POST, add books using JSON in the request body.
- [ ] For PUT/PATCH, update a book by providing the isbn in the request body.
- [ ] For DELETE, remove a book by passing the isbn in the query parameters.

# Example Book Data
Here are some example book entries for testing the API:

json
Copy code
````
{
    "title": "1984",
    "author": "George Orwell",
    "publisher": "Secker & Warburg",
    "publishedDate": "1949-06-08",
    "isbn": "0451524934"
}
````

json
Copy code
````
{
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publisher": "J.B. Lippincott & Co.",
    "publishedDate": "1960-07-11",
    "isbn": "0060935464"
}
````

### Error Handling
The API will return meaningful HTTP status codes for different scenarios:

- [ ] 400 Bad Request: If the book data is incomplete or invalid.
- [ ] 404 Not Found: If a book is not found when trying to retrieve, update, or delete it.
