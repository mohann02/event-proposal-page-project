const express = require('express');
const multer = require('multer');
const cors = require('cors');

const router = express();
const VenderData = require("../models/VenderModel");

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
router.post('/createProposals', upload.array('images',10), async (req, res) => {
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

    VenderData.find().then((data)=>{    
            res.status(201).send({data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
module.exports = router;