const express = require('express')
const mongoose = require("mongoose")
const VenderRoutes =require("./routes/VendrRoutes")
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express()
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log("server is running", port)
    } else {
        console.log(err)
    }
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use("/",VenderRoutes)
// mongodb connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("Connected to database successfully...");
    }
})
// mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error(err));