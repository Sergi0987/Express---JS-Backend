
const authors = [
    { id: 1, name: 'Bryan'},
    { id: 2, name: 'Christian'},
    { id: 3, name: 'Jason'},

]

async function getAuthorById(authorID) {
    return authors.find(author => author.id === authorID);
}

module.exports = { getAuthorById };