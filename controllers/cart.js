const Cart = require('../models/Cart');
const Books = require('../models/books');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


module.exports.buy = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if(error) {
			res.sendStatus(403);
		} else { 
			if (authData['roles']=="user") {
				var userId = authData['id'];
				var bookId = req.body.bookId;
				Cart.create({
					userId: userId,
					bookId: bookId
				}).then((cart) => {
					res.json(cart);
				}).catch((error) => {
					console.log(error);
				})				
			}else {
				res.json('Anda Adalah Admin Harus login Menggunanakn Roles User');
			}
		}
	})
}
