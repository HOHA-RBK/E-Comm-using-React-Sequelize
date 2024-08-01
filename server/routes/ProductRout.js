const express=require('express');
const { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct, getProdAndImage } = require('../Controllers/Products.js');
const productRoute=express.Router()

productRoute.get('/get',getAllProduct);
productRoute.get('/get/:id',getOneProduct);
productRoute.post('/add',addProduct);
productRoute.delete('/delete/:id',deleteProduct);
productRoute.put('/update/:id',updateProduct);
productRoute.get ('prodimage/:id', getProdAndImage)

module.exports = productRoute