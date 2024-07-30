const express=require('express');
const { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct } = require('../Controllers/Products.js');
const productRoute=express.Router()
require('../Controllers/Products.js')

productRoute.get('/get',getAllProduct);
productRoute.get('/get/:id',getOneProduct);
productRoute.post('/add',addProduct);
productRoute.delete('/delete/:id',deleteProduct);
productRoute.put('/update/:id',updateProduct);
module.exports = productRoute