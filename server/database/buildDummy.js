const request = require("request");
const fs = require("fs");
const bcrypt = require("bcrypt");
const userData = require("./buildData/teamsAndMatches");
const dbConnection = require("./dbconnection");

const makeEmptyTables = fs.readFileSync(`${__dirname}/build.sql`, "utf-8");

const buildDatabase = () => {
  dbConnection.query(makeEmptyTables, err => {
    if (err) {
      console.log("Building DB error", err);
    } else {
      gradData.forEach(user => {
        bcrypt
          .hash("password", 10)
          .then(hashedPassword => {
            const QUERYinsertUsers =
              "INSERT INTO users (first_name, surname, git_username, photo_url, CV, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7)";
            dbConnection.query(
              QUERYinsertUsers,
              [
                user.first_name,
                user.surname,
                user.git_username,
                user.photo_url,
                user.CV,
                user.email,
                hashedPassword
              ],
              err => {
                if (err) {
                  console.log(err);
                }
              }
            );
          })
          .catch(() => {
            console.log("Hashing error");
          });
      });
    }
  });
};

buildDatabase();

module.exports = buildDatabase;
