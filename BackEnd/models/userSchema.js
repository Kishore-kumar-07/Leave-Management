const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['admin', 'type-I', 'type-II'],
            default: 'type-I'
        },
        leaveTaken: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps:true
    }
);

const userModel = mongoose.model('user',schema)
module.exports={userModel}