const express = require('express');
const route = express.Router();
// This route method allow us to create different router in a seperate file.
const services = require('../controllers/render')


/*
    @description Root Route
    @method GET/
*/
route.get('/',services.homeRoutes);

route.get('/add-user', services.add_user);

route.get('/update-user', services.update_user);

module.exports = route