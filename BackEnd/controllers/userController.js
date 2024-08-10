const {userModel} = require('../models/userSchema')
const bcrypt = require('bcrypt')
const { generateToken } = require('../utils/token');


const Login =async(req,res)=>{
    try{
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({error:true,message:'enter all fields'})
        }
        const user = await userModel.findOne({username:username})
        if(!user){
            return res.status(400).json({error:true,message:'User does not exist'});
        }
        const checkPassword = await bcrypt.compare(password,user.password);
        if(!checkPassword){
            return res.status(400).json({error:true,message:'Invalid password'})
        }
        const token = generateToken(user.username,user.role)
        if(token==""){
            return res.status(400).json({error:true,message:'Token generation failed'})
        }
        return res.status(200).json({error:false,message:{token:token}})
  }catch(err){
    console.log(err.message)
    return res.status(400).json({error:true , message:err.message})
  }
}

const Signup = async(req,res)=>{
    try{
        const {username,password} = req.body;
        if(!username||!password){
            res.status(400).json({error:true,message:'enter all the details'});
        }
        const user = await userModel.findOne({username});
        if(user){
            return res.status(400).json({error:true,message:'User already exists'});
        }
        const hashpassword = await bcrypt.hash(password,10);
        try{
            const doc = await userModel.create({
                username:username,
                password:hashpassword
            })
            return res.status(200).json({error:false,message:'User created successfully'})
        }catch(err){
            console.log(err.message)
            return res.status(500).json({error:true,message:'User creation failed'});
        }
    }catch(err){
        console.log(err.message)
        return res.status(400).json({error:true,message:'Signup failed'})
    }
}

const getEmp = async(req, res) => {
    if(!req.user){
        return res.status(400).json({error:true,message:'User not found'})
    }
    try{
        const users = await userModel.find()
        return res.status(200).json({error:false,data:users})
      }catch(err){
       console.log(err.message)
       res.status(400).json({error:true,message:err.message})
      }
}

module.exports = {Login,Signup,getEmp}