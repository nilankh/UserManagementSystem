const UserDB = require('../model/model');

// create and sava new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  // New user
  const user = new UserDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // Save user in the db
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occured while creating a create operation',
      });
    });
};

// retrieve and return all users/retrieve and return a single user
exports.find = (req, res) => {};

// Update a new identified user by user id
exports.update = (req, res) => {};

// Delete a user with specified user id
// create and sava new user
exports.delete = (req, res) => {};
