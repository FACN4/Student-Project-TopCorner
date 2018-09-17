const fs = require('fs');
const path = require('path');
const users = require('./users.json');
const teams = require('./teams.json');
const matches = require('./matches.json');
const { db } = require('./dbconnection');

const makeEmptyTables = fs.readFileSync(path.join(__dirname, 'build.sql'), 'utf-8');

const insertUserPromises = () => {
  const queryInsertUsers = 'INSERT INTO users (id, username, email, password, bio, yob, photo, groups, created, last_login, predictions, points, paid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)';
  return Promise.all(
    users.map(user => db.none(queryInsertUsers, [
      user.id,
      user.username,
      user.email,
      user.password,
      user.bio,
      user.yob,
      user.photo,
      user.groups,
      user.created,
      user.last_login,
      user.predictions,
      user.points,
      user.paid,
    ])),
  );
};

const insertTeamPromises = () => {
  const queryInsertTeams = 'INSERT INTO teams (id, name, fifacode, flag) VALUES ($1, $2, $3, $4)';
  return Promise.all(
    teams.map(team => db.none(queryInsertTeams, [team.id, team.name, team.fifaCode, team.flag])),
  );
};

const insertMatchesPromises = () => {
  const queryInsertMatches = 'INSERT INTO matches (id, team1, team2, kickoff, final_score) VALUES ($1, $2, $3, $4, $5)';
  return Promise.all(
    matches.map(match => db.none(queryInsertMatches, [
      match.id,
      match.team1,
      match.team2,
      match.kickoff,
      match.final_score,
    ])),
  );
};
const buildDatabase = () => db
  .none(makeEmptyTables)
  .then(insertTeamPromises)
  .then(insertMatchesPromises)
  .catch((err) => {
    console.log(err);
    new Error(err);
  });

if (process.argv[2] === 'run') {
  buildDatabase();
}

module.exports = { buildDatabase, makeEmptyTables };
