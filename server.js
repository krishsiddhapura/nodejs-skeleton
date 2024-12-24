require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const apiRoutes = require('./routes/api');
const server = express();
const port = 5000;
const bodyParser = require('body-parser');

// Use the API routes
server.use(bodyParser.json());
server.use('/api', apiRoutes);

// Server Connection
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});