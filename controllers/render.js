const axios = require('axios');

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios.get('http://localhost:8000/api/users')
  .then(function(response) {
    // console.log(response)  
    res.render('index', { users: response.data });
  })
  .catch(err => {
      res.send(err)
  })
};

exports.add_user = (req, res) => {
  return res.render('add_user');
};

exports.update_user = (req, res) => {
  return res.render('update_user');
};
