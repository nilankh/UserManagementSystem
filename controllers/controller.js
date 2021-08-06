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
exports.find = (req, res) => {
  // GEt a single User
  if (req.query.id) {
    const id = req.query.id;
    UserDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({ message: 'Not Found user with id' + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: 'Error in reteriving user with id' + id });
      });
  } else {
    UserDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Error occured in reteriving user information',
        });
      });
  }
};

// Update a new identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' });
  }
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}, Maybe user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error in updating user information' });
    });
};

// Delete a user with specified user id
// create and sava new user
exports.delete = (req, res) => {
  const id = req.params.id;
  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with ${id}, Maybe id is not found`,
        });
      } else {
        res.send({
          message: 'User deleted successfully',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Could not delete user with ${id}` });
    });
};
