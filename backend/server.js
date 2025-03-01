const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();

// Access environment variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || 'default_db_url';

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`Database URL: ${dbUrl}`);
});
