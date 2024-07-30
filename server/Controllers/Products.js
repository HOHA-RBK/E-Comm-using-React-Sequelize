const {Product}=require('../indexdatabase.js')

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
   }
    
}