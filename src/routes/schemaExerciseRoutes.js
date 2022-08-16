const express = require('express');
const schemaExerciseController = require('../controllers/schemaExerciseController');

const router = express.Router();

router.get('/', schemaExerciseController.getAll);

module.exports = router;
