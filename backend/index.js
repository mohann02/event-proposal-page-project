const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;


const app = express();
app.use(express.json())


const User = require("./models/User")

//create a new user


app.post("/register",(req,res)=>{
    console.log(req.body);
    const user = new User(req.body);

    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
   
})

app.listen(port,()=>{
    console.log("listening")
})