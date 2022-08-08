const express = require('express');
const schemaController = require('../controllers/schemaController');
const router = express.Router();

router.get('/', schemaController.getAll);

module.exports = router;
