const express = require('express');
const { loginUser,addUser, getAllUsers, getOneUser, deleteUser,updateUser } = require('../Controllers/user.js');
const route=express.Router()
require('../Controllers/user.js');





route.get('/getAllUsers',getAllUsers);
route.post('/register',addUser);
route.post('/login',loginUser)
route.get('/getOneUser',getOneUser);
route.delete('/delete/:id', deleteUser)
route.put('/update/:id',updateUser)
module.exports = route