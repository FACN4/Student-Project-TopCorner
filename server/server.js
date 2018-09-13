const express = require('express');
const session = require('express-session');
const teams = require('./database/teams');
const matches = require('./database/matches');
const { getDataUsers, getDataMatches } = require('./queries/getData');

const app = express();

app.get('/api/users', (req, res) => {
  getDataUsers()
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
  getDataMatches()
    .then(users => res.json(users))
    .catch((err) => {
      console.log(err);
      new Error(err);
    });
});

const port = 4040;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
