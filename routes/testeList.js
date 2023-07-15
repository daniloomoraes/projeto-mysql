const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET route to fetch all items
router.get('/', (req, res) => {
  db.query('SELECT * FROM teste', (error, results) => {
    if (error) {
      console.error('Error querying teste: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
