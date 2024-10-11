const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to My Express EJS App' });
});

module.exports = router;
