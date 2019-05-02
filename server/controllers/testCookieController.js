const jwt = require('jsonwebtoken');
const db = require('../db.js');

const superSecretKey = 'j0909jfjJGpEpSiKAij4893tgnp30';

module.exports = {
  setSSIDCookie: (req, res, next) => {
    if (res.locals.error) return next();

    // CREATING A COOKIE IF IT DOESN'T EXIST IN THE CLIENT
    if (!req.cookies[res.locals.result.username]) {
      console.log('+++++COOKIE DOES NOT EXIST');
      let payload = { username: res.locals.result.username };
      let token = jwt.sign(payload, superSecretKey, { expiresIn: 60 });
      res.locals.token = token;
      res.cookie(res.locals.result.username, token, { httpOnly: true });
    } else {
      console.log('+++++COOKIE DOES EXIST');
      res.locals.token = req.cookies[res.locals.result.user];
    }

    return next();
  },
  checkCookies: (req, res, next) => {

    if (req.cookies) {
      let username;
      let cookie;
      for (const user in req.cookies) {
        if (req.cookies.hasOwnProperty(user)) {
          username = user;
          cookie = req.cookies[user];
        }
      }

      res.locals.token = cookie;

      //given username, get user ID from DB.
      console.log(`Username: ${username}`);
      const query = `SELECT id FROM testauth where username='${username}'`

      db.query(query, (err, result) => {
        if (err) res.locals.error = err;

        const idObj = result.rows[0];
        if(username == undefined) {
          console.log("Setting locals Error");
          res.locals.error ="Error: No User found from cookie";
        }
        res.locals.result = idObj;
        return next();
      })
    } else {
      console.log("No cookie, require login");
      res.locals.error("No cookie found")
    }
  }
}