const express = require('express');
const router = express.Router();
const db = require('../config/database');

// POST route to add a new item
router.post('/', (req, res) => {
  const { nome, valor } = req.body;

  const query = 'INSERT INTO teste (nome, valor) VALUES (?, ?)';
  db.query(query, [nome, valor], (error, result) => {
    if (error) {
      console.error('Error adding item: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      // Fetch all items after adding the new item
      db.query('SELECT * FROM teste', (error, results) => {
        if (error) {
          console.error('Error querying teste: ', error);
          res.status(500).send('Internal Server Error');
        } else {
          res.json(results);
        }
      });
    }
  });
});

module.exports = router;
