const express = require("express");
const router = express.Router();
const multer = require("multer")
const VenderData = require("../models/VenderModel");
// storage
const Storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: Storage
}).single('postImage')
router.post("/proposals",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            const VendersData = new VenderData({
                eventName: req.body.eventName,
                placeOfEvent: req.body.placeOfEvent,
                proposalType: req.body.proposalType,
                eventType: req.body.eventType,
                budget: req.body.budget,
                fromDate: req.body.fromDate,
                toDate: req.body.toDate,
                description: req.body.description,
                foodPreferences: req.body.foodPreferences,
                events: req.body.events,
                fileName:{
                    data: req.file.filename,
                    contentType: 'image/png'
                }

            })
            VendersData.save()
            .then(()=>res.send("successfully uploaded"))
            .catch((err)=>{console.log(err)})
        }
    })
})

router.get("/proposalsData",(req,res)=>{

    VenderData.find().then((data)=>{    
            res.status(200).send({data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
module.exports = router;