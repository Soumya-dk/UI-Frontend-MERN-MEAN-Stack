const express = require("express");
const router = express.Router();
module.exports = router;

const Order = require("./orderschema");
const Cart = require("./cartschema");

router.get("/", async(req, res)=>{
    let allorder = await Order.find();
    res.status(200).json(allorder);
});

router.post("/", async(req, res)=>{
   let newproduct = new Order({
        fullname: req.body.name,
        mobileno : req.body.mobile,
        emailid   : req.body.email,
        cityname : req.body.city,
        userid: req.body.userid,
        orderdata:req.body.itemlist
   });

   let pinfo = await newproduct.save();
   await Cart.deleteMany(); //Delete all data from cart
   res.status(201).json({"msg":"Your Order Placed Successfully..."});
});

