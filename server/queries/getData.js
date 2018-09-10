const dbConnection = require('../database/dbconnection.js');

const getData = (cb) => {
  const query = 'SELECT * FROM teams ORDER BY id ASC';
  dbConnection.query(query, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
