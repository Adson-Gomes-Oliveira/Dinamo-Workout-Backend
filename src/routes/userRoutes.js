const express = require('express');
const userControllers = require('../controllers/userControllers');
const authorization = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', userControllers.create);
router.use(authorization);
router.get('/details', userControllers.getAll);

module.exports = router;
