const Books = require('../models/books');
const jwt = require('jsonwebtoken');

module.exports.getIndexBooks = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if(error) {
			res.sendStatus(403);
		} else { 
			res.json({
				message: 'OK',
				authData: authData
			})
		}
	})
}

module.exports.postBooks = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if(error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				Books.create({
					id: req.body.id,
					judul_buku: req.body.judul_buku,
					penulis: req.body.penulis,
					ISBN: req.body.ISBN,
					jumlah_halaman: req.body.jumlah_halaman,
					tgl_terbit: req.body.tgl_terbit,
					harga: req.body.harga,
					penerbit: req.body.penerbit
				}).then((books) => {
					res.json(books);
				}).catch((error) => {
					console.log(error);
				})
			} 
			
		}
	})
}	

module.exports.putBooks = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if(error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				let values = {
					judul_buku: req.body.judul_buku,
					penulis: req.body.penulis,
					ISBN: req.body.ISBN,
					jumlah_halaman: req.body.jumlah_halaman,
					tgl_terbit: req.body.tgl_terbit,
					harga: req.body.harga,
					penerbit: req.body.penerbit
				} 
				let conditions = {
					where:{
						id: req.params.id
					}
				}

				Books
				.update(values, conditions)
				.then((books) => {
					res.json(books);
				}).catch((error) => {
					console.log(error);
				})
			} 
			
		}
	})
}	

module.exports.deleteBooks = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if(error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				Books.destroy({
					where: {
						id: req.params.id
					}
				}).then((result) => res.json(result))
			} 
		}
	})
}

module.exports.findAllBooks = (req, res) => {
	Books
	.findAll() 
	.then((books) => {
		res.json(books);
	})
	.catch((error) => {
		console.log(error);
	})
}
module.exports.findBooksId = (req, res) => {
 Books
  .findByPk(req.params.id)
  .then(books => {
   res.json(books);
  })
}