const jwt = require('jsonwebtoken');

const superSecretKey = 'j0909jfjJGpEpSiKAij4893tgnp30';

module.exports = {
  setSSIDCookie: (req, res, next) => {
    if (res.locals.error) return next();

    // CREATING A COOKIE IF IT DOESN'T EXIST IN THE CLIENT
    if (!req.cookies[res.locals.result.user]) {
      console.log('+++++COOKIE DOES NOT EXIST');
      let payload = { username: res.locals.result.user };
      let token = jwt.sign(payload, superSecretKey, { expiresIn: 60 });
      res.locals.token = token;
      res.cookie(res.locals.result.user, token, { httpOnly: true });
    } else {
      console.log('+++++COOKIE DOES EXIST');
      res.locals.token = req.cookies[res.locals.result.user];
    }

    return next();
  },
}