
const authors = [
    { id: 1, name: 'Bryan'},
    { id: 2, name: 'Christian'},
    { id: 3, name: 'Jason'},

]

const books = [
    { id: 1, name: 'Harry Potter'},
    { id: 2, name: 'Spider-Man'},
    { id: 3, name: 'Superman'},

]

async function getItemById(items, itemID) {
    return items.find(e => e.id === itemID)
}

module.exports = { authors, books, getItemById };