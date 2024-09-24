const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    created_at: {
        required: true,
        type: Date
    },
    updated_at: {
        required: true,
        type: Date
    },
})

module.exports = mongoose.model('user', userSchema)