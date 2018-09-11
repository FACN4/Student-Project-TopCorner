const { db } = require('../database/dbconnection');

const getData = () => {
  const query = 'SELECT * FROM teams ORDER BY id ASC';
  return db.query(query);
};

module.exports = getData;
