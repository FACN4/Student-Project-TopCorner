const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res) => {
  const decodedCookie = new Promise((resolve) => {
    resolve(verify(req.body.user_auth, SECRET));
  });
  decodedCookie
    .then((user) => {
      if (typeof user !== 'string') {
        throw user;
      }
      console.log(`IM A USER >>>${user}`);
      res.json({ auth: true, username: user });
      res.end();
    })
    .catch((err) => {
      console.log('I GOT THROWN');
      res.json({ auth: false, username: null });
      res.end();
    });
};
