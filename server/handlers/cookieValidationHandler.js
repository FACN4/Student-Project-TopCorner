const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res) => {
  const decodedCookie = new Promise((resolve) => {
    resolve(verify(req.cookies.user_auth, SECRET));
  });
  decodedCookie
    .then((user) => {
      res.json({ username: user });
      res.end();
    })
    .catch((err) => {
      res.json({ username: null });
      res.end();
    });
};
