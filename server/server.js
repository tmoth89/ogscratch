const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const testQueryController = require('./controllers/testQueryController.js');
const testBcryptController = require('./controllers/testBcryptController.js');
const testCookieController = require('./controllers/testCookieController.js');
const testSessionController = require('./controllers/testSessionController.js');



const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/logout', (req, res) =>
{
    cookie = req.cookies;
   for (var prop in cookie) {
       if (!cookie.hasOwnProperty(prop)) {
           continue;
       }
       res.cookie(prop, '', {expires: new Date(0)});
       res.send();
   }

})


app.get('/api/getallart/', testQueryController.getAllArt, (req, res) => {
  if (res.locals.error) res.send(res.locals.error);
  else res.send(res.locals.result.rows);
});

app.get('/api/checksession',
  testCookieController.checkCookies,
  testSessionController.verifySession,
  (req, res) => {
    console.log("Checking Session");
    if (res.locals.error) {
      console.log(`Error in checking session`);
      res.status(444)
    };
    res.send("Login Checked");
  })

// testing for sign up route
app.post('/api/testauth/',
  testBcryptController.hashPassword,
  testQueryController.testAuth,
  testCookieController.setSSIDCookie,
  testSessionController.verifySession,
  testSessionController.lookupSession,
  (req, res) => {
    console.log(req.body)
    if (res.locals.error) res.send(res.locals.error);
    else res.send(res.locals.result);
  });

app.post('/api/signup',
  testBcryptController.hashPassword,
  testQueryController.signUp,
  testCookieController.setSSIDCookie,
  testSessionController.verifySession,
  testSessionController.lookupSession,
  (req, res) => {
    if (res.locals.error) res.send(res.locals.error);
    else res.send(res.locals.result);
  })


// testing for login route
app.post('/api/testsignin',
  testQueryController.testSignIn,
  testBcryptController.verifyPassword,
  testCookieController.setSSIDCookie,
  testSessionController.verifySession,
  (req, res) => {
    if (res.locals.error) {
      res.status(403);
      res.send(res.locals.error);
    }
    else
    {
      res.send(res.locals.result);
    }
  });


app.post('/api/findbydistance',
  testQueryController.testSignIn,
  testCookieController.setSSIDCookie,
  testSessionController.lookupSession,
  testQueryController.findByDistance, (req, res) => {

    if (res.locals.error) {
      res.send(res.locals.error);
      res.status(501);
    }
    else res.send(res.locals.result);
  })

app.get('/api/logout', (req,res) => {

})

app.get('/*', (req, res) => {
  console.log('Hit Default route - sending to index');
  res.sendFile(path.join(__dirname, '../index.html'))
});

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
