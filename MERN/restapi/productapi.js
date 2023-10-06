
const express = require("express");
const router = express.Router();
module.exports = router;

const Product = require("./productschema");

router.get("/", async(req, res)=>{
    let allproduct = await Product.find();
    res.status(200).json(allproduct);
});


router.post("/", async(req, res)=>{
   let newproduct = new Product({
        pname : req.body.productname,
        price : req.body.productprice,
        qty   : req.body.productqty,
        photo : req.body.productphoto
   });

   let pinfo = await newproduct.save();
   res.status(201).json(pinfo);
});

router.delete("/:id", async(req, res)=>{
    let productinfo=Product.findOne(req.params.id);
    
    if(productinfo==null){
        res.status(200).json({"msg":"No Such Records Exists !"});
    }else{
        await productinfo.deleteOne();
        res.status(200).json({"msg":"Record Deleted Successfully !"})
    } 
})


router.patch("/", (req, res)=>{

})


