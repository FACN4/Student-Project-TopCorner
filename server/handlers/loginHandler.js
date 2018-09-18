const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { getPassword } = require('../queries/getData');
const { postLastLogin } = require('../queries/postData');

const { SECRET } = process.env;

module.exports = (req, res) => {
  getPassword(req.body.username)
    .then((passwordInDatabase) => {
      if (passwordInDatabase.length === 0) {
        res.json({ status: 'Username does not exist' });
        return;
      }
      bcrypt
        .compare(req.body.password, passwordInDatabase[0].password)
        .then((result) => {
          if (result === true) {
            const cookie = sign(req.body.username, SECRET);
            postLastLogin(req.body.username)
              .then(() => {
                res.cookie('user_auth', cookie);
                res.json({
                  status: 'login success',
                });
                res.end();
              })
              .catch(() => {
                res.cookie('user_auth', cookie);
                res.json({
                  status: 'login success, but failed to update last login',
                });
                res.end();
              });
          } else if (result === false) {
            res.json({ status: 'Incorrect password' });
          }
        })
        .catch(() => {
          res.json({ status: 'Unknown server error. Try again later' });
        });
    })
    .catch(() => {
      res.json({ status: 'Unknown server error. Try again later' });
    });
};
