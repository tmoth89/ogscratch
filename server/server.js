const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const queryController = require('./controllers/queryController.js');
const bcryptController = require('./controllers/bcryptController.js');
const cookieController = require('./controllers/cookieController.js');
const sessionController = require('./controllers/sessionController.js');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.get('/api/getallart/', queryController.getAllArt, (req, res) => {
  if (res.locals.error) res.send(res.locals.error);
  else res.send(res.locals.result.rows);
});

// testing for sign up route
app.post('/api/testauth/', 
bcryptController.hashPassword, 
queryController.testAuth, 
cookieController.setSSIDCookie, 
sessionController.verifySession, 
sessionController.lookupSession, 
(req, res) => {
  if (res.locals.error) res.send(res.locals.error);
  else res.send(res.locals.result);
});

// testing for login route
app.post('/api/testsignin', 
queryController.testSignIn, 
bcryptController.verifyPassword, 
cookieController.setSSIDCookie, 
sessionController.verifySession, 
sessionController.lookupSession, 
(req, res) => {
  console.log('+++++this is res.locals.result at end of signIn route:', req.cookies);
  if (res.locals.error) {
    res.status(501);
    res.send(res.locals.error);
    // console.log('~~~~~~Error at end of signIn route:', res.locals.error);
  }
  else res.send(res.locals.result);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));