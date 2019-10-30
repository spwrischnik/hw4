const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

const faker = require('faker');
var randomName = faker.name.findName();
console.log("My name is " + randomName);
console.log("That was a lie.");

//routes
app.get("/index", function(req, res)
{
   res.render("index.html"); 
});
app.get("/network", function(req, res)
{
    res.render("network.html");
});
app.get("/program", function(req, res)
{
    res.render("program.html");
});
app.get("/operate", function(req, res)
{
    res.render("operate.html");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("express is running");
});

