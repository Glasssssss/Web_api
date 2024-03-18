const express = require('express');
const bodyParser = require('body-parser');
const classRoutes = require('./src/routes/classRoutes');
const assignmentRoutes = require('./src/routes/assignmentRoutes');
const db = require('./src/config/db');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
// Connect to MongoDB
db.connect();
// Routes
app.use('/classes', classRoutes);
app.use('/assignments', assignmentRoutes);
// Start server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});