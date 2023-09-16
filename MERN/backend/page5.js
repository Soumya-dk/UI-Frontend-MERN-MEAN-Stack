const express = require("express"); // calling express framework
const app = express();              // creating object of express
const cors = require("cors");      // calling cors origin library
app.use(cors());                  // creating object of cors library
app.use(express.json());         // injecting .json to send and receive data in json format


app.get("/", function(req, res){
    res.write("<h1> The server is running </h1>");
    res.end();
})

app.get("/booklist", function(req,res){
    let booklist=["html","css","react","javascript","node","php"];
    let jsondata=JSON.stringify(booklist) //convert from array to json
    res.write(jsondata);
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
    res.write(jsondata);
    res.end();
})

app.get("/mydata", function(req,res){
    let user=["Sumit","Ganesh","Sidhu","Raj","Kamal","Ajit","Mukesh"];
    let city=["Bangalore","Mumbai","Pune","Delhi","Chennai","Kolkata","Patna"];
    let book=["html","css","react","javascript","node","php"];
    let alldata={"userlist":user, "citylist":city, "booklist":book};

    let jsondata=JSON.stringify(alldata);
    res.write(jsondata);
    res.end();
});

const fs=require("fs");
app.get("/messagelist", function(req,res){
    fs.readFile("message.txt", function(error, data){
        res.send(data);
        res.end();
    })
})

app.post("/newmessage", function(req,res){
    let msg="\n" + req.body.message; //capture the new message sent by react
    let time=new Date().toLocaleString();
    msg=msg + " - Posted at : " + time;
    fs.appendFile("message.txt", msg + "#", function(error){
        res.send("Message Received Successfully !");
        res.end();
    })
})

app.get("/clearall", function(req,res){
    fs.writeFile("message.txt", "", function(error){
        res.send("Message Deleted Successfully !");
        res.end();
    })
})
app.listen(2222,function(){
    console.log("The server is live..");
})

// http://localhost:2222