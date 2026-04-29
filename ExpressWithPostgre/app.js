const express = require('express');
const app = express();
const path = require('node:path');
const { body, validationResult } = require('express-validator');
const usersCreateGet = require('./controllers/formController.js');
const formRouter = require('./routes/formRouter');
const indexRouter = require('./routes/indexRouter');
const deleteRouter = require('./routes/deleteRouter')
app.use(express.urlencoded({ extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);
app.use('/new', formRouter);
//app.use('/delete', deleteRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error) {
        throw error
    }
    console.log(`Listening on PORT: ${PORT}`);
})