const express = require('express');
const app = express();
const testeRoutes = require('./routes/teste');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use('/api/teste', testeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
