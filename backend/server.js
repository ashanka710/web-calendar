const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Body parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Simple API endpoint for adding/removing tasks
app.post('/api/tasks', (req, res) => {
    const task = req.body;
    // Here, you would store the task in a database
    console.log('Received task:', task);
    res.status(201).json({ message: 'Task added successfully', task });
});

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});