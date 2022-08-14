const express = require('express');
const signInController = require('../controllers/loginController');

const router = express.Router();

router.post('/', signInController.signIn);

module.exports = router;
