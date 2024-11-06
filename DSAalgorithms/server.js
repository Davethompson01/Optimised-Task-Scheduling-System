// server.js
const express = require('express');
const scheduleTasks = require('./schedule'); // Ensure path is correct
const app = express();

app.use(express.json());

// Define the route for scheduling tasks
app.post('/schedule-tasks', (req, res) => {
  const { tasks } = req.body;
  if (!tasks || !Array.isArray(tasks)) {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  const result = scheduleTasks(tasks);
  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
