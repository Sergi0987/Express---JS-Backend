const db = require('../db');
const usernames = db.usernames;

function usersCreateGet(req, res) {
    res.render('forms');
}

function usersCreatePost(req, res) {
    const username = req.body.username;
    console.log("Username is ", username);
    usernames.push(username);
    res.redirect('/');
};

exports.usersDeletePost = (req, res) => {
    
}


module.exports = {usersCreateGet, usersCreatePost}