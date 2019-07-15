const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');
const auth = require('../configs/auth');

router.get('/', booksController.findAllBooks);
router.post('/', booksController.postBooks);
router.put('/:id', booksController.putBooks);
router.delete('/:id', booksController.deleteBooks);

module.exports = router;