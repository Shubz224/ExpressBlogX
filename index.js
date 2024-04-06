import express from "express";
import path from "path";

const app = express();
const PORT =8000;

//setting up engine
app.set("view engine" , "ejs") ;
app.set("views", path.resolve("./views"));

//using routes

app.get("/",(req,res)=>{
    res.render("home");
})

app.listen(PORT,()=>
    console.log(`server started on PORT : ${PORT}`)
);