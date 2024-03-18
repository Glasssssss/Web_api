const Class = require('../models/Class');
const listClasses = async (req, res) => {
try {
const classes = await Class.find();
res.json(classes);
} catch (error) {
res.status(500).json({ error: error.message });
}
};