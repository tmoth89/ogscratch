const bcrypt = require('bcryptjs');

// any methods called out of this exports object will be accessed by the reference bcryptController (or whatever you name it) inside the server.js require statement
module.exports = {
  hashPassword: (req, res, next) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    return next();
  },

  verifyPassword: (req, res, next) => {
    if (bcrypt.compareSync(req.body.password, res.locals.result.password)) {
      console.log('Login success');
    } 
    else {
      res.locals.error = { error: 'Invalid Password' };
      console.log('Login unsuccessfull');
    }
    return next();
  },
}