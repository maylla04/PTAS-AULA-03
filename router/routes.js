const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.get('/user', userController.findUsers);
routes.post('/user', userController.createUser);

module.exports = routes;