const fs = require("fs");
const path = require("path");
const users = require("./users.json");
const teams = require("./teams.json");
const matches = require("./matches.json");
const dbConnection = require("./dbconnection");

const makeEmptyTables = fs.readFileSync(
  path.join(__dirname, "build.sql"),
  "utf-8"
);

const buildDatabase = () => {
  dbConnection.query(makeEmptyTables, err => {
    if (err) {
      console.log("Building DB error", err);
    } else {
      users.forEach(user => {
        const queryInsertUsers =
          "INSERT INTO users (id, username, email, password, bio, yob, photo, groups, created, last_login, predictions, points, paid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";
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
            user.paid
          ],
          err => {
            if (err) {
              console.log("Error adding dummy users:", err);
            }
          }
        );
      });
      teams.forEach(team => {
        const queryInsertTeams =
          "INSERT INTO teams (id, name, fifacode, flag) VALUES ($1, $2, $3, $4)";
        dbConnection.query(
          queryInsertTeams,
          [team.id, team.name, team.fifaCode, team.flag],
          err => {
            if (err) {
              console.log("Error adding teams:", err);
            }
          }
        );
      });
      matches.forEach(match => {
        const queryInsertMatches =
          "INSERT INTO matches (id, team1, team2, kickoff, final_score) VALUES ($1, $2, $3, $4, $5)";
        dbConnection.query(
          queryInsertMatches,
          [
            match.id,
            match.team1,
            match.team2,
            match.kickoff,
            match.final_score
          ],
          err => {
            if (err) {
              console.log("Error adding matches:", err);
            }
          }
        );
      });
    }
  });
  console.log("Build success");
};

buildDatabase();
