const express = require("express");
const app = express();

const env  = require("dotenv");
env.config()

app.use(express.json())

const homeRoute = require("./routes/homeRoute");

app.use('/',homeRoute);



let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Ther server listening on port ",port);
});