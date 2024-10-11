const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: {
        require: true,
        type: String
    },
    noteDescription: {
        require: true,
        type:String
    },
    priority: {
        require: true,
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
    },
    dateAdded: {
        require: true,
        type: Date
    },
    dateUpdated: {
        require: true,
        type: Date
    }
})

module.exports = mongoose.model('note', noteSchema)