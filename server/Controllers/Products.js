const {Product}=require('../indexdatabase.js')
const {Image} = require('../indexdatabase.js')

module.exports ={
    getAllProduct : async(req,res)=>{
        try{
            const product=await Product.findAll()
            res.status(200).send(product)
        }
        catch(err){
            res.status(404).send(err)
        }
    },
    addProduct : async(req,res)=>{
        try{
            const product = await Product.create(req.body)
            res.status(200).send(product)
        }
        catch(err){
            throw err 
        }
    },
    deleteProduct : async(req,res)=>{
        try{
           const  id=req.params.id
            const product=await Product.destroy({where : { id:id}})
            res.status(200).send("deleted YOYOYO!")
        }
        catch(err){
            res.status(404).send(err)
        }
    } ,
    updateProduct : async(req,res)=>{
        const { id } = req.params
        const { name} = req.body
      
        try {
          const updated = await Product.update(
            { name},
            { where: { id } }
          )
            res.status(200).send(updated);
         
        } 
        catch (error) {
          console.error(error);
          res.status(404).send(error);
        }
    },
   getOneProduct : async(req,res)=>{
    try{
      const {id}=req.params
      gete=await Product.findByPk(id)
      res.status(200).send(gete)
    }
    catch(err){
        res.status(404).send(err)
    }
   },
   getAllProductByCategories : async(req,res)=>{
    try{
        const product=await Product.findAll({where :{categoryId:req.params.id},include: [{
            model: Image,
            attributes: ['Url'],
            where: { isFeatured: true }
          }]})
        res.status(200).send(product)
    }
    catch(err){
        res.status(404).send(err)
    }
},
getProdAndImageByProductId : async (req, res) => {
    const productId = req.params.productId;
    console.log('idd=>',productId);

    try {
        const products = await Product.findAll({ where: { id: productId },include:{model:Image}});
        console.log();

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for this user' });
        }

        res.status(200).send( products );
    } catch (err) {
        console.error('this is the error',err);
        res.status(500).json({ message: 'Error fetching products for user' });

}
   }
    
}