const req = require('express/lib/request')
const product =require('../models/prodModel')





exports.addProduct =async(req,res)=>{ 

try {
  const newProduct = new Product(req.body) 
  const savedProduct=await newProduct.save() 

  res.status(201).json(savedProduct);



}
 catch (err) {
    res.status(400).json({ message: err.message });
}
}


// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Produit.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Produit.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};