const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const productRoute = require("./router/Product");
const path = require("path");

app.use(express.json());
app.use(cors({origin: "*"}));

 mongoose.connect("mongodb://localhost:27017/productOrder", {useUnifiedTopology: true, useNewUrlParser:true, useFindAndModify:false}, (err)=>{ 
if(!err){
    console.log("DB connected Successfully");
  }
  else{
      console.log(err);
  }
 }
);


app.get("/", (req, res)=>{
    res.status(200).send("Welcome to home route");
});

app.use("/product", productRoute);

app.use(express.static(__dirname));

app.get("/*",(req,res,next) =>{
    res.sendFile(path.join(__dirname, "./client/", "public", "index.html"));
})

app.listen(process.env.port, ()=>{
    console.log("Server is running on the port: ", process.env.port);
});