const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET route to fetch a specific item by ID
router.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  const query = 'SELECT * FROM teste WHERE id = ?';
  db.query(query, [itemId], (error, results) => {
    if (error) {
      console.error('Error querying teste: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
