const express = require('express');
const router = express.Router();
const { getAllTeas } = require('../controllers/teaController');

router.get('/', getAllTeas);

module.exports = router;
