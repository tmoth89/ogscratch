const db = require('../db.js');

module.exports = {
  getAllArt: (req, res, next) => {
    db.query('SELECT * FROM art', (err, result) => {
      if (err) res.locals.error = err;
      else res.locals.result = result;
      return next();
    })
  },

  signIn: (req, res, next) => {
    console.log('+++++req.BODY in testSignIn', req.body);
    db.query(`SELECT * FROM accounts WHERE ("username"='${req.body.username}')`, (err, result) => {
      if (err) res.locals.error = err; 
      else {
        res.locals.result = result.rows[0]; // we have access to the hash
        if (res.locals.result === undefined) res.locals.error = {error: 'Invalid username'};
        console.log('+++++RESULT in SignIn', res.locals.result);
      }
      return next();
    })
  },
  
  signUp: (req, res, next) => {
    const queryValues = [req.body.firstname, req.body.lastname, req.body.password, req.body.username, req.body.email, req.body.lng, req.body.lat, req.body.bio];
    const insertQuery = `INSERT INTO accounts("firstname", "lastname", "password", "username", "email", "lng", "lat", "bio") VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    
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

  findByDistance: (req, res, next) => {
    console.log(res.locals.result);
    db.query(`SELECT * FROM art WHERE (69 * SQRT((POW(${res.locals.result.lng}-"lng",2))+(POW(${res.locals.result.lat}-"lat",2))) < ${req.body.distance})` , (err, result) => {
      if (err) {
        res.locals.error = err
        console.log('~~~~~Error inside findByDistance', err);
      }
      else {
        res.locals.result = result.rows;
        console.log(`+++++ Pulled array of artwork within ${req.body.distance} miles`);
      }
      return next();
    })
  },
}