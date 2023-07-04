const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// setup for envirnment variables
require('dotenv').config();
const app = express();

// for database
mongoose.connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

// MiddleWares 
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hi everyone"
    })
})



app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT} `);
})