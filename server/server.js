const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const teams = require('./database/teams');
const matches = require('./database/matches');
const { getUsers, getMatches, getPassword } = require('./queries/getData');
const { postNewUser } = require('./queries/postData');
const registerHandler = require('./registerHandler');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

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
app.post('/api/login', (req, res) => {
  console.log('im in the server');
  res.body('success');
  // getPassword(req.body.username)
  // .then(hash => bcrypt.compare(req.body.password, hash)
  // .then(result => {
  //   if (result === true) {
  //     res.redirect('/')
  //   } else {
  //     res.body('login failed')
  //   }
  // })
  // .catch(err) => {
  //   console.log(err);
  //   new Error(err);
  // })
});
app.post('/api/register', registerHandler);

const port = 4040;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
