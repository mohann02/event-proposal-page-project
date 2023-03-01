const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.set('strictQuery', false);

dotenv.config();

async function getConnection() {
    await mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connection successful");
    }).catch(e=>console.log(e)); 
}

module.exports = getConnection;
