const { Client } = require('pg');

const client = new Client({
  user: 'srbxdloa',
  host: 'isilo.db.elephantsql.com',
  database: 'srbxdloa',
  password: '3qX2xRdx-yM_30nR5Svg_kJcr_-I4m0A', // need to hide the password
  port: '5432',
})

client.connect((err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('connected to database');
  }
})

module.exports = client;