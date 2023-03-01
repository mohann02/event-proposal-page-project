const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
        
    },
    contact:{
        type:Number,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',UserSchema)

//connection

mongoose.connect("mongodb://localhost/users",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log("not connected")
})

module.exports = User;