const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');

// POST a new subscription
router.post('/', async (req, res) => {
  try {
    const subscription = new Subscription(req.body.subscription);
    await subscription.save();
    res.status(201).send(subscription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.get('/all', async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/search', async (req, res) => {
  try {
    const filters = req.query;
    const subscriptions = await Subscription.find(filters);
    res.json(subscriptions);
  } catch (error) {
    console.error('Error searching subscriptions:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
