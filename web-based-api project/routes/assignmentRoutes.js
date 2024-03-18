const express = require('express');
const assignmentController = require('../controllers/assignmentController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const router = express.Router();
router.get('/', authenticationMiddleware, assignmentController.listAssignments);
router.post('/', authenticationMiddleware, assignmentController.createAssignment);
router.get('/:assignmentId', authenticationMiddleware,
assignmentController.viewAssignmentDetails);
router.put('/:assignmentId', authenticationMiddleware,
assignmentController.updateAssignment);
router.delete('/:assignmentId', authenticationMiddleware,
assignmentController.deleteAssignment);
module.exports = router;