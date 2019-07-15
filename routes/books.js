const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

router.get('/', booksController.getIndexBooks);
router.post('/', booksController.postBooks);
router.put('/:id', booksController.putBooks);
router.delete('/:id', booksController.deleteBooks);

module.exports = router;