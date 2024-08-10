const {LeaveModel} = require('../models/leaveSchema')
const {userModel} = require('../models/userSchema')

const applyLeave = async(req, res) => {
    try{
        const {username, empType, leaveType, from, to, numberOfDays, reason } = req.body;
        const user = await userModel.findOne({username})
        if(!user){
            return res.status(404).json({error: true, message: 'User not found'})
        }
        else{
            await LeaveModel.create({username, empType, leaveType, from, to, numberOfDays, reason})
            res.status(201).json({error: false, message: 'Leave application submitted successfully'})
        }
    } catch(err){
        return res.status(500).json({error: true, message: err.message})
    }
}

const approved = async(req, res) => {
    try{
        const data = await LeaveModel.findOne({_id: req.body.id})
        console.log(data.username)
        const user = await userModel.findOne({username: data.username})
        console.log(user)
        const number = await userModel.findByIdAndUpdate(user._id, {leaveTaken: user.leaveTaken+1})
        const leave = await LeaveModel.findByIdAndUpdate(req.body.id, {status: 'Approved'})
        return res.json({error: false, message: "leave approved"})
    } catch(err){
        return res.status(500).json({error: true, message: err.message})
    }
}

const denied = async(req, res) => {
    try{
        const leave = await LeaveModel.findByIdAndUpdate(req.body.id, {status: 'Denied'})
        return res.json({error: false, message: "leave denied"})
    } catch(err){
        return res.status(500).json({error: true, message: err.message})
    }
}

const getLeaves = async(req, res) => {
    try{
        const leaves = await LeaveModel.find()
        return res.json({error: false, data: leaves})
    } catch(err){
        return res.status(500).json({error: true, message: err.message})
    }
}

const getLeaveByUser = async(req, res) => {
    try{
        const leave = await LeaveModel.find({username: req.body.username})
        return res.json({error: false, data: leave})
    } catch(err){
        return res.status(500).json({error: true, message: err.message})
    }
}

module.exports = {applyLeave,approved,denied,getLeaves,getLeaveByUser}