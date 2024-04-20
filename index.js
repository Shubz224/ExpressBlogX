import express from "express";
import path from "path";
import Userroute from "./routes/user.js";
import blogroute from "./routes/blog.js";
import { checkAuthenticationCookie } from "./middlewares/authentication.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import Blog from "./models/blog.js";
const app = express();
const PORT = process.env.PORT || 8000;

//connection db

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then((e) => console.log("MongoDb connected"));

//using routes
app.use(express.urlencoded({ extended: false }));
app.use("/user", Userroute);
app.use("/blog", blogroute);
app.use(cookieParser());
app.use(checkAuthenticationCookie("token"));
//setting up engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.listen(PORT, () => console.log(`server started on PORT : ${PORT}`));
