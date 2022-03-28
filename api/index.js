const express = require("express");
const app = express();
//yarn add express mongoose dotenv helmet morgan nodemon
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

app.listen(8800,()=>{
    console.log("Backend server is running!")
})