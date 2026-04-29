const { usernames } = require("../db");

function userDeletePost(req, res) {
    const { index } = req.params;
    
    usernames.splice(Number(index), 1);
    res.redirect('/');
}

module.exports = userDeletePost