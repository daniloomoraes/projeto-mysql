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


// POST route to add a new item
router.post('/add', (req, res) => {
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

// DELETE route to delete a specific item by ID
router.delete('/item/delete/:id', (req, res) => {
  const itemId = req.params.id;
  const query = 'DELETE FROM teste WHERE id = ?';

  db.query(query, [itemId], (error) => {
    if (error) {
      handleDatabaseError(error, res);
    } else {
      // Fetch all items after deleting the item
      db.query('SELECT * FROM teste', (fetchError, results) => {
        if (fetchError) {
          handleDatabaseError(fetchError, res);
        } else {
          res.json(results);
        }
      });
    }
  });
});

// PUT route to edit a specific item by ID
router.put('/item/edit/:id', (req, res) => {
  const itemId = req.params.id;
  const { nome, valor } = req.body;
  const query = 'UPDATE teste SET nome = ?, valor = ? WHERE id = ?';

  db.query(query, [nome, valor, itemId], (error) => {
    if (error) {
      handleDatabaseError(error, res);
    } else {
      // Fetch all items after editing the item
      db.query('SELECT * FROM teste', (fetchError, results) => {
        if (fetchError) {
          handleDatabaseError(fetchError, res);
        } else {
          res.json(results);
        }
      });
    }
  });
});

module.exports = router;
