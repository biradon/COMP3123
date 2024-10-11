const noteModel = require('../models/NotesModel');
const express = require('express');
const app = express.Router()

module.exports = app;
const date = new Date();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.noteDescription) {
        return res.status(400).send({
            message: "Note description can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const data = new noteModel({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: date,
        dateUpdated: date,
    })
    try {
        const dataToSave = await data.save();
        res.status(201).json({message: "Note created successfully", noteId: dataToSave.id});
    }
    catch (error) {
        res.status(401).json({status: "False", message: error.message});
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    //TODO - Write your code here to returns all note
    try {
        const data = await noteModel.find();
        res.json(data)
    } catch (error) {
        res.status(401).json({status: "false", message: error.message})
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "NoteId can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try {
        const data = await noteModel.findById(req.params.noteId);
        res.json(data)
    } catch (error) {
        res.status(404).json({status: "false", message: error.message});
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "NoteId can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try {
        const noteId = req.params.noteId
        req.body.dateUpdated = date;
        const updatedData = req.body;
        await noteModel.findByIdAndUpdate(noteId, updatedData)
        res.status(200).json({message: "Note details updated successfully"})
    } catch (error) {
        res.status(401).json({status: "false", message: error.message})
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "NoteId can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try {
        const noteId = req.params.noteId;
        await noteModel.findByIdAndDelete(noteId)
        res.status(202).json({message: "Note deleted successfully"});
    }
    catch (error) {
        res.status(400).json({ status: "false", message: "Something wrong, please try again" })
    }
});
