const mongoose = require("mongoose");

const orderStructure = new mongoose.Schema({
   fullname : { type : String, required : true},
   mobileno : { type : String, required : true},
   emailid : { type:String, required : true},
   cityname : { type:String, required : true},
   userid : { type:String, required : true},
   orderdata : {type:Object, required : true}
})

module.exports = mongoose.model("Order", orderStructure);