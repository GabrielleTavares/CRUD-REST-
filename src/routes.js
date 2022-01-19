const express = require('express')
const Router = express.Router()
const UserController = require('./controller/userController')

Router.post('/users/register', UserController.register);
Router.get('/users', UserController.show);
Router.put('/users/:id', UserController.update);
Router.delete('/users/:id', UserController.delete)



module.exports = Router