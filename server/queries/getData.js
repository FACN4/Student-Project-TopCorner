const dbConnection = require("../database/dbconnection.js");

const getUserData = () => {
  dbConnection.query(`SELECT * FROM users ORDER BY id ASC`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res.rows);
      return res.rows;
    }
  });
};

module.export = getUserData;
