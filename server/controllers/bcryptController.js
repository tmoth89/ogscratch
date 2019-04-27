const bcrypt = require('bcryptjs');

module.exports = {
  hashPassword: (req, res, next) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    return next();
  },
}