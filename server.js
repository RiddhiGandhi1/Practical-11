const express = require ("express");
const app = express();
app.use(express.json());
const port = 3001;
const mongoose = require("mongoose");
const userModel = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/dcs")
  .then(() => console.log("MongoDB Connected !!"));

app.get("/api/", (req, res) => res.send("Hello Fullstack!"));

// Register user
app.post("/api/registration", (req, res) => {
  const newUser = req.body;
  userModel.create(newUser);
  return res.json({ data: "Registered Successfully" });
});

//Login user
app.post("/api/login", async(req,res)=>{
  const uname = req.body.username;
  const pwd = req.body.password;
  const loginUser = await userModel.findOne({username: uname, password: pwd});
  if(loginUser) {
    return res.json({data: "OK"})
  } else {
    return res.json({data: "UserName or Password Wrong !!"})
  }
});

//Search User
app.post("/api/search", async(req, res) => {
  const uname = req.body.username;
  const searchUser = await userModel.findOne({username: uname});
  if(searchUser) {
    return res.json({ data: "OK" });
  } else {
    return res.json({ data: "User Not Found !!" });
  }
});

app.listen(port, () => console.log(`Server Running on Port 3001`));
