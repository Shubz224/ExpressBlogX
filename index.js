import express from "express";
import path from "path";
import   Userroute from "./routes/user.js";

import mongoose from "mongoose"

const app = express();
const PORT =8000;

//connection db 

mongoose.connect('mongodb://localhost:27017/blogify').then((e)=>console.log("MongoDb connected"))


//using routes
app.use(express.urlencoded({extended:false}))
app.use("/user",Userroute);
//setting up engine
app.set("view engine" , "ejs") ;
app.set("views", path.resolve("./views"));



app.get("/",(req,res)=>{
    res.render("home");
})

app.listen(PORT,()=>
    console.log(`server started on PORT : ${PORT}`)
);