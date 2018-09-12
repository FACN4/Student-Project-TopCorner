const { db } = require('../database/dbconnection');

const getDataTeams = () => {
  const query = 'SELECT * FROM teams ORDER BY id ASC';
  return db.query(query);
};

const getDataUsers = () => {
  const query = 'SELECT id, username, email, bio, yob, photo, groups, predictions, points, paid FROM users ORDER BY points DESC';
  return db.query(query);
};

const getDataMatches = () => {
  const query = 'SELECT tm.name as name1,teams.name as name2, tm.flag as flag1, teams.flag as flag2, matches.id, matches.final_score kickoff from matches inner join teams on matches.team1= teams.id inner join teams as tm on matches.team2 = tm.id ORDER by matches.id ASC';
  return db.query(query);
};
module.exports = { getDataTeams, getDataUsers, getDataMatches };
