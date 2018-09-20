const { postComment } = require('../queries/postData');

module.exports = (req, res) => {
  postComment(req.body.user_id, req.body.comment)
    .then(() => {
      res.status(200);
      res.json({
        status: 'comment added to database',
      });
      res.end();
    })
    .catch(() => {
      console.log('couldnt post the comment');
      res.status(500);
      res.json({
        status: 'server error. Comment not added to database ',
      });
    });
};
