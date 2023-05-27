const express = require('express');
const router = express.Router();
const { getProducts, getProductById, updateProduct, createProduct, deleteProduct } = require('../controllers/productsController');
// const {adminOnly, VerifyUser} = require('../middleware/authMiddleware.js')

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.patch('/product/:id', updateProduct);
router.post('/products', createProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;
