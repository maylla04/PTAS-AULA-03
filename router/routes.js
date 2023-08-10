const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.get('/user', userController.getUser);
routes.post('/user', userController.createUser);
routes.delete('/user/:id', userController.deleteUser);
routes.put('/user/:id', userController.updateUser);
routes.get('/user/authenticated', userController.authenticatedUser);
module.exports = routes;