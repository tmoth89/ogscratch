const jwt = require('jsonwebtoken');

const superSecretKey = 'j0909jfjJGpEpSiKAij4893tgnp30';

module.exports = {
  setSSIDCookie: (req, res, next) => {
    if (res.locals.err) return next();
    // console.log(res.locals.result);
    let payload = { username: res.locals.result.user };
    let token = jwt.sign(payload, superSecretKey, { expiresIn: 60 });
    
    res.cookie('superSecretJWT', token, { httpOnly: true });
    
    return next();
  },
}