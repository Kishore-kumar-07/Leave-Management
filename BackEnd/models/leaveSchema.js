const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        empType: {
            type: String,
            required: true,
            enum: ['type-I', 'type-II']
        },
        leaveType: {
            type: String,
            required: true,
            enum: ['type-I', 'type-II']
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        numberOfDays: {
            type: Number,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: ['Pending', 'Approved', 'Denied'],
            default: 'Pending'
        }
    },
    {
        timestamps: true
    }
);

const LeaveModel = mongoose.model('leave',schema)
module.exports={LeaveModel};