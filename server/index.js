// index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const apiRouter = require('./api'); // Import the API endpoints
const path= require('path');
//mongo url
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/crudoperation';

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, './web')));

const PORT = process.env.PORT || 3000;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to db");
        app.listen(PORT, '0.0.0.0', () => console.log("Server is running"));
    })
    .catch((err) => console.log(err));

app.use('/', apiRouter); // Use the API routes from api.js

// Serve the React app for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build','index.html'));
});

