const { db } = require('../database/dbconnection');

const getDataTeams = () => {
  const query = 'SELECT * FROM teams ORDER BY id ASC';
  return db.query(query);
};

const getDataUsers = () => {
  const query = 'SELECT id, username, email, bio, yob, photo, groups, predictions, points, paid FROM users ORDER BY id ASC';
  return db.query(query);
};

module.exports = { getDataTeams, getDataUsers };
