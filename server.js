const express = require("express")
const app = express()
const port = 3000

app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/home.html')
})


app.get('/projects', function(req, res){        
    res.sendFile(__dirname + '/src/projects.html')
})


app.get('/about', function(req, res){
    res.sendFile(__dirname + '/src/about.html')
})

app.listen(port, function(){
    console.log(`server started at port: ${port}`);
})