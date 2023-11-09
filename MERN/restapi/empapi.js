
const express = require("express");
const router = express.Router();
module.exports = router;

// api start 
const Employee = require("./empschema");

// to fetch all employee
router.get("/", async(req, res)=>{
    let allemp = await Employee.find();
    res.status(201).json(allemp);
});


// to add new employee
router.post("/", async(req, res)=>{
    let newemp = new Employee({
        empname : req.body.empname,
        dept : req.body.dept,
        city : req.body.city,
        salary : req.body.salary
    });
    let empinfo = await newemp.save();
    res.status(201).json(empinfo);
});


// to update record
router.patch("/", async(req, res)=>{
    let empdetails = await Employee.findById( req.body.id );

    if( req.body.empname !=""){
        empdetails.empname = req.body.empname;
    }

    if( req.body.dept !=""){
        empdetails.dept = req.body.dept;
    }

    if( req.body.city !=""){
        empdetails.city = req.body.city;
    }

    if( req.body.salary !=""){
        empdetails.salary = req.body.salary;
    }

    empdetails.save();
    res.status(201).json(empdetails);
})


// to delete record
router.delete("/:id", async(req, res)=>{
    let myemp = await Employee.findById( req.params.id );
    //let myemp = await Employee.findById( req.body.id );
    myemp.deleteOne();
    let msg = {"info":"Record Deleted Successfully !"};
    res.status(201).json(msg);
})

