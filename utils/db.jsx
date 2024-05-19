const mysql = require('mysql2');

// Create a pool for database connection
const pool = mysql.createPool({
  host: 'localhost', // or your database host
  user: '',
  password: '',
  database: 'my_portfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();