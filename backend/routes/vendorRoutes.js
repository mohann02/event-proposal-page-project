const express = require('express');
const multer = require('multer');
const cors = require('cors');

const router = express();
const VenderData = require("../models/VendorModels");
const VenderDetails = require("../models/vendorLogin");
const userDetails=require("../models/userLogin");

router.use(express.json());
router.use(cors());

// multer for files upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// post
router.post('/createProposals', upload.array('images'), async (req, res) => {
  try {
    const { eventName, placeOfEvent, proposalType, eventType, budget, fromDate, toDate, description,foodPreferences,events  } = req.body;
    const images = req.files.map(file => file.filename);
    const VendersData = new VenderData({ eventName,images, placeOfEvent, proposalType, eventType, budget, fromDate, toDate, description,foodPreferences,events });
    await VendersData.save();
    res.status(201).send({ message: 'Data submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: 'Internal server error occurs' });
  }
});

// get
router.get("/proposalsData",(req,res)=>{

    VenderData.find().sort({createdAt:-1}).then((data)=>{    
            res.status(201).send({data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})


//delete
router.delete("/proposalDelete/:id", async (req, res) => {
  try {
    const data = await VenderData.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// edit 
router.put("/editProposals/:id", async (req, res) => {
  try {
    const data = await VenderData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete

// router.delete("/proposalDelete/:id", (req, res) => {
//   VenderData.findByIdAndDelete(req.params.id)
//     .then((data) => res.json(data))
//     .catch((err) => console.log(err));
// });

//get vendor details
router.get("/vendorDetails",(req,res)=>{

    VenderDetails.find().then((data)=>{    
            res.status(201).send({data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

//get user details
router.get("/userDetails",(req,res)=>{

    userDetails.find().then((data)=>{    
            res.status(201).send({data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports = router;
