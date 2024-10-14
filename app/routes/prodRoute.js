const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');

// Route for adding a new product
router.post('/products', prodController.addProduct);

// Route for getting all products
router.get('/products', prodController.getAllProducts);

// Route for getting a single product by ID
router.get('/products/:id', prodController.getProductById);

// Route for updating a product by ID
router.put('/products/:id', prodController.updateProduct);

// Route for deleting a product by ID
router.delete('/products/:id', prodController.deleteProduct);

module.exports = router;