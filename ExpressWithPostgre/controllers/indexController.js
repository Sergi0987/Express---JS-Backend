const { usernames } = require("../db");

function getHomePage(req, res) {
    res.render('index', {usernames: usernames});
}



module.exports = getHomePage;