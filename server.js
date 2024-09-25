// server.js
const http = require('http');
const url = require('url');
const { parse } = require('querystring');

let books = []; // This will hold the list of books in-memory

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const method = req.method;

    // Handle CORS (optional if needed for frontend access)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // GET - Retrieve all books or a book by ISBN
    if (method === 'GET' && reqUrl.pathname === '/books') {
        const isbn = reqUrl.query.isbn;
        if (isbn) {
            const book = books.find(b => b.isbn === isbn);
            if (book) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(book));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Book not found' }));
            }
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(books));
        }
    }

    // POST - Add a new book
    else if (method === 'POST' && reqUrl.pathname === '/books') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newBook = JSON.parse(body);
            // Validation: Ensure all fields are present
            if (newBook.title && newBook.author && newBook.publisher && newBook.publishedDate && newBook.isbn) {
                books.push(newBook);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newBook));
            } else {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid book data' }));
            }
        });
    }

    // PUT/PATCH - Update book details
    else if ((method === 'PUT' || method === 'PATCH') && reqUrl.pathname === '/books') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedBook = JSON.parse(body);
            const index = books.findIndex(b => b.isbn === updatedBook.isbn);
            if (index !== -1) {
                // Update the book details
                books[index] = { ...books[index], ...updatedBook };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(books[index]));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Book not found' }));
            }
        });
    }

    // DELETE - Remove a book by ISBN
    else if (method === 'DELETE' && reqUrl.pathname === '/books') {
        const isbn = reqUrl.query.isbn;
        const index = books.findIndex(b => b.isbn === isbn);
        if (index !== -1) {
            books.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Book deleted' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Book not found' }));
        }
    }

    // Handle invalid routes
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


