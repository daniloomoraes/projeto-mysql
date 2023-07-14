const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'danilo',
  password: '240907',
  database: 'teste'
});

module.exports = connection;
