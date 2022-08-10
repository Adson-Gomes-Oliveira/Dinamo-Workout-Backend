const express = require('express');
const recordController = require('../controllers/recordController');
const router = express.Router();

router.get('/details', recordController.getAll);
router.post('/', recordController.create);

module.exports = router;
