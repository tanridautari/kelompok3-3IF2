const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');
const auth = require('../configs/auth');

router.get('/', booksController.findAllBooks);
router.get('/find/:id', booksController.findBooksId);
router.get('/findNew', booksController.findNewBooks);

router.post('/',auth.verifyToken, booksController.postBooks);
router.put('/:id',auth.verifyToken, booksController.putBooks);
router.delete('/:id',auth.verifyToken, booksController.deleteBooks);
router.get('/test',auth.verifyToken, booksController.getIndexBooks);

module.exports = router;