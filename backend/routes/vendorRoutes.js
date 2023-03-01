const express = require("express");
const Vendor=require("../models/vendorLogin");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get("/vendor",async(req,res)=>{
    try{
        const vendor=await Vendor.find();
        res.status(200).json({
            status:"Done",
            vendor
        })
    }catch(e){
        res.status(500).json({
            status:'Failed',
            message:e.message,
        })
    }
})
  

module.exports = router;
