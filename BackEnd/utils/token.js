const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config('./env')
const secret = process.env.SECRET;

const generateToken = (username,role)=>{
    try{
        const token = jwt.sign(
            {username,role},
             secret,
            {expiresIn:'7d'}
        )
        return token;
    }catch(err){
        console.error(err.message)
        return "";
    }
}
module.exports={generateToken}