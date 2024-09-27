require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const router = require('./router/router');
const Dbconnection = require('./utils/db'); 

// Apply CORS middleware before defining any routes
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(router); // Ensure this is the correct path for your routes

const Port = 3000;

Dbconnection()
    .then(() => {
        app.listen(Port, () => {
            console.log(`Server is running at port ${Port}`);
        });
    })
    .catch((err) => {
        console.log("DB Connection failed. Exiting now...");
        process.exit(1);
    });
