const { Pool } = require('pg');

const {
  DB_USER: user,
  DB_PASSWORD: password,
  DB_HOST: host,
  DB_PORT: port,
  DB_DATABSE: database,
} = process.env;

const pool = new Pool({
  user,
  password,
  host,
  port,
  database,
});

module.exports = pool;
