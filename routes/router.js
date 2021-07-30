const express = require('express');
const route = express.Router();
// This route method allow us to create different router in a seperate file.
const services = require('../controllers/render')


/*
    @description Root Route
    @method GET/
*/
route.get('/',services.homeRoutes);

/*
    @description add users
    @method GET/add-user
*/
route.get('/add-user', services.add_user);


/*
    @description update-user
    @method POST/update-user
*/
route.get('/update-user', services.update_user);

module.exports = route