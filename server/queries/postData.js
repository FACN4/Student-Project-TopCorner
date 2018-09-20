const { db } = require('../database/dbconnection');

const postNewUser = (
  username,
  email,
  password,
  bio,
  yob,
  photo,
  groups,
  created,
  last_login,
  predictions,
  points,
  paid,
) => {
  const query = 'INSERT INTO users (username, email, password, bio, yob, photo, groups, created, last_login, predictions,points,paid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
  const values = [
    username,
    email,
    password,
    bio,
    yob,
    photo,
    groups,
    created,
    last_login,
    predictions,
    points,
    paid,
  ];
  return db.query(query, values);
};
const postLastLogin = (username) => {
  const timestamp = new Date().getTime();
  const query = 'UPDATE users SET last_login=$2 WHERE username=$1';
  const values = [username, timestamp];
  return db.query(query, values);
};

const postComment = (user_Id, comment) => {
  const timestamp = new Date().getTime();
  const query = 'INSERT INTO comments (user_id, comment, created) VALUES ($1, $2, $3)';
  const values = [user_Id, comment, timestamp];
  console.log(values);
  return db.query(query, values);
};
module.exports = {
  postNewUser,
  postLastLogin,
  postComment,
};
