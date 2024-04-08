const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');



const generateToken = (id)=>{
    return jwt.sign({id},"abc123",{
        expiresIn:'30d'
    })
}


router.post("/signup", asyncHandler(async (req, res) => {
    const { username, name, email, password } = req.body;

    if(!name || !email|| !password){
        return res.status(400).send({success:false});
    }
    // check if user exists
    const usernameExists = await User.findOne({username});
    const emailExists = await User.findOne({email})
    if(usernameExists){
        return res.status(400).json({success:false,message:"username already exists"});

    }
    if(emailExists){
        return res.status(400).json({success:false,message:"email already exists"});
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    
    // create user
    try{
        const user = await User.create({
            name,
            email,
            username,
            password:hashedPassword
        })
        return res.status(201).json({
            success:true,
            _id:user.id,
            username:user.username,
            email:user.email,
            token:generateToken(user._id)
        })
    }catch(err){
        return res.status(400).json({success:false})
    }
 
}));

router.post("/login", asyncHandler(async(req, res) => {
    const {username,password} = req.body;
    // checking for username
    try{
        const user = await User.findOne({username});
        console.log(user);
        const comparepasswords = await bcrypt.compare(password,user.password);
        console.log(comparepasswords);
        if(comparepasswords){
            console.log("iam done");
            return res.status(200).json({
                success:true,
                _id:user.id,
                username:user.username,
                email:user.email,
                token:generateToken(user._id)
            })
        }
        else{
            console.log("iam here also")
            res.status(400).json({success:false})
        }

    }catch(err){
        console.log(err);
        res.status(400).json({success:false})
    }
       
}));



module.exports = router;