const express = require("express"); 
const app = express();
app.listen(3000, function(){
    console.log("Server has started on 3000");
});
app.get("/", function(request, response){
    response.send("<h1>Hi this is Nikhil's website</h1>");
});

//loginroute
app.get("/login", function(req,res){
    res.sendFile(__dirname + "/index.html");
});