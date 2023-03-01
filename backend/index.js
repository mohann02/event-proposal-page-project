const express = require('express');
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;
const getConnection = require("./db/conn")
getConnection();

const app = express();
app.use(express.json())


const User = require("./models/User")

app.get("/", (req,res)=>{
    res.send("hello")
})

//Register a new user

app.post("/register",(req,res)=>{
    // console.log(req.body);
    const{name,email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }
    })
    const user = new User({
        name,
        email,
        contact,
        password
    });
    user.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send("Succesfully registered")
        }
    })
})

//Signin user

app.post("/signin",(req,res)=>{
    const{email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Signin Successful",user:user})
            } else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send("User not registered",)
        }
    })
})

app.listen(port,()=>{
    console.log("listening")
})