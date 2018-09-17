const bcrypt = require('bcrypt');
const { sign, verify } = require('jsonwebtoken');

const { getPassword } = require('../queries/getData');
const { postLastLogin } = require('../queries/postData');

module.exports = (req, res) => {
  getPassword(req.body.username).then((passwordInDatabase) => {
    if (passwordInDatabase.length === 0) {
      res.json({ status: 'Username does not exist' });
      return;
    }
    bcrypt
      .compare(req.body.password, passwordInDatabase[0].password)
      .then((result) => {
        if (result === true) {
          postLastLogin(req.body.username).then(() => console.log);
          res.json({ status: 'login success' });
        } else {
          res.json({ status: 'Incorrect password' });
        }
      })
      .catch((err) => {
        getPassword(req.body.username).then(password => console.log(password));
        res.json({ status: 'Unknown server error. Try again later' });
      });
  });
};
