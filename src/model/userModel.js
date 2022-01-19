const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    firstName: {
        type: Schema.Types.String,
        required: true,
    },

    lastName: {
        type: Schema.Types.String,
        required: true
    },

    age: {
        type: Schema.Types.Number,
        required: true,
    },

    email: {
        type: Schema.Types.String,
        required: true,
    },

    tel: {
        type: Schema.Types.String,
        required: true,
    }

});



module.exports = mongoose.model('Users', UserSchema);