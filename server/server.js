const express = require('express');
const bodyParser = require('body-parser');
const teams = require('./database/teams');
const { getUsers, getMatches } = require('./queries/getData');
const registerHandler = require('./handlers/registerHandler');
const loginHandler = require('./handlers/loginHandler');
const cookieValidationHandler = require('./handlers/cookieValidationHandler');
const cookieParser = require('cookie-parser');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cookieParser());

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.get('/api/users', (req, res) => {
  getUsers()
    .then(users => res.json(users))
    .catch((err) => {
      console.log(err);
      new Error(err);
    });
});
app.get('/api/teams', (req, res) => {
  res.json(teams);
});
app.get('/api/matches', (req, res) => {
  getMatches()
    .then(users => res.json(users))
    .catch((err) => {
      console.log(err);
      new Error(err);
    });
});
app.post('/api/login', loginHandler);
app.post('/api/register', registerHandler);
app.post('/api/cookieValidation', cookieValidationHandler);

const port = 4040;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
