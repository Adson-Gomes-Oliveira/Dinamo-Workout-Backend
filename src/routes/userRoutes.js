const express = require('express');
const userControllers = require('../controllers/userControllers');
// const authorization = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', userControllers.create);
// router.use(authorization);
router.get('/health', userControllers.getAll);
router.get('/:id/health', userControllers.getByID);
router.put('/:id', userControllers.edit);

module.exports = router;
