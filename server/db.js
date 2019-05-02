const { Client } = require('pg');
const DB_KEYS = require('./DB_KEYS')
const client = new Client({
  user: DB_KEYS.USER,
  host: DB_KEYS.HOST,
  database: DB_KEYS.USER,
  password: DB_KEYS.PASSWORD, // need to hide the password
  port: '5432',
})





client.connect((err) => {
  console.log(`Connecting to DB:`);
  if (err) {
    throw new Error(err);
  } else {
    console.log('connected to database');
  }
})

module.exports = client;