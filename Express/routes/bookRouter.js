const {Router} = require('express')
const bookRouter = Router();
const db = require('../db')

bookRouter.get("/", (req, res) => {
    res.send(db.books.map(b => b.name))
});

module.exports = bookRouter;