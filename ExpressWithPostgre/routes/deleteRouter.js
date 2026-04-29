const { Router } = require('express')
const deleteRouter = Router();
const userDeletePost = require("../controllers/deleteController");


deleteRouter.post('/:index', userDeletePost)

module.exports = deleteRouter;