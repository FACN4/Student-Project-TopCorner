const { db } = require('../database/dbconnection');

const getTeams = () => {
  const query = 'SELECT * FROM teams ORDER BY id ASC';
  return db.query(query);
};

const getUsers = () => {
  const query = 'SELECT id, username, email, bio, yob, photo, groups, predictions, points, paid FROM users ORDER BY points DESC';
  return db.query(query);
};

const getMatches = () => {
  const query = 'SELECT tm.name as name1,teams.name as name2, tm.flag as flag1, teams.flag as flag2, matches.id, matches.final_score kickoff from matches inner join teams on matches.team1= teams.id inner join teams as tm on matches.team2 = tm.id ORDER by matches.id ASC';
  return db.query(query);
};

const getComments = () => {
  const query = 'SELECT users.username, comments.comment, comments.created FROM users inner join comments on users.id=comments.user_Id ORDER by comments.id ASC';
  return db.query(query);
};

const getPassword = (usernameInput) => {
  const query = 'SELECT password FROM users WHERE username = $1';
  return db.query(query, [usernameInput]);
};

const getUserId = (username) => {
  const query = 'SELECT id FROM users WHERE username = $1';
  return db.query(query, [username]);
};
module.exports = {
  getTeams,
  getUsers,
  getMatches,
  getPassword,
  getComments,
  getUserId,
};
