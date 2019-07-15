const Books = require('../models/books');

module.exports.getIndexBooks = (req, res) => {
}

module.exports.postBooks = (req, res) => {
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

module.exports.putBooks = (req, res) => {
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

