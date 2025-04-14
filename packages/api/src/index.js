const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const teaRoutes = require('./routes/teaRoutes');
const journalRoutes = require('./routes/journalRoutes');
const aiRoutes = require('./routes/aiRoutes'); // ✅ THIS MUST MATCH THE FILE

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/teas', teaRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/ai', aiRoutes); // ✅ THIS MUST BE PRESENT

app.get('/', (req, res) => {
  res.send('🫖 Herbal Tea API is running!');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
  });
