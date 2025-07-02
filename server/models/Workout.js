const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: String,
  description: String,
  videoUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Workout', workoutSchema);