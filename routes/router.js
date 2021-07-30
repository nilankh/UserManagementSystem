const express = require('express');
const route = express.Router();
// This route method allow us to create different router in a seperate file.




app.get('/', (req, res) => {
  return res.render('index');
});

app.get('/add-user', (req, res) => {
  return res.render('add_user');
});

app.get('/update-user', (req, res) => {
  return res.render('update_user');
});
