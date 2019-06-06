const router = require('express').Router();

const dishesDb = require('./dishes-model.js');

router.get('/', (req, res) => {
  res.status(200).json({ message: `Hello from ${req.baseUrl}` });
});

module.exports = router;
