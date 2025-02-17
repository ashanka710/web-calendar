const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

let tasks = []; // Temporary in-memory storage (Replace with a database in production)

// Get all tasks
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post("/api/tasks", (req, res) => {
    const task = req.body;
    if (!task.title || !task.priority) {
        return res.status(400).json({ error: "Title and priority are required." });
    }
    tasks.push(task);
    console.log("Task added:", task);
    res.status(201).json({ message: "Task added successfully", task });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});