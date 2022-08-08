const express = require('express');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

router.get('/', userControllers.getAll);
router.post('/', userControllers.create);

module.exports = router;
