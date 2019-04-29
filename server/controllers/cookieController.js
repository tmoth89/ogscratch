const jwt = require('jsonwebtoken');

const superSecretKey = 'j0909jfjJGpEpSiKAij4893tgnp30';

module.exports = {
  setSSIDCookie: (req, res, next) => {
    if (res.locals.error) return next();
    let payload = { username: res.locals.result.user };
    let token = jwt.sign(payload, superSecretKey, { expiresIn: 60 });
    // console.log('*****token', token);
    res.cookie('ridicSecretJWT', token, { httpOnly: true });
    
    return next();
  },
}