const express=require("express");
const app=express();

const port =8080;

app.set("view engine","ejs");

app.use(express.static('public'));


app.listen(port,()=>{
    console.log("server started listening at :",port);
})

app.get("/",(req,res)=>{

    res.render("index.ejs");
})