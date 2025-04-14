const mongoose = require('mongoose');

const TeaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  benefits: [String],
  instructions: String,
  imageUrl: String
});

module.exports = mongoose.model('Tea', TeaSchema);
