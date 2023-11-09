const express = require("express");
const router = express.Router();
module.exports = router;

const Registration = require("./registrationschema")

router.get("/", async (req,res) => {
    let allregistration = await Registration.find()
    res.status(201).json(allregistration)

})

router.post("/",async(req,res)=>{
    let newregister = new Registration({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password

    });
    let registerinfo = await newregister.save();
    res.status(201).json(registerinfo);
});


router.put("/",async(req,res)=>{
    
    let input = {"email":req.body.email, "password":req.body.password};
    let allregistration = await Registration.find(input);
    res.status(201).json(allregistration);
    
})




