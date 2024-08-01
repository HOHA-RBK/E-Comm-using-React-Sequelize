
const {Image} = require ("../indexdatabase.js")

const addImage = async (req, res)=>{
    try {
        const body= req.body
        console.log("body", body)
        const image = await Image.create(body)
        res.status(200).send("image added successfully")
    }
    catch (error) {
        res.status(500).send(error)
    }
}

const getImages= async (req, res)=> {
    try {
        const {productId}=req.params
        const images= await Image.findAll({where: {productId:productId}})
        res.status(200).send(images[0])
        console.log(images,'gfh');
    }
    catch(error) {
        res.status(500).send(error)
    }
}

module.exports = {
    addImage,
    getImages
}