const db = require('../db.js');

module.exports = {

  verifySession: (req, res, next) => {
    if (res.locals.error) return next();
    db.query(`SELECT * FROM sessions WHERE sessionid='${res.locals.token}'`, (err,result) => {
      if (err) {
        res.locals.err = err;
        return next();
      }
      
      // IF LOOKUP RETURNS NO SESSIONS, CREATE A SESSION, STASH RESULT
      if (result.rows[0] === undefined) {
        console.log('+++++Session does not exist. Creating a new session');
        const queryValues = [res.locals.token, res.locals.result.id];
        const insertQuery = `INSERT INTO sessions("sessionid","accountid") VALUES($1, $2) RETURNING *`;
        
        db.query(insertQuery, queryValues, (err, result) => {
          if (err) {
            res.locals.error = err;
            console.log(res.locals.error);
            return next();
          }
          else {
            res.locals.result = result.rows[0];
            return next();
          }
        })
        
      // IF LOOKUP RETURNS EXISTING SESSION, STASH RESULT
      } else {
        console.log('+++++Session found');
        res.locals.result = result.rows[0];
        return next();
      }
    })
  },

  lookupSession: (req, res, next) => {
    if (res.locals.error) return next();
    db.query(`SELECT ac.username, ac.lat, ac.lng FROM accounts ac INNER JOIN sessions s ON ac.id = s.accountid WHERE s.sessionid='${res.locals.token}'`, (err, result) => {
      console.log('+++++Result inside lookupSession', result);
      if (err) res.locals.error = err;
      else res.locals.result = result.rows[0];
      return next();
    })
  },
}