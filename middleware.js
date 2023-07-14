// Unsupported modules removed
const express = require('express');
const app = express();
const testeRoutes = require('./routes/teste');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/teste', testeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the Express API
module.exports = app;