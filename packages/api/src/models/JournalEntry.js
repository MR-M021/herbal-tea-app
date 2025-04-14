const mongoose = require('mongoose');

const JournalEntrySchema = new mongoose.Schema({
  user: { type: String, required: true },
  tea: { type: mongoose.Schema.Types.ObjectId, ref: 'Tea', required: true },
  note: String,
  mood: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JournalEntry', JournalEntrySchema);
