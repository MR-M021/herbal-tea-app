const Tea = require('../models/Tea');

// GET /api/teas
const getAllTeas = async (req, res) => {
  try {
    const teas = await Tea.find();
    res.json(teas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/teas
const createTea = async (req, res) => {
  try {
    const newTea = await Tea.create(req.body);
    res.status(201).json(newTea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllTeas,
  createTea
};
