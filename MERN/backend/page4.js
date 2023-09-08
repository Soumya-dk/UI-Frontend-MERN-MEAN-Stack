let http=require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/json'});
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
    
}).listen(1111)