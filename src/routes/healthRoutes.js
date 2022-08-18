const express = require('express');
const healthController = require('../controllers/healthController');

const router = express.Router();

router.get('/', healthController.getAll);
router.put('/', healthController.edit);

module.exports = router;
