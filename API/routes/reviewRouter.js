const express = require("express");
const router = express.Router({mergeParams:true});
const User = require("../models/User.js");
const asyncHandler = require('express-async-handler');


router.post("/add",asyncHandler(async(req,res)=>{
    let {rating,comment} = req.body;
    console.log(`rating is ${rating}`);
     res.status(200).send({success:true});
}))

module.exports = router;