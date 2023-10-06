const mongoose = require("mongoose");

const empStructure = new mongoose.Schema({
   empname : { type : String, required : true},
   dept : { type : String, required : true},
   city : { type:String, required : true},
   salary : { type:String, required : true} 
})

module.exports = mongoose.model("Employee", empStructure);