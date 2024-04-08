const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const userSchema = new Schema({

    name: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
},
{
    timestamps:true
});


module.exports = mongoose.model("User",userSchema);