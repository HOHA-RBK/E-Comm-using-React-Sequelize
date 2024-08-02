const express=require('express');
const { getAllProdAndImages,getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct, getAllProductByCategories } = require('../Controllers/Products.js');
const productRoute=express.Router()
require('../Controllers/Products.js')

productRoute.get('/get',getAllProduct);
productRoute.get('/getprodpic',getAllProdAndImages)
productRoute.get('/get/:id',getOneProduct);
productRoute.post('/add',addProduct);
productRoute.delete('/delete/:id',deleteProduct);
productRoute.put('/update/:id',updateProduct);
productRoute.get('/getbycategory/:id',getAllProductByCategories)
module.exports = productRoute