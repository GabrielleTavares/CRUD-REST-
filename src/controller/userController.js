const mongoose = require('mongoose');
const User = require('../model/userModel')

module.exports = {
    async show(req, res){
        const user = await User.findById(req.params.id);
        return res.json(user)
    },

    async register(req, res){
        const user = await User.insertMany(req.body)
        return res.json(user)
    },

    async update(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(user)
    },

    async delete(req, res){
        const user = await User.findByIdAndDelete(req.params.id)
        return res.json(user._id)
    }
}