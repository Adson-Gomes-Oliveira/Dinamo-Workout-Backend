const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

router.get('/schemas', exerciseController.getAll);

module.exports = router;
