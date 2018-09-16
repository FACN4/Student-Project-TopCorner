const bcrypt = require('bcrypt');
const getMatches = require('./queries/getData');
const { postNewUser } = require('./queries/postData');

module.exports = (req, res) => {
  const predictions = '[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]';
  const bio = '...';
  const yob = 1900;
  const photo = 'default.jpeg';
  const groups = 'none';
  const created = new Date().getTime();
  const last_login = new Date().getTime();
  const points = 0;
  const paid = false;

  // getMatches()
  //   .then(query => console.log(query.rows.length))
  //   .catch(err => console.log(err));
  const { username, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then(hashedPassword => postNewUser(
      username,
      email,
      hashedPassword,
      bio,
      yob,
      photo,
      groups,
      created,
      last_login,
      predictions,
      points,
      paid,
    ))
    .then(result => console.log(result))
    .catch(err => console.log(err));
};
