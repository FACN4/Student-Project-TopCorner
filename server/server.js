const express = require('express');
const bodyParser = require('body-parser');
const teams = require('./database/teams');
const { getUsers, getMatches, getComments } = require('./queries/getData');
const registerHandler = require('./handlers/registerHandler');
const loginHandler = require('./handlers/loginHandler');
const cookieValidationHandler = require('./handlers/cookieValidationHandler');
const commentHandler = require('./handlers/commentHandler');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cookieParser());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client/build')));

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
app.get('/api/comments', (req, res) => {
  getComments()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
      new Error(err);
    });
});
app.get('/', (req, res) => {
  console.log(path.join(__dirname, '..', 'client/build', 'index.html'));
  res.sendFile(path.join(__dirname, '..', 'client/build', 'index.html'));
});

app.post('/api/login', loginHandler);
app.post('/api/register', registerHandler);
app.post('/api/cookieValidation', cookieValidationHandler);
app.post('/api/postComment', commentHandler);
const port = 4040 || process.env.PORT;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
