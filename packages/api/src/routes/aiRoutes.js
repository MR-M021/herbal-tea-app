const express = require('express');
const router = express.Router();
const { recommendTea } = require('../controllers/aiController');

router.post('/recommend', recommendTea);

module.exports = router;
