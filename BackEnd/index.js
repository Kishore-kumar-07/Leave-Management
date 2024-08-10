const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const leaveRoutes = require('./routes/leaveRoutes')

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

dotenv.config('./env')

app.use('/users',userRoutes)
app.use('/leave',leaveRoutes)

app.get("/test", (req, res)=>{
    try{
        res.status(200).json({error: false, message: "API works successfully"})
    } catch(err){
        res.status(500).json({error: true, message: err.message})
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})

try{
    const connectDb = async()=>{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected')
    }
    connectDb()
} catch(err){
    console.log(err)
}