const express = require('express');
const { addUser } = require('../Controllers/user.js');
const route=express.Router()
require('../Controllers/user.js');

route.post('/register',addUser)
module.exports = route