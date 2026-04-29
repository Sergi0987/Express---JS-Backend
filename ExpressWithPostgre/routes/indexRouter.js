const {Router} = require('express');
const indexRouter = Router();
const getHomePage = require('../controllers/indexController');
const { getUsernames } = require('../controllers/userController');

// indexRouter.get('/', getHomePage);
indexRouter.get('/', getUsernames);

module.exports = indexRouter