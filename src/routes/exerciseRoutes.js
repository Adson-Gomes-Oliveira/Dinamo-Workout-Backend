const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

router.get('/schema', exerciseController.getAll);
router.post('/', exerciseController.create);

module.exports = router;
