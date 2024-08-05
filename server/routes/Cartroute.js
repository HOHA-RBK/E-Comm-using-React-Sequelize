const express = require ("express")
const cartRouter = express.Router()

const {addCart, getAllCart, getCartforUser, deleteFromCart, updateQuantity} = require ("../Controllers/Cart.js")

cartRouter.post("/add", addCart)
cartRouter.get("/get", getAllCart)
cartRouter.get("/getOne/:id", getCartforUser)
cartRouter.delete("/delete/:id", deleteFromCart)
cartRouter.put("/update/:id", updateQuantity)
module.exports= cartRouter