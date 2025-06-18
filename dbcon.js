const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '2005',
//   database: 'camping_retreat',
//   port: 3306
// });
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'in-mum-web1671.main-hosting.eu',
  user: process.env.DB_USER || 'u973488458_plumeria',
  password: process.env.DB_PASSWORD || 'Plumeria_retreat1234',
  database: process.env.DB_NAME || 'u973488458_plumeria',
  port: parseInt(process.env.DB_PORT || '3306')
});

module.exports = pool;