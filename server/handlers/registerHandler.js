const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { postNewUser } = require('../queries/postData');

const { SECRET } = process.env;

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
    .then(() => {
      const cookie = sign(req.body.username, SECRET);
      res.cookie('user_auth', cookie);
      res.status(200).send('User successfully created');
    })
    .catch((err) => {
      if (err.code === 23505) {
        res.json({ status: 'Username and/or email already exist' });
      } else {
        res.json({ status: 'Error creating a new user. Try again' });
      }
    });
};
