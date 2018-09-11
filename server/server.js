const express = require('express');
const teams = require('./database/teams');
const users = require('./database/users');
const matches = require('./database/matches');

const app = express();
app.get('/api/users', (req, res) => {
  res.json(users);
});
app.get('/api/teams', (req, res) => {
  res.json(teams);
});
app.get('/api/matches', (req, res) => {
  res.json(matches);
});

const port = 4040;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
