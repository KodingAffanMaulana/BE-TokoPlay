const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getProduct);
//bonus
router.get('/title', productController.searchProduct);
router.post('/', productController.createProduct);

module.exports = router;