const {User} = require('../indexdatabase');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    getAllUsers: async(req,res)=>{
        try{
           const users= await User.findAll()
            res.status(200).send(users)
        }
        catch(err){
            res.status(404).send(err)
        }
    },
    getOneUser : async(req,res)=>{
        try{
            const oneUser= await User.findByPk(req.params.id)
            res.status(200).send(oneUser)
        }
        catch(err){
            res.status(404).send(err)
        }
    },
    addUser : async(req,res)=>{

    const data=req.body
    const user = new User(data)
    const salt = bcrypt.genSaltSync(10)
    const crypted = await bcrypt.hashSync(data.password,salt)
    user.password = crypted
    user.save()
.then((saved)=>{
    res.status(200).send(saved)
})
.catch((err)=>{
    res.status(404).send(err)
})
    }
}