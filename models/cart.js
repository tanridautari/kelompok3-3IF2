const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Cart extends Sequelize.Model {}

Cart.init({
	bookId : Sequelize.INTEGER,
	userId : Sequelize.INTEGER

}, { sequelize, modelName: 'cart' });

module.exports = Cart;