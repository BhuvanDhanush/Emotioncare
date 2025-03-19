const express = require('express');
const router = express.Router();
const { getResponse } = require('../controllers/userController');

router.post('/chat', getResponse);

module.exports = router;