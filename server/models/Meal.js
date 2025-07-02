const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
  instructions: String,
  protein: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Meal', mealSchema);