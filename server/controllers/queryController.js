const db = require('../db.js');

module.exports = {
  getAllArt: (req, res, next) => {
    db.query('SELECT * FROM art', (err, result) => {
      if (err) res.locals.error = err;
      else res.locals.result = result;
      return next();
    })
  },

  testSignIn: (req, res, next) => {
    db.query(`SELECT * FROM testauth WHERE (user='${req.body.user}') AND (password='${req.body.password}')`, (err, result) => {
      if (err) res.locals.error = err;
      else {
        console.log('Test sign in success');
        res.locals.result = result;
      }
      return next();
    })
  },
  
  testAuth: (req, res, next) => {
    const queryValues = [req.body.user, req.body.password];
    const insertQuery = `INSERT INTO testauth("user","password") VALUES($1, $2) RETURNING *`;
    
    // console.log('** queryValues inside testAuth', queryValues);

    db.query(insertQuery, queryValues, (err, result) => {
      if (err) res.locals.error = err;
      else {
        console.log('Item added to db');
        res.locals.result = result;
      }
      return next();
    })
  },

  hello: () => console.log('hello from db to client')
}