const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Books extends Sequelize.Model {}

Books.init({
  judul_buku: Sequelize.STRING,
  penulis: Sequelize.STRING,
  ISBN: Sequelize.INTEGER,
  jumlah_halaman: Sequelize.INTEGER,
  tgl_terbit: Sequelize.DATE,
  harga: Sequelize.INTEGER,
  penerbit: Sequelize.STRING
}, { sequelize, modelName: 'books' });

module.exports = Books;