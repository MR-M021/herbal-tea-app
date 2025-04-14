const express = require('express');
const router = express.Router();

const {
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry
} = require('../controllers/journalController');

// GET /api/journal
router.get('/', getAllEntries);

// POST /api/journal
router.post('/', createEntry);

// PUT /api/journal/:id
router.put('/:id', updateEntry);

// DELETE /api/journal/:id
router.delete('/:id', deleteEntry);

module.exports = router;
