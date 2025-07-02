const express = require('express');
const router = express.Router();
const Supplement = require('../models/Supplement');

router.post('/', async (req, res) => {
  try {
    const supplement = new Supplement(req.body);
    await supplement.save();
    res.status(201).json(supplement);
    } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const supplements = await Supplement.find();
    res.json(supplements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;