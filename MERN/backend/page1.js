let http=require("http");

http.createServer(function(req, res){
    console.log("server is live");
    res.write("<h1> Welcome to node </h1>");
    res.write("<h2> Welcome back </h2>");
    res.end();
}).listen(1111);
// http://localhost:1111