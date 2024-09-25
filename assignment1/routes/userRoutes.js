const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router()

module.exports = router;

const date = new Date();

const Model = require('../models/userModel');

// User signup
router.post(
    '/signup',
    async (req, res) => {
        try {
            const data =  new Model ({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                created_at: date,
                updated_at: date
            })
            const hashedPassword = await bcrypt.hash(data.password, 10);
            data.password = hashedPassword;
            await data.save();
            res.status(201).json({ message: 'User created successfully', user_id: data.id });
        } 
        catch (error) {
            res.status(500).json({ status: "false", message: 'Signup failed' });
        }
    });


router.post(
    '/login',
    async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await Model.findOne({username})
            if(!user) {
                return res.status(401).json({ status: "false", message: "Invalid username or password"});
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ status: "false", message: 'Invalid username or password' });
            }
            const token = jwt.sign({ userId: user._id }, 'Georgebrown753*', {
                expiresIn: '1h',
            });
            res.status(200).json({ message: 'Login successfull'});
        } 
        catch (error) {
            res.status(500).json({ status: "false", message: 'Login failed' });
        }
    });



