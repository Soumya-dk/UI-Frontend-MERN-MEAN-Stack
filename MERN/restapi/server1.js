const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/company", {useNewUrlParser:true});
const db = mongoose.connection; // to connect with database

db.on("error", (error)=>console.log( error ));
db.on("open", ()=> console.log("Database is Connected..."));


const cors = require("cors");      // calling cors origin library
app.use(cors());                  // creating object of cors library
app.use(express.json());

// linking with empapi
const employee = require("./empapi");
app.use("/emplist", employee);  // http://localhost:5555/emplist 


const product = require("./productapi");
app.use("/productlist", product);  // http://localhost:5555/productlist 


app.listen(5555, ()=> console.log("Server is Started..."));