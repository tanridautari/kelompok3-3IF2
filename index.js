
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');

const sequelize = require('./configs/sequelize');

const Books = require('./models/books');
const User= require('./models/User');
const Cart= require('./models/cart');

app.use(homeRouter);

app.use('/books', booksRouter);
app.use('/user', userRouter);
app.use('/buy', cartRouter);

app.listen(3203, () => {
    console.log('server started');
   		 // sequelize.sync();
});