// This file defines the routes for the web server and exports a function to handle different HTTP methods and endpoints.

const express = require('express');
const router = express.Router();

// Define a sample route
router.get('/', (req, res) => {
    res.send('Welcome to the web server!');
});

// Define other routes as needed
router.get('/about', (req, res) => {
    res.send('About this web server.');
});

// Export the router
module.exports = router;