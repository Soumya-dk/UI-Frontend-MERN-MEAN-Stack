const express = require("express"); // calling express framework
const app = express();              // creating object of express
const cors = require("cors");      // calling cors origin library
app.use(cors());                  // creating object of cors library
app.use(express.json());         // injecting .json to send and receive data in json format


app.get("/", function(req, res){
    res.send("<h1> The server is running </h1>");
    res.end();
})

app.get("/booklist", function(req,res){
    let booklist=["html","css","react","javascript","node","php"];
    let jsondata=JSON.stringify(booklist) //convert from array to json
    res.send(jsondata);
    res.end();
})

app.get("/allbook", function(req,res){
    let booklist=[
        {name:"HTML",price:300,author:"Ganesh"},
        {name:"CSS",price:200,author:"Alex"},
        {name:"REACT",price:250,author:"Mahesh"},
        {name:"PHP",price:350,author:"Ramesh"},
        {name:"NODEJS",price:310,author:"Sumit"},
    ];
    let jsondata=JSON.stringify(booklist);
    res.send(jsondata);
    res.end();
})

app.listen(2222,function(){
    console.log("The server is live..");
})

// http://localhost:2222