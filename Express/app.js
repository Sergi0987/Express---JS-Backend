const express = require('express')
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const { middleWareTest } = require('./controllers/itemController');
const path = require('node:path');
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('dotenv').config()

const links = [
    { href: '/', text: "Home"},
    { href: 'authors', text: 'authors'},
];

app.get('/', (req, res) => {
    res.render('index', { links: links});
});

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

