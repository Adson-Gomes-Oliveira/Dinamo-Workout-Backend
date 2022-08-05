const express = require('express');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

router.get('/', userControllers.getAll);

module.exports = router;
