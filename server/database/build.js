const fs = require('fs');
const path = require('path');
const users = require('./users.json');
const teams = require('./teams.json');
const matches = require('./matches.json');
const dbConnection = require('./dbconnection');

let counter = 0;

const addOne = () => {
  counter++;
  if (counter === users.length + teams.length + matches.length) {
    console.log(`Database build complete. All ${counter} rows complete`);
  }
};

const makeEmptyTables = fs.readFileSync(path.join(__dirname, 'build.sql'), 'utf-8');

const buildDatabase = (cb) => {
  dbConnection.query(makeEmptyTables, (err) => {
    if (err) {
      cb('Building DB error', err);
    } else {
      users.forEach((user) => {
        const queryInsertUsers = 'INSERT INTO users (id, username, email, password, bio, yob, photo, groups, created, last_login, predictions, points, paid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)';
        dbConnection.query(
          queryInsertUsers,
          [
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
          ],
          (err) => {
            if (err) {
              cb('Error adding dummy users:', err);
            }
          },
        );
        addOne();
      });
      teams.forEach((team) => {
        const queryInsertTeams = 'INSERT INTO teams (id, name, fifacode, flag) VALUES ($1, $2, $3, $4)';
        dbConnection.query(
          queryInsertTeams,
          [team.id, team.name, team.fifaCode, team.flag],
          (err) => {
            if (err) {
              cb('Error adding teams:', err);
            }
          },
        );
        addOne();
      });
      matches.forEach((match) => {
        const queryInsertMatches = 'INSERT INTO matches (id, team1, team2, kickoff, final_score) VALUES ($1, $2, $3, $4, $5)';
        dbConnection.query(
          queryInsertMatches,
          [match.id, match.team1, match.team2, match.kickoff, match.final_score],
          (err) => {
            if (err) {
              cb('Error adding matches:', err);
            }
          },
        );
        addOne();
      });
      cb(null);
    }
  });
};
if (process.argv[2] === 'run') {
  buildDatabase(console.log);
}

module.exports = buildDatabase;
