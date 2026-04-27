const {Router} = require('express');
const authorRouter = Router();
const db = require('../db')

authorRouter.get('/', (req,res, next) => {
    res.send(db.authors.map(a => a.name));
});

module.exports = authorRouter;