const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router()

module.exports = router;

const Model = require('../models/employeeModel');

const date = new Date();


// Get all employees
router.get(
    '/emp/employees',
    async (req, res) => {
        try{
            const data = await Model.find();
            res.json(data)
        }
        catch(error){
            res.status(500).json({status: "false", message: error.message})
        }
    }
)

// // Get one employee
router.get('/emp/employees/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({status: "false", message: error.message})
    }
})


// Create employee
router.post(
    '/emp/employees', async (req, res) => {
    const data = new Model({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        position: req.body.position,
        salary: req.body.salary,
        date_of_joining: req.body.date_of_joining,
        department: req.body.department,
        created_at: date,
        updated_at: date
    })

    try {
        const dataToSave = await data.save();
        res.status(201).json({message: "Employee create successfully", employee_id: dataToSave.id});
    }
    catch (error) {
        res.status(400).json({status: "false", message: error.message})
    }
})

// Upate employee info
router.put('/emp/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        req.body.updated_at = date;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.status(200).json({message: "Employee details updated successfully"});
    }
    catch (error) {
        res.status(400).json({ status: "false", message: error.message })
    }
})

//Delete employee info
router.delete('/emp/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.status(202).json({message: "Employee deleted successfully"});

    }
    catch (error) {
        res.status(400).json({ status: "false", message: error.message })
    }
})
