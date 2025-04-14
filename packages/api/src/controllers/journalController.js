const JournalEntry = require('../models/JournalEntry');

// GET
const getAllEntries = async (req, res) => {
  try {
    const filter = {};

    if (req.query.user) filter.user = req.query.user;
    if (req.query.tea) filter.tea = req.query.tea;
    if (req.query.mood) filter.mood = req.query.mood;

    const entries = await JournalEntry.find(filter).populate('tea');
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST
const createEntry = async (req, res) => {
  try {
    const newEntry = await JournalEntry.create(req.body);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllEntries,
  createEntry
};
// PUT /api/journal/:id
const updateEntry = async (req, res) => {
  try {
    const updated = await JournalEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/journal/:id
const deleteEntry = async (req, res) => {
  try {
    await JournalEntry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Journal entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry
};
