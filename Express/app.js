const express = require('express')
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const { middleWareTest } = require('./controllers/itemController');
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('dotenv').config()

const links = [
    { href: '/', text: "Home"},
    { href: 'authors', text: 'authors'},
    { href : 'About', text: 'About Page'},
];

const users = ['Rose', 'Cake', 'Biff'];

app.get('/', (req, res) => {
    res.render('index', { links: links, users: users, });
});

app.get('/about', (req, res) => {
    res.render('about', { links: links})
})

app.use(middleWareTest);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
})

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if(error) {
        throw error
    }
    console.log(`Listening on port ${PORT}`);
})

