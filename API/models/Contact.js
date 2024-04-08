const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User  = require('./User.js');

const contactSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})