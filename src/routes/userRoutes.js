const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();

router.post('/', userControllers.create);
router.get('/details', userControllers.getAll);

module.exports = router;
