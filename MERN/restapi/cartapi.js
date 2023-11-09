const express = require("express");
const router = express.Router();
module.exports = router;

const Cart = require("./cartschema");

router.get("/", async(req, res)=>{
    let allproduct = await Cart.find();
    res.status(200).json(allproduct);
});

router.post("/", async(req, res)=>{
   let newproduct = new Cart({
        pname : req.body.pname,
        price : req.body.price,
        qty   : req.body.qty,
        photo : req.body.photo,
        userid: req.body.userid
   });

   let pinfo = await newproduct.save();
   res.status(201).json({"msg":"Item Added in your cart"});
});

router.delete("/:id", async(req, res)=>{
    let allproduct = await Cart.findById( req.params.id );
    allproduct.deleteOne();
    let msg = {"info":"Record Deleted Successfully !"};
    res.status(201).json(msg);
});

router.put("/", async(req, res)=>{
    let product = await Cart.findById( req.body.id );
        product.qty=req.body.qty;
        await product.save();
        res.status(201).json({"msg":"Quantity Updated"});
 });