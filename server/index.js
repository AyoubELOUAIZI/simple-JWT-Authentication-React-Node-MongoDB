const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();  // load environment variables from .env file
const colors = require('colors');  // import the `colors` library for console logs

// const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");


const app = express();


connectDB();
// mongoose
//     .connect("mongodb://localhost:27017/jwt", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log("DB Connetion Successfull");
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });


app.use(
    cors({
        origin: ["http://localhost:8000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());
 app.use("/", authRoutes);

app.listen(4000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started Successfully.");
    }
});