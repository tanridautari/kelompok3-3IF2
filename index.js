
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');
const sequelize = require('./configs/sequelize');

const Books = require('./models/books');
const User= require('./models/User');

app.use(homeRouter);
app.use('/books', booksRouter);
app.use('/user', userRouter);



app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})