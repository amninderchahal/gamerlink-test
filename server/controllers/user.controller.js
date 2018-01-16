import User from '../models/user';

// Fetch user from database
export function getUser(req, res) {
  let name = req.params.username;
  User.findOne({displayName : name}).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}