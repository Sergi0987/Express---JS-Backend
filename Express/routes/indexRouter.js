const {Router} = require('express');
const { getItemById } = require('../controllers/itemController');
const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send("Index router"))
indexRouter.get('/:collection/:id', getItemById);

module.exports = indexRouter;