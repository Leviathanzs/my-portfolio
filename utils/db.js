const mysql = require('mysql2');

// Create a pool for database connection
const pool = mysql.createPool({
  host: 'localhost', // or your database host
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();