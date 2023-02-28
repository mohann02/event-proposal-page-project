const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const VenderSchema = new Schema({
    eventName:{
        type: String, 
        required: true
    },
    placeOfEvent:{
        type: String, 
     
    },
    proposalType:{
        type: String, 
      
    },
    eventType:{
        type: String, 
     
    },
    budget:{
        type: Number, 
        
    },
    fromDate:{
        type: String, 
      
    },
    toDate:{
        type: String, 
        
    },
    description:{
        type: String, 
        required: true
    },
    fileName: {
       data:Buffer,
       contentType:String
    },
    foodPreferences:{
        type: String
    }, 
    events:{
        type: String
    }
})
module.exports = mongoose.model("VenderProposals",VenderSchema )