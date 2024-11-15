require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/v1', employeeRoutes)

const userRoutes = require('./routes/userRoutes');
app.use('/api/v1/user', userRoutes)

const protectedRoute = require('./routes/protectedRoute');
app.use('/protected', protectedRoute);


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


