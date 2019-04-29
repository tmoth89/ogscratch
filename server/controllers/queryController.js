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
    console.log('+++++req.BODY in testSignIn', req.body);
    db.query(`SELECT * FROM testauth WHERE ("user"='${req.body.username}')`, (err, result) => {
      if (err) res.locals.error = err; // KEITH: NOT GETTING ERROR WITH INVALID USERNAME
      else {
        res.locals.result = result.rows[0]; // we have access to the hash
        if (res.locals.result === undefined) res.locals.error = {error: 'Invalid username'};
        console.log('+++++RESULT in testSignIn', res.locals.result);
      }
      return next();
    })
  },
  
  testAuth: (req, res, next) => {
    const queryValues = [req.body.username, req.body.password];
    const insertQuery = `INSERT INTO testauth("user","password") VALUES($1, $2) RETURNING *`;
    
    // console.log('** queryValues inside testAuth', queryValues);

    db.query(insertQuery, queryValues, (err, result) => {
      if (err) res.locals.error = err;
      else {
        res.locals.result = result.rows[0];
        console.log('+++++Item added to db', res.locals.result);
      }
      return next();
    })
  },
}