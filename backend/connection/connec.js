const mongoose=require('mongoose');
mongoose.set('strictQuery',false)

async function getConnection(){
    await mongoose.connect('mongodb+srv://sravankumar:sravan3025@cluster0.4lrgexp.mongodb.net/?retryWrites=true&w=majority');
}

module.exports=getConnection;