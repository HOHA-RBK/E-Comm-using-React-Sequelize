const express = require ("express")
const imageRouter= express.Router()
const {addImage, getImages} = require ("../Controllers/images.js")

imageRouter.post("/add", addImage )
imageRouter.get("/get/:productId", getImages)

module.exports=imageRouter