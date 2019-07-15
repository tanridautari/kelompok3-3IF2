
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');

const sequelize = require('./configs/sequelize');

const Books = require('./models/books');

app.use(homeRouter);
app.use('/books', booksRouter);



app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})