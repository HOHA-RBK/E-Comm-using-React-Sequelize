const express=require('express')
const categoryRoute = express.Router()
const { addCategory, getAllcategory,deleteCategory, updateCategory}=require('../Controllers/category.js')


categoryRoute.get('/get',getAllcategory);
categoryRoute.post('/add',addCategory);
categoryRoute.delete('/delete/:id',deleteCategory);
categoryRoute.put('/update/:id',updateCategory)

module.exports =  categoryRoute