const express = require('express');
const recordController = require('../controllers/registryController');

const router = express.Router();

router.get('/schema', recordController.getAll);
router.post('/', recordController.create);

module.exports = router;
