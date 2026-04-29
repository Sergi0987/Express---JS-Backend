const { Router } = require('express');
const { usersCreateGet, usersCreatePost } = require('../controllers/formController');
const { createUsernamePost } = require('../controllers/userController');
const formRouter = Router();

formRouter.get('/', usersCreateGet)
formRouter.post('/', createUsernamePost);

module.exports = formRouter