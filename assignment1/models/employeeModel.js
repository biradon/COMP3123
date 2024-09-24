const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    position: {
        required: true,
        type: String
    },
    salary: {
        required: true,
        type: Number
    },
    date_of_joining: {
        required: true,
        type: Date
    },
    department: {
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

module.exports = mongoose.model('employee', employeeSchema)