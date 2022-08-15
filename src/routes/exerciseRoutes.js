const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

router.get('/details', exerciseController.getAll);
router.post('/', exerciseController.create);

module.exports = router;
