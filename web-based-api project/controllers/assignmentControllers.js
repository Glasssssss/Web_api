const Assignment = require('../models/Assignment');
const listAssignments = async (req, res) => {
try {
const assignments = await Assignment.find();
res.json(assignments);
} catch (error) {
res.status(500).json({ error: error.message });
}
};