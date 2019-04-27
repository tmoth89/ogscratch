const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const queryController = require('./controllers/queryController.js');
const bcryptController = require('./controllers/bcryptController.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

queryController.hello();

app.get('/api/getallart/', queryController.getAllArt, (req, res) => {
  if (res.locals.error) res.send(res.locals.error);
  else res.send(res.locals.result);
});

app.post('/api/testauth/', bcryptController.hashPassword, queryController.testAuth, (req, res) => {
  if (res.locals.error) res.send(res.locals.error);
  else res.send(res.locals.result);
})

app.post('/api/testsignin', bcryptController.hashPassword, queryController.testSignIn,  (req, res) => {
  if (res.locals.error) res.send(res.locals.error);
  else res.send(res.locals.result);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));