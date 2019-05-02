
const db = require('../db.js');

module.exports = {

  verifySession: (req, res, next) => {
    if (res.locals.error) return next();
    console.log("Starting verify session:")

    db.query(`SELECT * FROM sessions WHERE sessionid='${res.locals.token}'`, (err,result) => {
      if (err) {
        res.locals.err = err;
        return next();
      }

      // IF LOOKUP RETURNS NO SESSIONS, CREATE A SESSION, STASH RESULT
      if (result.rows[0] === undefined) {
        console.log('+++++Session does not exist. Creating a new session');
        const queryValues = [res.locals.token, res.locals.result.id];
        const insertQuery = `INSERT INTO sessions("sessionid","testid") VALUES($1, $2) RETURNING *`;

        db.query(insertQuery, queryValues, (err, result) => {
          if (err) res.locals.error = err;
          else {
            res.locals.result = result.rows[0];
            return next();
          }
        })

      // IF LOOKUP RETURNS EXISTING SESSION, STASH RESULT
      } else {
        res.locals.result = result.rows[0];
        return next();
      }
    })
  },

  lookupSession: (req, res, next) => {
    if (res.locals.error) return next();

    //console.log('Error After This.')
     db.query(`SELECT t.user FROM testauth t INNER JOIN sessions s ON t.id = s.testid WHERE s.sessionid='${res.locals.token}'`, (err,result) => {
       if (err) res.locals.error = err;
       else
       {
         res.locals.result = result.rows[0];
         return next();
       }
     })

    db.query(`SELECT t.username FROM testauth t INNER JOIN sessions s ON t.id = s.testid WHERE s.sessionid='${res.locals.token}'`, (err,result) => {
      if (err) res.locals.error = err;
      else res.locals.result = result.rows[0];
      return next();
    })

  },
}
