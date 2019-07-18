const express = require('express');

const router = express.Router();

const buyController = require('../controllers/cart');
const auth = require('../configs/auth');

router.post('/', auth.verifyToken , buyController.buy);

module.exports = router;