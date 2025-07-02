const mongoose = require('mongoose');

const SupplementSchema = new mongoose.Schema({
  name: String, // e.g., "Creatine Monohydrate"
  amount: Number, // in grams, e.g., 5
  userId: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Supplement', SupplementSchema);
