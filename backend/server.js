require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/Workout');

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen to request
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000', process.env.PORT )
})
})
.catch((error) => {
    console.log(error)
})

