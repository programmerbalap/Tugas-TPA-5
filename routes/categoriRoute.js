const express = require('express');
const router = express.Router();
const { getCategories, getCategoriById, creatCategori, updateCategori, deleteCategori } = require('../controllers/categoriesController');

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriById);
router.post('/categories', creatCategori);
router.patch('/categories/:id', updateCategori);
router.delete('/categories/:id', deleteCategori);

module.exports = router;
