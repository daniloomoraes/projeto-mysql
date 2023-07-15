// Unsupported modules removed
const express = require('express');
const app = express();
const testeListRoutes = require('./routes/testeList');
const testeAddRoutes = require('./routes/testeAdd');
const testeItemRoutes = require('./routes/testeItem');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/teste', testeListRoutes);
app.use('/api/teste', testeAddRoutes);
app.use('/api/teste', testeItemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the Express API
module.exports = app;