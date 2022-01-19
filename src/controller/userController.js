const mongoose = require('mongoose');
const User = require('../model/userModel')

module.exports = {
    async show(req, res){
        const user = await User.find();
        return res.json(user)
    },

    async register(req, res){
        const user = await User.insertMany(req.body)
        return res.send('Usuário registrado com sucesso!')
    },

    async update(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.send('Usuário editado!')
    },

    async delete(req, res){
        const user = await User.findByIdAndDelete(req.params.id)
        return res.send('Usuário foi removido!')
    }
}